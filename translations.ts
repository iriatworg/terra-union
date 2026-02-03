
import { Translations, Language } from './types';
import { siteContent } from './content';

export const translations: Translations = {
  'zh-TW': mapContent('zh-TW'),
  'zh-CN': mapContent('zh-CN'),
  'en': mapContent('en')
};

function mapContent(lang: Language) {
  const c = siteContent;
  const tc = c.tech; // 方便讀取
  
  return {
    common: { 
      detail: c.common.detail[lang], 
      comingSoon: c.common.comingSoon[lang],
      viewAlbum: c.common.viewAlbum[lang],
      back: c.common.back[lang]
    },
    nav: {
      about: c.nav.about[lang],
      tech: c.nav.tech[lang],
      apps: c.nav.apps[lang],
      park: c.nav.park[lang],
      news: c.nav.news[lang],
      media: c.nav.media[lang],
      contact: c.nav.contact[lang]
    },
    hero: {
      title: (c as any).hero.title[lang],
      subtitle: (c as any).hero.subtitle[lang],
      cta: lang === 'en' ? 'Explore' : (lang === 'zh-CN' ? '探索技术' : '探索技術')
    },
    about: {
      spiritTitle: c.about.spiritTitle[lang],
      spiritContent: c.about.spiritContent[lang],
      storyTitle: c.about.storyTitle[lang],
      storyContent: c.about.storyContent[lang],
    },
    tech: {
      bannerSubtitle: tc.bannerSubtitle[lang],
      tabReForis: tc.tabReForis[lang],
      tabESG: tc.tabESG[lang],
      introTitle: tc.introTitle[lang],
      introContent: tc.introContent[lang],
      featureTitle: tc.featureTitle[lang],
      features: tc.features.map(f => ({ text: f[lang], icon: f.icon })),
      appTitle: tc.appTitle[lang],
      appSubtitle: tc.appSubtitle[lang],
      apps: tc.apps.map(a => ({ text: a[lang], icon: a.icon })),
      specialTitle: tc.specialTitle[lang],
      specials: tc.specials.map(s => ({ text: s[lang], icon: s.icon })),
      // 新增 ESG 部分
      esgIntro: (tc as any).esgIntro[lang],
      esgStrategic: (tc as any).esgStrategic.map((s: any) => s[lang]),
      esgDimensionsTitle: (tc as any).esgDimensionsTitle[lang],
      esgDimensions: (tc as any).esgDimensions.map((d: any) => ({
        id: d.id,
        title: d.title[lang],
        approach: d.approach[lang],
        value: d.value[lang],
        icon: d.icon
      })),
      esgSectionImage: (tc as any).esgSectionImage
    },
    apps: {
      categories: c.applicationCategories.map(cat => ({
        title: cat.title[lang],
        products: cat.products[lang],
        description: cat.description[lang],
        image: cat.image
      }))
    },
    park: {
      title: c.nav.park[lang],
      listTitle: lang === 'en' ? 'Our Facilities' : (lang === 'zh-CN' ? '基地列表' : '基地列表'),
      items: c.parks.map(p => ({
        id: p.id,
        hidden: p.hidden,
        title: p.title[lang],
        description: p.description[lang],
        images: p.images
      }))
    },
    news: {
      title: c.nav.news[lang],
      items: c.newsList.map(n => ({
        ...n,
        title: n.title[lang],
        content: n.content ? n.content[lang] : ""
      }))
    },
    media: {
      newsTitle: lang === 'en' ? 'News Coverage' : (lang === 'zh-CN' ? '新闻报道' : '新聞報導'),
      eventTitle: lang === 'en' ? 'Event Records' : (lang === 'zh-CN' ? '活动记录' : '活動紀錄'),
      newsItems: c.mediaNews.map(m => ({
        ...m,
        title: m.title[lang]
      })),
      eventItems: c.mediaEvents.map(e => ({
        ...e,
        title: e.title[lang],
        description: e.description[lang],
        albumLabel: e.albumLabel ? e.albumLabel[lang] : "",
        videoLabel: e.videoLabel ? e.videoLabel[lang] : ""
      }))
    },
    contact: {
      email: c.contact.email,
      address: c.contact.address[lang],
      mapTitle: c.contact.mapTitle[lang]
    },
    footer: {
      address: c.contact.address[lang],
      email: c.contact.email,
      copy: '© 2025 TerraUnion. All rights reserved.',
      privacy: c.footer.privacy[lang],
      terms: c.footer.terms[lang],
      legalContent: {
        privacy: c.footer.privacyContent[lang],
        terms: c.footer.termsContent[lang]
      }
    }
  };
}
