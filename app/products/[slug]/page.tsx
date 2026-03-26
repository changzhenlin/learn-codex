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
    <main className="detail-page">
      <section className="detail-lead">
        <Link className="back-link" href="/products">
          返回商品列表
        </Link>
        <span className="detail-lead-note">Soft blue shop edit</span>
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

          <div className="detail-spotlight">
            <div className="detail-spotlight-item">
              <strong>适合空间</strong>
              <span>卧室、客厅、书桌角落等需要一点明亮情绪的区域。</span>
            </div>
            <div className="detail-spotlight-item">
              <strong>气质关键词</strong>
              <span>轻盈、温柔、带一点年轻感，不会压住整体空间。</span>
            </div>
          </div>

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
