export type UserStatus = "ACTIVE" | "AWAY" | "OFFLINE";

export type UserActivity = {
  title: string;
  summary: string;
  timestamp: string;
};

export type UserDetail = {
  id: string;
  name: string;
  role: string;
  city: string;
  email: string;
  phone: string;
  avatar: string;
  coverImage: string;
  bio: string;
  longBio: string;
  status: UserStatus;
  joinedAt: string;
  responseTime: string;
  completionRate: string;
  focusAreas: string[];
  activities: UserActivity[];
};

export const mockUsers: UserDetail[] = [
  {
    id: "mia-chen",
    name: "Mia Chen",
    role: "视觉陈列与商品策展",
    city: "Shanghai",
    email: "mia.chen@studiomarket.demo",
    phone: "+86 138 0000 1286",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    bio: "负责 Studio Market 的选品节奏、空间陈列和新品故事包装，擅长把零散单品整理成完整空间语言。",
    longBio:
      "Mia 过去 8 年一直在家居品牌与设计买手店工作，主要负责展陈节奏、内容策展与新品拍摄方向。\n\n在这个示例页面里，她被设定为一个兼顾审美判断与运营落地的角色，能够独立完成每周选品、陈列复盘与活动协同。",
    status: "ACTIVE",
    joinedAt: "2023.08.14",
    responseTime: "平均 2 小时内",
    completionRate: "96%",
    focusAreas: ["空间陈列", "新品策展", "视觉脚本", "品牌合作"],
    activities: [
      {
        title: "完成春季客厅专题选品",
        summary: "确定 12 件主推单品，并整理为可直接拍摄的搭配清单。",
        timestamp: "今天 09:30"
      },
      {
        title: "更新详情页文案",
        summary: "重写 Aurora 休闲椅与 Linen Cloud 沙发的图文介绍。",
        timestamp: "昨天 18:10"
      },
      {
        title: "确认品牌联名样片",
        summary: "与摄影师完成首页视觉方向确认，进入修图阶段。",
        timestamp: "03.24 15:20"
      }
    ]
  },
  {
    id: "leo-wang",
    name: "Leo Wang",
    role: "用户增长与会员体验",
    city: "Hangzhou",
    email: "leo.wang@studiomarket.demo",
    phone: "+86 137 0000 4591",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    bio: "负责会员触达、复购策略和站内体验追踪，偏好用精简内容和细节交互提升用户感知。",
    longBio:
      "Leo 的工作重心是把浏览体验和用户运营串起来，确保从首页、列表、详情到活动页都能维持统一节奏。\n\n他更看重信息层级和转化路径是否顺滑，因此会频繁参与页面评审和内容优化。",
    status: "AWAY",
    joinedAt: "2024.01.08",
    responseTime: "平均 4 小时内",
    completionRate: "92%",
    focusAreas: ["会员运营", "活动页优化", "数据复盘", "消息触达"],
    activities: [
      {
        title: "分析本周详情页停留时长",
        summary: "对用户阅读热区做初步归纳，准备给设计和内容团队同步。",
        timestamp: "今天 11:10"
      },
      {
        title: "整理会员日权益规则",
        summary: "完成首版说明文案，等待运营审核。",
        timestamp: "昨天 20:40"
      }
    ]
  }
];
