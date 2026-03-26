import { CartView } from "@/components/cart-view";

export default function CartPage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Studio Market Cart</p>
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">把想买的单品先收进同一个清单。</h1>
            <p className="hero-copy">
              购物车以本地状态保存，方便你在列表页和详情页之间来回比较，再统一决定数量与预算。
            </p>
          </div>
        </div>
      </section>

      <CartView />
    </main>
  );
}
