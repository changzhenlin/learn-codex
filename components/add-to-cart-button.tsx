"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/components/cart-provider";

type AddToCartButtonProps = {
  productId: number;
  stock: number;
  variant?: "primary" | "secondary";
};

export function AddToCartButton({
  productId,
  stock,
  variant = "primary"
}: AddToCartButtonProps) {
  const { addItem, detailedItems } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const quantityInCart = useMemo(
    () =>
      detailedItems.find((item) => item.product.id === productId)?.quantity ?? 0,
    [detailedItems, productId]
  );

  const isOutOfStock = stock <= 0;
  const isAtLimit = quantityInCart >= stock;

  return (
    <button
      className={`cart-button ${variant === "secondary" ? "secondary" : "primary"}`}
      disabled={isOutOfStock || isAtLimit}
      type="button"
      onClick={() => {
        addItem(productId);
        setJustAdded(true);
        window.setTimeout(() => setJustAdded(false), 1200);
      }}
    >
      {isOutOfStock
        ? "暂时缺货"
        : isAtLimit
          ? "已达库存上限"
          : justAdded
            ? "已加入购物车"
            : "加入购物车"}
    </button>
  );
}
