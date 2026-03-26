import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getPublishedProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getPublishedProducts();
  const featuredProduct = products[0];

  return (
    <main>
      <section className="shop-hero">
        <div className="shop-hero-shell">
          <p className="eyebrow">Studio Market</p>
          <div className="shop-hero-grid">
            <div className="shop-hero-copy">
              <h1 className="hero-title">浅蓝和浅粉之间，挑一件让房间变轻快的单品。</h1>
              <p className="hero-copy">
                用更年轻的配色和更干净的陈列方式，把家具和摆件做成像杂志封面一样的浏览体验。你可以先逛列表，再进入详情页看完整信息和加入购物车。
              </p>

              <div className="hero-actions">
                <Link className="cta-link" href="/cart">
                  查看购物车
                </Link>
                {featuredProduct ? (
                  <Link className="ghost-button" href={`/products/${featuredProduct.slug}`}>
                    直接看主推单品
                  </Link>
                ) : null}
              </div>

              <div className="hero-meta">
                <div className="hero-meta-item">
                  <strong>06 件精选</strong>
                  <span>只保留轻松、明亮、有氛围感的居家单品。</span>
                </div>
                <div className="hero-meta-item">
                  <strong>本地加购</strong>
                  <span>当前购物车使用本地状态，方便先看完整 UI 流程。</span>
                </div>
                <div className="hero-meta-item">
                  <strong>响应式布局</strong>
                  <span>桌面端像海报，移动端则保持清晰紧凑。</span>
                </div>
              </div>
            </div>

            {featuredProduct ? (
              <div className="shop-hero-visual">
                <span className="hero-visual-orb one" />
                <span className="hero-visual-orb two" />
                <div className="hero-floating-note top">
                  <strong>本周主推</strong>
                  <span>{featuredProduct.name}</span>
                </div>
                <div className="hero-image-wrap">
                  <img src={featuredProduct.coverImage} alt={featuredProduct.name} />
                </div>
                <div className="hero-floating-note bottom">
                  <strong>Fresh palette</strong>
                  <span>Sky blue, blush pink, soft daylight.</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="catalog-shell">
        <div className="catalog-intro">
          <div>
            <div className="section-head">
              <h2>今日陈列</h2>
              <span>{products.length} 件在售单品</span>
            </div>
            <p>
              每个商品区块都尽量减少装饰，让图片、名称和价格本身成为主角。整体用更轻的轮廓和更柔和的阴影，营造出年轻但不杂乱的购物气质。
            </p>
          </div>

          <div className="catalog-chip-list" aria-label="Highlights">
            <span className="catalog-chip">Soft Blue</span>
            <span className="catalog-chip">Blush Pink</span>
            <span className="catalog-chip">Room Objects</span>
            <span className="catalog-chip">Easy Styling</span>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="empty-state">
            当前没有可展示的商品。请先补充商品数据，再刷新页面。
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <footer className="catalog-shell" style={{ paddingBottom: "48px", color: "var(--muted)" }}>
        当前支持商品浏览、详情查看和购物车管理：
        {" "}
        <Link href="/cart">
          /cart
        </Link>
        {" · "}
        <Link href="/users/mia-chen">/users/mia-chen</Link>
      </footer>
    </main>
  );
}
