"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/products";

export function CartView() {
  const { detailedItems, subtotal, itemCount, addItem, decrementItem, removeItem, clearCart } =
    useCart();

  if (detailedItems.length === 0) {
    return (
      <div className="cart-empty">
        <p className="eyebrow">Cart empty</p>
        <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          购物车还是空的。
        </h1>
        <p className="hero-copy">
          先从列表页挑选一些喜欢的家具与摆件。加入购物车后，你可以在这里统一调整数量和预算。
        </p>
        <Link className="cta-link" href="/products">
          去选商品
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <section>
        <div className="section-head">
          <h2>购物车</h2>
          <span>{itemCount} 件商品</span>
        </div>

        <div className="cart-list">
          {detailedItems.map(({ product, quantity, lineTotal }) => (
            <article className="cart-row" key={product.id}>
              <Link className="cart-row-media" href={`/products/${product.slug}`}>
                <img src={product.coverImage} alt={product.name} />
              </Link>

              <div className="cart-row-main">
                <div className="cart-row-top">
                  <div>
                    <p className="eyebrow" style={{ marginBottom: "8px" }}>
                      {product.stock > quantity ? "Ready to ship" : "Last units"}
                    </p>
                    <h3>{product.name}</h3>
                    <p>{product.summary}</p>
                  </div>
                  <strong>{formatPrice(lineTotal)}</strong>
                </div>

                <div className="cart-row-actions">
                  <div className="quantity-stepper">
                    <button type="button" onClick={() => decrementItem(product.id)}>
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      disabled={quantity >= product.stock}
                      onClick={() => addItem(product.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-row-links">
                    <span>{formatPrice(product.price)} / 件</span>
                    <button type="button" onClick={() => removeItem(product.id)}>
                      移除
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="cart-summary">
        <p className="eyebrow">Order preview</p>
        <h2>当前小计</h2>
        <div className="summary-line">
          <span>商品件数</span>
          <strong>{itemCount}</strong>
        </div>
        <div className="summary-line">
          <span>商品总额</span>
          <strong>{formatPrice(subtotal)}</strong>
        </div>
        <div className="summary-divider" />
        <p className="cart-summary-copy">
          这里先做前台购物车预览，不接订单与支付。后续如果继续做结算页，可以在当前状态层基础上扩展。
        </p>
        <button className="cart-button primary wide" type="button">
          去结算（占位）
        </button>
        <button className="ghost-button" type="button" onClick={clearCart}>
          清空购物车
        </button>
      </aside>
    </div>
  );
}
