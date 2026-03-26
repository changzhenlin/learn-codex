import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { formatPrice, getProductAvailability, getProductBySlug } from "@/lib/products";

export const dynamic = "force-dynamic";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const availability = getProductAvailability(product.stock);
  const contentParagraphs = product.content
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main className="page-shell">
      <section className="hero" style={{ paddingBottom: 0 }}>
        <Link className="back-link" href="/products">
          返回商品列表
        </Link>
      </section>

      <section className="detail-layout">
        <div className="detail-panel">
          <img src={product.coverImage} alt={product.name} />
        </div>

        <article className="detail-body">
          <p className="eyebrow">{product.status === "PUBLISHED" ? "Available now" : "Hidden"}</p>
          <h1 className="detail-title">{product.name}</h1>

          <div className="detail-meta-row">
            <span className={`badge ${availability.className}`}>{availability.label}</span>
            <span className="price">{formatPrice(product.price)}</span>
          </div>

          <p className="detail-summary" style={{ marginTop: "20px" }}>
            {product.summary}
          </p>

          <div className="detail-actions">
            <AddToCartButton productId={product.id} stock={product.stock} />
            <Link className="cta-link subtle" href="/cart">
              查看购物车
            </Link>
          </div>

          <div className="rich-text">
            <h3>商品详情</h3>
            {contentParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
