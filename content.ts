
/**
 * 💡 聚合創研 - 官方網站內容管理中心 (最終定案版)
 * --------------------------------------------------
 * 修改說明：
 * 1. 所有的文字都在引號 "" 裡面，改引號內的文字即可。
 * 2. 如果看到 [lang], 代表該欄位支援多語系（zh-TW 繁體, zh-CN 簡體, en 英文）。
 * 3. 圖片路徑可以是網址 (http...) 或本地路徑 (images/...)。
 * --------------------------------------------------
 */

export const siteContent = {
  // 💡 導覽列顯示順序
  menuConfig: ['about', 'tech', 'apps', 'park', 'news', 'media'],

  // 🖼️ 圖片資源管理
  assets: {
    home: {
      logo: "", // ⬅️ 在這裡更換左上角的 LOGO 圖片路徑 (例如: "images/logo.png")
      heroBg: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000",
      aboutIcon: "fa-rocket",
      techIcon: "fa-dna",
      esgIcon: "fa-network-wired"
    },
    banners: {
      about: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
      tech: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
      apps: "https://images.unsplash.com/photo-1565891741441-6ad9652bb790?auto=format&fit=crop&q=80&w=2000",
      park: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
      news: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
      media: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000",
      contact: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000",
    },
    pageImages: {
      aboutSpirit: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
      aboutStory: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200",
    }
  },

  // 🌍 通用小文字
  common: {
    detail: { 'zh-TW': '查看詳情', 'zh-CN': '查看详情', 'en': 'View Detail' },
    comingSoon: { 'zh-TW': '內容準備中，敬請期待', 'zh-CN': '内容准备中，敬请期待', 'en': 'Coming Soon' },
    viewAlbum: { 'zh-TW': '查看雲端相簿', 'zh-CN': '查看云端相册', 'en': 'View Album' },
    back: { 'zh-TW': '返回列表', 'zh-CN': '返回列表', 'en': 'Back to List' }
  },

  // 🧭 導覽列名稱
  nav: {
    about: { 'zh-TW': '關於我們', 'zh-CN': '关于我们', 'en': 'About Us' },
    tech: { 'zh-TW': '核心技術', 'zh-CN': '核心技术', 'en': 'Technology' },
    apps: { 'zh-TW': '應用範疇', 'zh-CN': '应用范畴', 'en': 'Applications' },
    park: { 'zh-TW': '示範基地', 'zh-CN': '示范基地', 'en': 'Facilities' },
    news: { 'zh-TW': '最新消息', 'zh-CN': '最新消息', 'en': 'News' },
    media: { 'zh-TW': '媒體專區', 'zh-CN': '媒体专区', 'en': 'Media' },
    contact: { 'zh-TW': '聯絡我們', 'zh-CN': '联络我们', 'en': 'Contact' },
  },

  // 🚀 首頁 Hero 區塊
  hero: {
    title: { 
      'zh-TW': '重塑廢棄物的價值，啟動綠色未來', 
      'zh-CN': '重塑废弃物的价值，启动绿色未来', 
      'en': 'Reshaping Waste Value, Powering a Green Future' 
    },
    subtitle: { 
      'zh-TW': '聚合創研引領全球回收技術革命，將複合廢料轉化為永續循環資源。', 
      'zh-CN': '聚合创研引领全球回收技术革命，将复合废料转化为永续循环资源。', 
      'en': 'TerraUnion leads the global recycling revolution, transforming composite waste into sustainable resources.' 
    }
  },

  // 🛍️ 應用範疇頁面內容
  applicationCategories: [
    {
      title: { 'zh-TW': '綠色物流與倉儲解決方案', 'zh-CN': '绿色物流与仓储解决方案', 'en': 'Green Logistics & Warehousing' },
      products: { 'zh-TW': '各式規格塑膠棧板（輕量化、高承重）、智慧倉儲周邊配件。', 'zh-CN': '各式规格塑料栈板（轻量化、高承重）、智慧仓储周边配件。', 'en': 'Plastic Pallets (Lightweight/High-load), Smart Warehousing Accessories.' },
      description: { 'zh-TW': '專為現代物流設計，提供高強度、可循環利用的倉儲基座，協助企業落實低碳供應鏈轉型。', 'zh-CN': '专为现代物流设计，提供高强度、可循环利用的仓储基座，协助企业落实低碳供应链转型。', 'en': 'Designed for modern logistics, providing high-strength recyclable bases for low-carbon transitions.' },
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
    },
    {
      title: { 'zh-TW': '汽車與移動交通應用', 'zh-CN': '汽車與 mobility 交通應用', 'en': 'Automotive & Mobility' },
      products: { 'zh-TW': '內外飾件、機能性車飾、耐候性車體零件。', 'zh-CN': '內外飾件、機能性車飾、耐候性車體零件。', 'en': 'Interior/Exterior Trim, Functional Decorations, Weatherproof Parts.' },
      description: { 'zh-TW': '提供符合車規標準的塑膠零組件，兼顧輕量化與美學設計，為現代交通工具提升能效與舒適度。', 'zh-CN': '提供符合車規標準的塑膠零組件，兼顧輕量化與美學設計，為現代交通工具提升能效與舒適度。', 'en': 'Automotive-grade plastic components balancing weight reduction and aesthetic design.' },
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200"
    },
    {
      title: { 'zh-TW': '高階電子與科技零組件', 'zh-CN': '高階電子與科技零組件', 'en': 'High-end Electronics & Tech' },
      products: { 'zh-TW': '精密機能零件、抗靜電/導電特殊材料應用、電子產品機殼或結構件。', 'zh-CN': '精密機能零件、抗靜電/導電特殊材料應用、電子產品機殼或結構件。', 'en': 'Precision Functional Parts, Anti-static Materials, Electronic Enclosures.' },
      description: { 'zh-TW': '精準掌握微米級規格，為高科技產業提供具備優異絕緣、散熱或電磁屏蔽性能的塑膠關鍵零組件。', 'zh-CN': '精準掌握微米級規格，為高科技產業提供具備優異絕緣、散熱或電磁屏蔽性能的塑膠關鍵零組件。', 'en': 'Micron-level precision components providing insulation, heat dissipation, and shielding.' },
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200"
    },
    {
      title: { 'zh-TW': '複合材料與複材替代', 'zh-CN': '複合材料與複材替代', 'en': 'Composites & Substitutes' },
      products: { 'zh-TW': '高強度複合塑膠、長纖維強化熱塑材料 (CFRTP/LFRT) 應用。', 'zh-CN': '高強度複合塑膠、長纖維強化熱塑材料 (CFRTP/LFRT) 應用。', 'en': 'High-strength Composite Plastics, CFRTP/LFRT Applications.' },
      description: { 'zh-TW': '致力於研發高性能複合材料，提供足以取代玻璃纖維 (GFRP) 的輕量化方案，顯著降低加工成本並提升產品回收性。', 'zh-CN': '致力於研發高性能複合材料，提供足以取代玻璃纖維 (GFRP) 的輕量化方案，顯著降低加工成本並提升產品回收性。', 'en': 'High-performance composite materials providing lightweight alternatives to fiberglass.' },
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200"
    },
    {
      title: { 'zh-TW': '多元客製化塑膠製品', 'zh-CN': '多元客制化塑胶制品', 'en': 'Custom Plastic Solutions' },
      products: { 'zh-TW': '民生工業製品、品牌專屬塑料件、特殊機構件。', 'zh-CN': '民生工業製品、品牌專屬塑料件、特殊機構件。', 'en': 'Industrial Products, Branded Plastic Parts, Specialized Mechanisms.' },
      description: { 'zh-TW': '從設計到量產，我們提供全方位塑膠成型解決方案，根據客戶需求靈活調整配方，實現創意產品的商業化。', 'zh-CN': '從設計到量產，我們提供全方位塑膠成型解決方案，根據客戶需求靈活調整配方，實現創意產品的商業化。', 'en': 'Full-spectrum molding solutions with flexible formulas to commercialize creative ideas.' },
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200"
    }
  ],

  // 🏭 示範基地列表
  parks: [
    {
      id: 'huizhou',
      hidden: false, // 💡 將 hidden 改為 false 即可顯示在網頁上，改為 true 則隱藏。
      title: { 'zh-TW': '惠州合作工廠', 'zh-CN': '惠州合作工厂', 'en': 'Huizhou Factory' },
      description: { 
        'zh-TW': '聚合與惠州合作工廠共同建置聚合再生棧板/托盤產線，生產高規格科技業環保棧板。', 
        'zh-CN': '聚合與惠州合作工廠共同建置聚合再生棧板/托盤產線，生產高規格科技業環保棧板。', 
        'en': 'Huizhou factory partnership for high-spec eco pallets.' 
      },
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
        "https://images.unsplash.com/photo-1565608411388-e9301d014b75?q=80&w=800"
      ]
    },
    {
      id: 'park-example-1',
      hidden: true, // 💡 將 hidden 改為 false 即可顯示在網頁上，改為 true 則隱藏。
      title: { 'zh-TW': '預留示範基地 A', 'zh-CN': '预留示范基地 A', 'en': 'Reserved Facility A' },
      description: { 'zh-TW': '這是為您預留的示範基地範例，點擊顯示後可更換圖片與文字內容。', 'zh-CN': '這是為您預留的示範基地範例，點擊顯示後可更換圖片與文字內容。', 'en': 'Reserved location for facility example A.' },
      images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"]
    },
    {
      id: 'park-example-2',
      hidden: true, // 💡 將 hidden 改為 false 即可顯示在網頁上，改為 true 則隱藏。
      title: { 'zh-TW': '預留示範基地 B', 'zh-CN': '预留示范基地 B', 'en': 'Reserved Facility B' },
      description: { 'zh-TW': '這是為您預留的示範基地範例，點擊顯示後可更換圖片與文字內容。', 'zh-CN': '這是為您預留的示範基地範例，點擊顯示後可更換圖片與文字內容。', 'en': 'Reserved location for facility example B.' },
      images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"]
    }
  ],

  // 📰 最新消息 (恢復完整範例)
  newsList: [
    {
      hidden: false,
      date: "2025-03-01",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200",
      title: { 'zh-TW': '聚合創研正式發表「再森核」100% 回收技術', 'zh-CN': '聚合創研正式發表「再森核」100% 回收技術', 'en': 'TerraUnion launches ReForis Technology' },
      content: { 
        'zh-TW': '我們深感自豪地宣布，「再森核」技術已達到商用化標準，能夠在不分類的情況下將複合塑料轉化為高性能建材，這將徹底改變全球回收產業的現狀。',
        'zh-CN': '我們深感自豪地宣布，「再森核」技術已達到商用化標準，能夠在不分類的情況下將複合塑料轉化為高性能建材，這將徹底改變全球回收產業的現狀。',
        'en': 'We are proud to announce that ReForis technology has reached commercial standards, capable of converting composite plastics into high-performance materials without sorting.'
      },
      link: "https://esg.businesstoday.com.tw/article/category/180687/post/202508070014"
    },
    {
      hidden: false,
      date: "2025-02-15",
      category: "ESG",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
      title: { 'zh-TW': 'ESG 碳數據管理平台 2.0 版本上線', 'zh-CN': 'ESG 碳數據管理平台 2.0 版本上線', 'en': 'ESG Carbon Data Platform 2.0 Launched' },
      content: { 
        'zh-TW': '全新升級的平台提供更精準的碳足跡追蹤功能，協助企業即時掌握產品從生產到回收的全生命週期環境影響。',
        'zh-CN': '全新升級的平台提供更精準的碳足跡追蹤功能，協助企業即時掌握產品從生產到回收的全生命週期環境影響。',
        'en': 'The newly upgraded platform provides more precise carbon footprint tracking, helping enterprises monitor full lifecycle environmental impacts.'
      },
      link: ""
    }
  ],

  // 🎬 媒體專區
  mediaNews: [
    {
      hidden: false, // 💡 將 hidden 改為 false 即可顯示在網頁上，改為 true 則隱藏。
      date: "2024-12-05",
      source: "工商時報",
      image: "https://images.unsplash.com/photo-1585829365234-781f8c42078a?q=80&w=400",
      title: { 'zh-TW': '聚合創研以廢塑料打造循環經濟新生態', 'zh-CN': '聚合創研以廢塑料打造循環經濟新生態', 'en': 'Building Circular Economy with Waste Plastic' },
      link: "https://www.ctee.com.tw"
    },
    {
      hidden: false, // 💡 將 hidden 改為 false 即可顯示在網頁上，改為 true 則隱藏。
      date: "2024-10-20",
      source: "經濟日報",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400",
      title: { 'zh-TW': '再森核技術引領減碳風潮，獲多項國際專利認證', 'zh-CN': '再森核技術引領減碳風潮，獲多項國際專利認證', 'en': 'ReForis Tech Leads Carbon Reduction Trend' },
      link: ""
    },
    {
      hidden: true, // 💡 將 hidden 改為 false 即可顯示在網頁上，改為 true 則隱藏。
      date: "2024-08-12",
      source: "科技雜誌",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400",
      title: { 'zh-TW': '專訪聚合創研：將廢塑料轉化為未來資源的推手', 'zh-CN': '專訪聚合創研：將廢塑料轉化為未來資源的推手', 'en': 'TerraUnion: Turning Waste into Future Resources' },
      link: ""
    }
  ],
  mediaEvents: [
    {
      hidden: false, // 💡 將 hidden 改為 false 即可顯示在網頁上，改為 true 則隱藏。
      date: "2024-05-10",
      title: { 'zh-TW': '2024 年度技術發表研討會', 'zh-CN': '2024 年度技術發表研討會', 'en': '2024 Tech Launch Seminar' },
      description: { 'zh-TW': '現場展示多款再森核回收產品，吸引國內外專家關注。', 'zh-CN': '現場展示多款再森核回收產品，吸引國內外專家關注。', 'en': 'Showcasing ReForis products to global experts.' },
      image: "https://images.unsplash.com/photo-1540575861501-7c00117fb3c9?q=80&w=800",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      videoLabel: { 'zh-TW': '研討會影片實錄', 'zh-CN': '研討會影片實錄', 'en': 'Seminar Video' },
      albumUrl: "https://photos.google.com",
      albumLabel: { 'zh-TW': '點此查看現場照片', 'zh-CN': '點此查看現場照片', 'en': 'Click for event photos' }
    },
    {
      hidden: false, // 💡 將 hidden 改為 false 即可顯示在網頁上，改為 true 則隱藏。
      date: "2024-03-25",
      title: { 'zh-TW': '循環經濟與永續發展高峰會', 'zh-CN': '循環經濟與永續發展高峰會', 'en': 'Circular Economy Summit' },
      description: { 'zh-TW': '參與國際高峰會討論，分享聚合創研如何將 ESG 數據與實體製造完美結合。', 'zh-CN': '參與國際高峰會討論，分享聚合創研如何將 ESG 數據與實體製造完美結合。', 'en': 'Sharing the fusion of ESG data and physical manufacturing.' },
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800",
      albumUrl: "https://photos.google.com",
      albumLabel: { 'zh-TW': '大會花絮照片', 'zh-CN': '大會花絮照片', 'en': 'Event Gallery' }
    },
    {
      hidden: false, // 💡 將 hidden 改為 false 即可顯示在網頁上，改為 true 則隱藏。
      date: "2024-01-15",
      title: { 'zh-TW': '校園永續教育推廣活動', 'zh-CN': '校園永續教育推廣活動', 'en': 'Sustainable Education Outreach' },
      description: { 'zh-TW': '進入校園與年輕世代交流，推廣廢塑料分類與再利用的環保意識。', 'zh-CN': '進入校園與年輕世代交流，推廣廢塑料分類與再利用的環保意識。', 'en': 'Promoting recycling awareness to the younger generation.' },
      image: "https://images.unsplash.com/photo-1523240715632-d984cf4e7a69?q=80&w=800",
      videoUrl: "https://www.youtube.com",
      videoLabel: { 'zh-TW': '活動精采剪輯', 'zh-CN': '活動精采剪輯', 'en': 'Event Highlights' },
      albumLabel: { 'zh-TW': '點此查看活動相簿', 'zh-CN': '點此查看活動相冊', 'en': 'View Album' }
    }
  ],

  // 🔬 核心技術詳細內容
  tech: {
    bannerSubtitle: { 'zh-TW': '深耕材料科技與數據管理，驅動企業永續轉型。', 'zh-CN': '深耕材料科技與數據管理，驅動企業永續轉型。', 'en': 'Driving transformation through material science and data.' },
    tabReForis: { 'zh-TW': '再森核材料科技', 'zh-CN': '再森核材料科技', 'en': 'ReForis Material Tech' },
    tabESG: { 'zh-TW': 'ESG 智能平台系統', 'zh-CN': 'ESG 智能平台系统', 'en': 'ESG Smart Platform' },
    introTitle: { 'zh-TW': '再森核材料科技', 'zh-CN': '再森核材料科技', 'en': 'ReForis Material Technology' },
    introContent: { 
      'zh-TW': '再森核（ReForis）為全球首創的高分子聚合複合材料技術，能將海陸廢塑料、廢輪胎、風電葉片等複合性廢料，無需分類便可100%回收轉化為高性能、可再循環的低碳材料。', 
      'zh-CN': '再森核（ReForis）为全球首创的高分子聚合复合材料技术，能将海陆废塑料、废轮胎、风电叶片等复合性废料，无需分类便可100%回收转化为高性能、可再循环的低碳材料。', 
      'en': 'ReForis is the world\'s first polymer composite technology capable of 100% recycling waste plastics without sorting.' 
    },
    featureTitle: { 'zh-TW': '材料特性', 'zh-CN': '材料特性', 'en': 'Material Characteristics' },
    features: [
      { 'zh-TW': '製造過程：無空氣污染、水污染、無甲醛', 'zh-CN': '制造过程：无空气污染、水污染、无甲醛', 'en': 'Process: No air/water pollution, Formaldehyde-free', icon: 'fa-leaf' },
      { 'zh-TW': '抗壓力 7 噸以上', 'zh-CN': '抗压力 7 吨以上', 'en': 'Pressure Resistance: Over 7 Tons', icon: 'fa-weight-hanging' },
      { 'zh-TW': '再生比例高達 80%', 'zh-CN': '再生比例高达 80%', 'en': 'Recycled Ratio: Up to 80%', icon: 'fa-recycle' },
      { 'zh-TW': '防火 A 級（CNS 7614）', 'zh-CN': '防火 A 级（CNS 7614）', 'en': 'Fire Rating: Class A (CNS 7614)', icon: 'fa-fire-extinguisher' },
      { 'zh-TW': '抗UV、防腐蝕、不吸水', 'zh-CN': '抗UV、防腐蚀、不吸水', 'en': 'UV Resistant, Anti-corrosive, Non-absorbent', icon: 'fa-shield-halved' },
      { 'zh-TW': '可多次回收與再利用', 'zh-CN': '可多次回收与再利用', 'en': 'Multiple Recycling & Reuse', icon: 'fa-arrows-spin' },
      { 'zh-TW': '全生命週期碳數據可追溯', 'zh-CN': '全生命周期 carbon 数据可追溯', 'en': 'Full Lifecycle Carbon Data Traceability', icon: 'fa-database' }
    ],
    appTitle: { 'zh-TW': '低碳再生技術', 'zh-CN': '低碳再生技术', 'en': 'Low-Carbon Recycling Tech' },
    appSubtitle: { 
      'zh-TW': '再森核為高穩定、高強度的低碳再生技術，適用於：', 
      'zh-CN': '再森核为高稳定、高强度的低碳再生技术，适用于：', 
      'en': 'ReForis is a high-stability, high-strength low-carbon recycling technology applicable for:' 
    },
    apps: [
      { 'zh-TW': '托盤、棧板', 'zh-CN': '托盘、栈板', 'en': 'Pallets & Skids', icon: 'fa-pallet' },
      { 'zh-TW': '倉儲設備', 'zh-CN': '仓储设备', 'en': 'Warehousing Equipment', icon: 'fa-warehouse' },
      { 'zh-TW': '塑膠成品', 'zh-CN': '塑胶成品', 'en': 'Plastic Products', icon: 'fa-vial-circle-check' },
      { 'zh-TW': '家具、建材', 'zh-CN': '家具、建材', 'en': 'Furniture & Building Materials', icon: 'fa-chair' },
      { 'zh-TW': 'OEM/ODM 製品', 'zh-CN': 'OEM/ODM 制品', 'en': 'OEM/ODM Products', icon: 'fa-industry' },
      { 'zh-TW': '可代替玻璃纖維', 'zh-CN': '可代替玻璃纤维', 'en': 'GFRP Substitute', icon: 'fa-flask' }
    ],
    specialTitle: { 'zh-TW': '特點', 'zh-CN': '特点', 'en': 'Features' },
    specials: [
      { 'zh-TW': '高機械性能', 'zh-CN': '高机械性能', 'en': 'High Mechanical Performance', icon: 'fa-gears' },
      { 'zh-TW': '色料與配方可客製', 'zh-CN': '色料与配方可客制', 'en': 'Customizable Color & Formula', icon: 'fa-palette' },
      { 'zh-TW': 'ESG 與碳足跡可追溯', 'zh-CN': 'ESG 与碳足迹可追溯', 'en': 'ESG & Carbon Footprint Traceability', icon: 'fa-chart-simple' },
      { 'zh-TW': '量產容易、可整廠輸出', 'zh-CN': '量产容易、可整厂输出', 'en': 'Mass Production & Turnkey Solutions', icon: 'fa-truck-fast' }
    ],

    // 💡 ESG 智能平台系統內容
    esgIntro: {
      'zh-TW': '聚合創研的ESG智能平台系統，不單只是一個智能平台，更是企業進入 ESG 生態圈的門票。我們協助您：',
      'zh-CN': '聚合创研的ESG智能平台系统，不单只是一个智能平台，更是企业进入 ESG 生态圈的门票。我们协助您：',
      'en': "TerraUnion's ESG Smart Platform is not just an intelligent platform, but a ticket for enterprises to enter the ESG ecosystem. We assist you in:"
    },
    esgStrategic: [
      { 'zh-TW': '向上對接：符合國際標準與供應鏈綠色採購要求。', 'zh-CN': '向上对接：符合国际标准与供应链绿色采购要求。', 'en': 'Upward connection: Comply with international standards and supply chain green procurement requirements.' },
      { 'zh-TW': '向下串聯：帶領供應商同步減碳，穩定品牌競爭力。', 'zh-CN': '向下串联：带领供应商同步减碳，稳定品牌竞争力。', 'en': 'Downward connection: Leading suppliers to synchronize carbon reduction and stabilize brand competitiveness.' },
      { 'zh-TW': '橫向整合：透過數據分析與循環方案，開創跨產業的減碳商機。', 'zh-CN': '横向整合：通过数据分析与循环方案，开创跨产业的减碳商机。', 'en': 'Horizontal integration: Create cross-industry carbon reduction opportunities through data analysis and circular solutions.' }
    ],
    esgDimensionsTitle: {
      'zh-TW': '生態圈的三大維度：我們如何連結價值？',
      'zh-CN': '生态圈的三大维度：我们如何连接价值？',
      'en': 'The Three Dimensions of the Ecosystem: How We Connect Value'
    },
    esgDimensions: [
      {
        id: 1,
        title: { 'zh-TW': '1. 數據生態圈：打破資訊孤島', 'zh-CN': '1. 数据生态圈：打破信息孤岛', 'en': '1. Data Ecosystem: Breaking Information Silos' },
        approach: { 'zh-TW': '透過雲端平台串聯上下游供應商的碳數據，建立透明的碳足跡鏈接。', 'zh-CN': '通过云端平台串联上下游供应商的碳数据，建立透明的碳足迹链接。', 'en': 'Connecting carbon data of upstream and downstream suppliers via cloud platform, establishing transparent carbon footprint links.' },
        value: { 'zh-TW': '企業不再需要獨自面對繁瑣的範疇三（Scope 3）盤查，透過生態圈內的數據共享，實現高效率的精準減碳。', 'zh-CN': '企业不再需要独自面对繁琐的范畴三（Scope 3）盘查，通过生态圈内的数据共享，实现高效率的精准减碳。', 'en': 'Enterprises no longer need to face cumbersome Scope 3 inventory alone; data sharing within the ecosystem enables efficient precise carbon reduction.' },
        icon: 'fa-network-wired'
      },
      {
        id: 2,
        title: { 'zh-TW': '2. 技術與循環生態圈：讓廢棄物轉化為產值', 'zh-CN': '2. 技术与循环生态圈：让废弃物转化为产值', 'en': '2. Tech & Circular Ecosystem: Converting Waste into Value' },
        approach: { 'zh-TW': '結合聚合創研深厚的塑膠再生技術（如「再森核」技術），媒合廢料產生端與再生材料需求端。', 'zh-CN': '结合聚合创研深厚的塑胶再生技术（如「再森核」技术），媒合废料产生端与再生材料需求端。', 'en': "Combining TerraUnion's deep plastic recycling technology (such as 'ReForis'), matching waste generators with recycled material demand." },
        value: { 'zh-TW': '協助企業導入循環經濟，將減碳成本轉化為綠色商機，實現資源無限循環的閉環系統。', 'zh-CN': '协助企业导入循环经济，将减碳成本转化为绿色商机，实现资源无限循环的闭环系统。', 'en': 'Assisting enterprises in adopting the circular economy, transforming carbon reduction costs into green business opportunities for a closed-loop system.' },
        icon: 'fa-arrows-spin'
      },
      {
        id: 3,
        title: { 'zh-TW': '3. 賦能生態圈：從知識到實務的全面支持', 'zh-CN': '3. 赋能生态圈：从知识到实务的全面支持', 'en': '3. Enablement Ecosystem: Comprehensive Support from Knowledge to Practice' },
        approach: { 'zh-TW': '整合國際認證培訓、專家顧問與法律諮詢，建立永續人才庫。', 'zh-CN': '整合国际认证培训、专家顾问与法律咨询，建立永续人才库。', 'en': 'Integrating international certification training, expert consultants, and legal advice to build a sustainable talent pool.' },
        value: { 'zh-TW': '與專業機構共創標準，讓加入生態圈的企業能共享最新的法規資訊與技術支援，降低轉型門檻。', 'zh-CN': '与专业机构共创标准，让加入生态圈的企业能共享最新的法规信息与技术支援，降低转型门槛。', 'en': 'Co-creating standards with professional organizations allows ecosystem members to share the latest regulatory information and tech support, lowering transition barriers.' },
        icon: 'fa-graduation-cap'
      }
    ],
    // 💡 此處為 ESG 生態照片預留版位，請在此行更換您的照片路徑
    esgSectionImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600"
  },

  // 🏢 關於我們詳細內容
  about: {
    spiritTitle: { 'zh-TW': '企業精神', 'zh-CN': '企业精神', 'en': 'Corporate Spirit' },
    spiritContent: { 
      'zh-TW': '聚合創研是一家結合材料科技、循環製造、碳數據管理與城市級循環經濟建置的系統整合公司。\n以「再森核材料科技」與「ESG智能平台系統」為核心，我們打造可複製、可擴張、可量化的低碳循環生產模式，協助工廠升級、品牌減碳、政府推動城市循環經濟。\n我們相信：循環材料、智能數據與城市產業升級，必須被整合為同一套系統，而不是分散的個別專案。', 
      'zh-CN': '聚合创研是一家结合材料科技、循环制造、碳数据管理与城市级循环经济建置的系统整合公司。\n以「再森核材料科技」与「ESG智能平台系统」为核心，我们打造可复制、可扩张、可量化的低碳 circular 生产模式，協助工厂升级、品牌减碳、政府推动城市循环经济。\n我们相信：循环材料、智能数据与城市产业升级，必须被整合为同一套系统，而不是分散的個別专案。', 
      'en': 'TerraUnion is a system integration company combining material technology, circular manufacturing, carbon data management, and urban-level circular economy construction.\nWith "ReForis Material Technology" and "ESG Intelligent Platform System" as its core, we create reproducible, expandable, and quantifiable low-carbon circular production models, helping factories upgrade, brands reduce carbon, and governments promote urban circular economy.\nWe believe that circular materials, intelligent data, and urban industrial upgrading must be integrated into the same system, rather than fragmented individual projects.' 
    },
    storyTitle: { 'zh-TW': '企業故事', 'zh-CN': '企业故事', 'en': 'Our Story' },
    storyContent: { 
      'zh-TW': '聚合創研成立的初衷，是為了解決全球面臨的三大問題：\n1.廢塑料無法有效回收與再利用\n2.企業與城市在減碳與 ESG 上缺乏真實數據\n3.循環經濟缺乏實際可落地的商業模式\n我們以材料科技為起點，並向上整合產線、向下整合碳數據，同時跨界政府、市場與企業，讓「循環經濟」不再停留在概念，而是成為每一座城市都能複製的產業。', 
      'zh-CN': '聚合创研成立的初衷，是为了解决全球面临的三大问题：\n1.废塑料无法有效回收与再利用\n2.企业与城市在减碳与 ESG 上缺乏真实数据\n3.循环经济缺乏实际可落地的商业模式\n我们以材料科技为起点，并向上整合产线、向下整合碳数据，同时跨界 government、市场与企业，让「循环经济」不再停留在概念，而是成为每一座城市都能复制的產業。', 
      'en': 'TerraUnion was founded to solve three major global challenges:\n1. Waste plastics cannot be effectively recycled and reused.\n2. Enterprises and cities lack real data on carbon reduction and ESG.\n3. Circular economy lacks practical, implementable business models.\nStarting from material technology, we integrate production lines upwards and carbon data downwards, crossing boundaries between government, markets, and enterprises, making "circular economy" a replicable industry for every city.' 
    }
  },

  // ⚖️ 法律條款內容
  footer: {
    privacy: { 'zh-TW': '隱私權政策', 'zh-CN': '隐私权政策', 'en': 'Privacy Policy' },
    terms: { 'zh-TW': '法律條款', 'zh-CN': '法律条款', 'en': 'Terms of Service' },
    privacyContent: {
      'zh-TW': '聚合創研（下稱本公司）重視您的隱私。我們承諾絕不向未經授權之第三方外洩、租借或出售您的個人數據。',
      'zh-CN': '聚合創研（下稱本公司）重視您的隱私。我們承諾絕不向未經授權之第三方外洩、租借或出售您的個人數據。',
      'en': 'TerraUnion respects your privacy. We promise never to leak personal data to unauthorized third parties.'
    },
    termsContent: {
      'zh-TW': '本網站所有內容，其版權及知識產權均屬聚合創研有限公司所有。未經書面授權嚴禁轉載。',
      'zh-CN': '本網站所有內容，其版權及知識產權均屬聚合創研有限公司所有。未經書面授權嚴禁轉載。',
      'en': 'All content on this website is the intellectual property of TerraUnion Co., Ltd.'
    }
  },

  // 📞 聯絡資訊
  contact: {
    address: { 
      'zh-TW': '100 臺北市中正區重慶南路 2 段 21 號 2 樓之 4', 
      'zh-CN': '100 台北市中正区重庆南路 2 段 21 号 2 楼之 4', 
      'en': '2F-4, No. 21, Sec. 2, Chongqing S. Rd., Zhongzheng Dist., Taipei City 100, Taiwan (R.O.C.)' 
    },
    email: 'contact@terra-union.com',
    mapTitle: { 'zh-TW': '公司位置', 'zh-CN': '公司位置', 'en': 'Office Location' }
  }
};
