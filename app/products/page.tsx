import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getPublishedProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getPublishedProducts();

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Studio Market</p>
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">挑一件真正能提升空间气质的单品。</h1>
            <p className="hero-copy">
              这个示例商城只保留最核心的浏览体验：列表页快速筛选视觉风格，详情页查看价格、库存和完整介绍。
            </p>
          </div>
          <aside className="hero-panel">
            <strong>当前实现范围</strong>
            <p>现在已经支持前台购物车，商品可从列表页和详情页直接加入，本地保存状态，便于先看完整浏览和加购体验。</p>
          </aside>
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>商品列表</h2>
          <span>{products.length} 件在售单品</span>
        </div>

        {products.length === 0 ? (
          <div className="empty-state">
            当前没有可展示的商品。请先执行数据库迁移和 seed，再刷新页面。
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <footer style={{ paddingBottom: "48px", color: "var(--muted)" }}>
        当前支持商品浏览、详情查看和购物车管理：
        {" "}
        <Link href="/cart">
          /cart
        </Link>
      </footer>
    </main>
  );
}
