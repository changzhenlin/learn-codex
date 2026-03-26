import { CartView } from "@/components/cart-view";

export default function CartPage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Studio Market Cart</p>
        <div>
          <div>
            <h1 className="hero-title">把喜欢的单品先存进一份轻快清单。</h1>
            <p className="hero-copy">
              购物车仍然使用本地状态保存，但整体视觉已经切到浅蓝和浅粉主调，方便你直接体验更完整的浏览和加购氛围。
            </p>
          </div>
        </div>
      </section>

      <CartView />
    </main>
  );
}
