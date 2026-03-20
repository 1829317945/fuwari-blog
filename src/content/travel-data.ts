// src/content/travel-data.ts

export interface TravelPost {
  title: string
  excerpt: string
  date: string
  emoji: string
  href: string   // 文章路径，如 /posts/beijing/
  lat: number    // 文章具体拍摄地经纬度
  lng: number
}

export interface TravelPlace {
  id: string
  name: string
  icon: string
  lat: number    // 城市中心坐标（地图标记点位置）
  lng: number
  subtitle: string
  posts: TravelPost[]
}

export const TRAVEL_PLACES: TravelPlace[] = [
  {
    id: 'beijing',
    name: '北京',
    icon: '🏯',
    lat: 39.9042,
    lng: 116.4074,
    subtitle: '2024年10月 · 4天3夜',
    posts: [
      {
        title: '故宫深秋：朱墙黄瓦的光影交织',
        excerpt: '午后的太和殿前，游客如织，但找到一个安静的角落，那些岁月的痕迹便扑面而来...',
        date: '2024-10-05',
        emoji: '🏯',
        href: '/posts/beijing-forbidden-city/',
        lat: 39.9169,
        lng: 116.3907,
      },
      {
        title: '胡同骑行：用单车丈量老北京',
        excerpt: '从南锣鼓巷到烟袋斜街，车轮碾过的青石板，每一块都有故事。',
        date: '2024-10-06',
        emoji: '🚲',
        href: '/posts/beijing-hutong/',
        lat: 39.9360,
        lng: 116.4033,
      },
    ],
  },
  {
    id: 'shanghai',
    name: '上海',
    icon: '🌆',
    lat: 31.2304,
    lng: 121.4737,
    subtitle: '2025年3月 · 5天4夜',
    posts: [
      {
        title: '外滩夜景：新与旧的对话',
        excerpt: '浦东的霓虹与浦西的巴洛克建筑隔江相望，这座城市从不拒绝矛盾的美。',
        date: '2025-03-10',
        emoji: '✨',
        href: '/posts/shanghai-bund/',
        lat: 31.2397,
        lng: 121.4905,
      },
    ],
  },
  // 按此格式继续添加城市...
]

// 统计数据（自动计算，无需手动维护）
export const TRAVEL_STATS = {
  cities: TRAVEL_PLACES.length,
  overseas: TRAVEL_PLACES.filter(
    p => !(p.lat > 18 && p.lat < 54 && p.lng > 73 && p.lng < 135)
  ).length,
  posts: TRAVEL_PLACES.reduce((acc, p) => acc + p.posts.length, 0),
}

// 给 TravelMap.astro 用的类型（必须导出）
export type TravelStats = typeof TRAVEL_STATS