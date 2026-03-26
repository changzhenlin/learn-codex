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
            <p>基于 Next.js App Router 直接读取 MySQL 数据，不额外拆 API 层。你可以在此基础上继续加购物车、分类和后台管理。</p>
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
        详情页路由格式示例：
        {" "}
        <Link href={products[0] ? `/products/${products[0].slug}` : "/products"}>
          {products[0] ? `/products/${products[0].slug}` : "/products/[slug]"}
        </Link>
        {" · "}
        <Link href="/users/mia-chen">/users/mia-chen</Link>
      </footer>
    </main>
  );
}
