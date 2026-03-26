import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">404</p>
        <h1 className="hero-title">没有找到这个商品。</h1>
        <p className="hero-copy">请检查链接是否正确，或者返回列表页继续浏览其他商品。</p>
        <div style={{ marginTop: "24px" }}>
          <Link className="back-link" href="/products">
            返回商品列表
          </Link>
        </div>
      </section>
    </main>
  );
}
