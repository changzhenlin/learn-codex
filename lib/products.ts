import { mockProducts } from "@/lib/mock-products";
import type { Product } from "@/lib/mock-products";

export async function getPublishedProducts(): Promise<Product[]> {
  return [...mockProducts]
    .filter((product) => product.status === "PUBLISHED")
    .sort((left, right) => right.createdAt.getTime() - left.createdAt.getTime());
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product =
    mockProducts.find(
      (entry) => entry.slug === slug && entry.status === "PUBLISHED"
    ) ?? null;

  return product;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 2
  }).format(price);
}

export function getProductAvailability(stock: number): {
  label: string;
  className: "in-stock" | "out-of-stock";
} {
  if (stock > 0) {
    return {
      label: `库存 ${stock} 件`,
      className: "in-stock"
    };
  }

  return {
    label: "暂时缺货",
    className: "out-of-stock"
  };
}
