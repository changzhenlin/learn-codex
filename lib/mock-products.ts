export type ProductStatus = "DRAFT" | "PUBLISHED";

export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  coverImage: string;
  summary: string;
  content: string;
  stock: number;
  status: ProductStatus;
  createdAt: Date;
  updatedAt: Date;
};

export const mockProducts: Product[] = [
  {
    id: 1,
    slug: "aurora-lounge-chair",
    name: "Aurora 休闲椅",
    price: 1299,
    coverImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    summary: "低靠背与羊毛混纺坐垫结合，适合客厅阅读角和展示型空间。",
    content:
      "Aurora 休闲椅采用弧线木框和高回弹坐垫，强调长期坐感。\n\n它适合放在书架旁、落地灯边或酒店式卧室角落，既能承担功能，也能作为视觉焦点。",
    stock: 12,
    status: "PUBLISHED",
    createdAt: new Date("2026-03-20T10:00:00.000Z"),
    updatedAt: new Date("2026-03-20T10:00:00.000Z")
  },
  {
    id: 2,
    slug: "nordic-ash-desk",
    name: "Nordic 白蜡木书桌",
    price: 2480,
    coverImage:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
    summary: "长线条桌面与隐藏抽屉，适合家庭办公和独立工作室。",
    content:
      "桌面使用白蜡木纹理饰面，边角做了圆润处理，保持利落又不生硬。\n\n隐藏抽屉可放置文具和充电设备，适合作为长期稳定的工作台。",
    stock: 8,
    status: "PUBLISHED",
    createdAt: new Date("2026-03-21T10:00:00.000Z"),
    updatedAt: new Date("2026-03-21T10:00:00.000Z")
  },
  {
    id: 3,
    slug: "cinder-ceramic-vase",
    name: "Cinder 陶瓷花器",
    price: 369,
    coverImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    summary: "雾面深灰釉色，适合干枝、花艺和边柜陈列。",
    content:
      "这款花器以不规则口沿和厚实瓶身塑造手工感。\n\n可独立摆放，也适合与浅色木质家具、石材台面和暖色灯光组合使用。",
    stock: 0,
    status: "PUBLISHED",
    createdAt: new Date("2026-03-22T10:00:00.000Z"),
    updatedAt: new Date("2026-03-22T10:00:00.000Z")
  },
  {
    id: 4,
    slug: "linen-cloud-sofa",
    name: "Linen Cloud 双人沙发",
    price: 5890,
    coverImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    summary: "亚麻混纺面料与宽坐深设计，偏向轻松、松弛的客厅氛围。",
    content:
      "Linen Cloud 重点在于包裹感和可持续使用的坐感平衡。\n\n中性面料便于融入奶油色、木色和深色点缀的家居场景，适合作为客厅主角。",
    stock: 5,
    status: "PUBLISHED",
    createdAt: new Date("2026-03-23T10:00:00.000Z"),
    updatedAt: new Date("2026-03-23T10:00:00.000Z")
  },
  {
    id: 5,
    slug: "brass-halo-lamp",
    name: "Brass Halo 台灯",
    price: 899,
    coverImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    summary: "黄铜色金属灯罩配暖光氛围，适合床头柜与书桌。",
    content:
      "灯体线条克制，重点突出金属质感与光线漫射效果。\n\n作为小型单品，它能迅速提升空间的层次与精致度。",
    stock: 14,
    status: "PUBLISHED",
    createdAt: new Date("2026-03-24T10:00:00.000Z"),
    updatedAt: new Date("2026-03-24T10:00:00.000Z")
  },
  {
    id: 6,
    slug: "terra-side-table",
    name: "Terra 边几",
    price: 760,
    coverImage:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    summary: "岩板台面搭配深色底座，适合沙发侧边和卧室角落。",
    content:
      "Terra 边几以稳定比例和耐看材质为主，日常使用门槛低。\n\n它可以与布艺沙发、木地板和低饱和软装自然搭配，承担放书、放杯和摆件展示的双重角色。",
    stock: 9,
    status: "PUBLISHED",
    createdAt: new Date("2026-03-25T10:00:00.000Z"),
    updatedAt: new Date("2026-03-25T10:00:00.000Z")
  }
];
