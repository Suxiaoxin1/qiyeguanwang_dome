export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  features: string[];
}

export interface Case {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  gradient: string;
  year: string;
}

export interface News {
  id: string;
  title: string;
  date: string;
  category: string;
}

export interface Value {
  id: string;
  title: string;
  content: string;
}

export const services: Service[] = [
  {
    id: "strategy",
    title: "品牌策略",
    titleEn: "Brand Strategy",
    description: "从市场洞察到品牌定位，我们为企业在复杂商业环境中找到清晰的声音与差异化路径。",
    features: ["竞争格局分析", "品牌定位架构", "传播语调定义", "增长路径规划"],
  },
  {
    id: "visual",
    title: "视觉识别",
    titleEn: "Visual Identity",
    description: "以设计为语言，构建可感知、可记忆、可延展的品牌视觉系统，让品牌一眼可辨。",
    features: ["标志与字体系统", "色彩与图形规范", "品牌应用指南", "包装与印刷物料"],
  },
  {
    id: "digital",
    title: "数字产品",
    titleEn: "Digital Product",
    description: "从网站到小程序，从界面到交互，我们打造体验流畅、视觉出众的数字触点。",
    features: ["网站与 H5 设计", "App 界面设计", "交互原型设计", "设计系统搭建"],
  },
  {
    id: "space",
    title: "空间体验",
    titleEn: "Spatial Experience",
    description: "将品牌精神注入实体空间，通过展陈、门店与办公环境设计创造沉浸式品牌体验。",
    features: ["零售空间设计", "展览展陈设计", "办公环境设计", "导视系统设计"],
  },
];

export const cases: Case[] = [
  {
    id: "c1",
    title: "云岫茶业",
    category: "品牌策略",
    tags: ["品牌重塑", "视觉识别", "包装"],
    description: "为百年茶庄注入当代东方美学，完成从品牌策略到包装系统的全链路升级，季度销量提升 40%。",
    gradient: "case-gradient-1",
    year: "2024",
  },
  {
    id: "c2",
    title: "星辰金融",
    category: "数字产品",
    tags: ["网站", "设计系统", "交互"],
    description: "打造高端财富管理数字门户，以沉稳的深蓝色调与精准的信息架构重塑客户信任感。",
    gradient: "case-gradient-2",
    year: "2024",
  },
  {
    id: "c3",
    title: "野趣户外",
    category: "视觉识别",
    tags: ["标志设计", "VI 系统", "电商"],
    description: "为新兴户外品牌建立野性而精致的视觉语言，帮助其在众筹阶段即获得超额认购。",
    gradient: "case-gradient-3",
    year: "2023",
  },
  {
    id: "c4",
    title: "琉璃艺术空间",
    category: "空间体验",
    tags: ["空间设计", "展陈", "导视"],
    description: "将传统琉璃工艺转化为现代展陈语言，设计 800 ㎡沉浸式艺术体验空间。",
    gradient: "case-gradient-4",
    year: "2023",
  },
  {
    id: "c5",
    title: "青禾教育",
    category: "品牌策略",
    tags: ["定位", "视觉", "网站"],
    description: "帮助 STEM 教育机构完成品牌升级，以「成长即探索」为核心概念辐射家庭用户。",
    gradient: "case-gradient-5",
    year: "2022",
  },
  {
    id: "c6",
    title: "谧境酒店",
    category: "视觉识别",
    tags: ["品牌", "印刷物料", "空间导视"],
    description: "为精品度假酒店建立宁静奢华的视觉识别系统，贯穿线上预订与线下入住体验。",
    gradient: "case-gradient-6",
    year: "2022",
  },
];

export const news: News[] = [
  {
    id: "n1",
    title: "Aurora Studio 荣获 2024 亚洲设计大奖金奖",
    date: "2024.11.18",
    category: "奖项",
  },
  {
    id: "n2",
    title: "全新品牌方法论：从「符号」到「系统」",
    date: "2024.09.05",
    category: "洞察",
  },
  {
    id: "n3",
    title: "上海工作室启用，开启华东市场布局",
    date: "2024.06.12",
    category: "动态",
  },
];

export const values: Value[] = [
  {
    id: "v1",
    title: "意义先于形式",
    content: "每一个设计决策都根植于品牌内核与商业目标，拒绝为视觉而视觉的装饰。",
  },
  {
    id: "v2",
    title: "细节即态度",
    content: "从 0.5px 的间距到整体的节奏，我们相信细节累积成品牌的整体质感。",
  },
  {
    id: "v3",
    title: "共创胜于交付",
    content: "我们与客户并肩工作，让策略、创意与执行在同一语境下持续进化。",
  },
];

export const categories = ["全部", "品牌策略", "视觉识别", "数字产品", "空间体验"];
