import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import type { Product } from "@/lib/mock-products";
import { formatPrice, getProductAvailability } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const availability = getProductAvailability(product.stock);

  return (
    <article className="card">
      <div className="card-media">
        <img src={product.coverImage} alt={product.name} />
      </div>

      <div className="card-body">
        <div className="card-title-row">
          <h3 className="card-title">{product.name}</h3>
          <span className="price">{formatPrice(product.price)}</span>
        </div>

        <p className="card-summary">{product.summary}</p>
        <span className={`badge ${availability.className}`}>{availability.label}</span>

        <div className="card-actions">
          <Link className="card-link" href={`/products/${product.slug}`}>
            查看详情
          </Link>
          <AddToCartButton productId={product.id} stock={product.stock} variant="secondary" />
        </div>
      </div>
    </article>
  );
}
