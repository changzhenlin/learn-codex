import Link from "next/link";

export default function UserNotFound() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">404</p>
        <h1 className="hero-title">没有找到这个用户。</h1>
        <p className="hero-copy">请检查链接是否正确，或者从商城页重新进入其他示例页面。</p>
        <div style={{ marginTop: "24px" }}>
          <Link className="back-link" href="/products">
            返回商城页
          </Link>
        </div>
      </section>
    </main>
  );
}
