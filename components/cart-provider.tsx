"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { mockProducts, type Product } from "@/lib/mock-products";

const STORAGE_KEY = "studio-market-cart";

export type CartItem = {
  productId: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  detailedItems: Array<{
    product: Product;
    quantity: number;
    lineTotal: number;
  }>;
  itemCount: number;
  subtotal: number;
  addItem: (productId: number) => void;
  decrementItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function clampQuantity(quantity: number, stock: number) {
  return Math.max(1, Math.min(quantity, stock));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (storedValue) {
      try {
        const parsed = JSON.parse(storedValue) as CartItem[];
        setItems(
          parsed.filter((item) => {
            const product = mockProducts.find((entry) => entry.id === item.productId);
            return product && product.stock > 0 && item.quantity > 0;
          })
        );
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  const value = useMemo<CartContextValue>(() => {
    const detailedItems = items.flatMap((item) => {
      const product = mockProducts.find((entry) => entry.id === item.productId);

      if (!product || product.stock <= 0) {
        return [];
      }

      const quantity = clampQuantity(item.quantity, product.stock);

      return [
        {
          product,
          quantity,
          lineTotal: product.price * quantity
        }
      ];
    });

    const itemCount = detailedItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = detailedItems.reduce((sum, item) => sum + item.lineTotal, 0);

    return {
      items,
      detailedItems,
      itemCount,
      subtotal,
      addItem(productId: number) {
        setItems((current) => {
          const product = mockProducts.find((entry) => entry.id === productId);

          if (!product || product.stock <= 0) {
            return current;
          }

          const existing = current.find((item) => item.productId === productId);

          if (!existing) {
            return [...current, { productId, quantity: 1 }];
          }

          return current.map((item) =>
            item.productId === productId
              ? {
                  ...item,
                  quantity: clampQuantity(item.quantity + 1, product.stock)
                }
              : item
          );
        });
      },
      decrementItem(productId: number) {
        setItems((current) =>
          current.flatMap((item) => {
            if (item.productId !== productId) {
              return [item];
            }

            if (item.quantity <= 1) {
              return [];
            }

            return [{ ...item, quantity: item.quantity - 1 }];
          })
        );
      },
      removeItem(productId: number) {
        setItems((current) => current.filter((item) => item.productId !== productId));
      },
      clearCart() {
        setItems([]);
      }
    };
  }, [items, hydrated]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider.");
  }

  return context;
}
