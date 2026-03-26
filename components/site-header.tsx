"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/cart-provider";

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <header className="site-header">
      <div className="page-shell site-header-inner">
        <Link className="site-brand" href="/products">
          <span className="site-brand-mark">SM</span>
          <span>
            <strong>Studio Market</strong>
            <small>Objects for quiet rooms</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <Link
            className={pathname.startsWith("/products") ? "nav-link active" : "nav-link"}
            href="/products"
          >
            商品
          </Link>
          <Link className={pathname === "/cart" ? "nav-link active" : "nav-link"} href="/cart">
            购物车
            <span className="cart-count">{itemCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
