# Studio Market

一个最小可用的商城示例，基于 Next.js App Router，只包含商品列表页与商品详情页。当前默认使用本地模拟数据，方便先看 UI；Prisma 和 MySQL 结构也已保留，后续可切回数据库。

## 快速开始

1. 安装依赖
2. 直接启动开发服务器

```bash
npm install
npm run dev
```

如需切换到 MySQL，再补充 `.env`、执行 Prisma 迁移和 seed。

## 页面

- `/products` 商品列表页
- `/products/[slug]` 商品详情页

## 数据模型

当前只有一个 `Product` 表，字段包括名称、价格、封面图、简介、详情、库存和状态。
