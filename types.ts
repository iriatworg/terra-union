
export type Language = 'zh-TW' | 'zh-CN' | 'en';

export interface ParkRecord {
  id: string;
  hidden?: boolean;
  title: { [key in Language]: string };
  description: { [key in Language]: string };
  images: string[];
}

export interface ApplicationCategory {
  title: string;
  products: string;
  description: string;
  image: string;
}

export interface TranslationContent {
  common: {
    detail: string;
    comingSoon: string;
    viewAlbum: string;
    back: string;
  };
  nav: {
    about: string;
    tech: string;
    apps: string;
    park: string;
    news: string;
    media: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    spiritTitle: string;
    spiritContent: string;
    storyTitle: string;
    storyContent: string;
  };
  tech: {
    bannerSubtitle: string;
    tabReForis: string;
    tabESG: string;
    introTitle: string;
    introContent: string;
    featureTitle: string;
    features: { text: string; icon: string }[];
    appTitle: string;
    appSubtitle: string;
    apps: { text: string; icon: string }[];
    specialTitle: string;
    specials: { text: string; icon: string }[];
  };
  apps: {
    categories: ApplicationCategory[];
  };
  park: {
    title: string;
    listTitle: string;
    items: any[];
  };
  news: {
    title: string;
    items: any[];
  };
  media: {
    newsTitle: string;
    eventTitle: string;
    newsItems: any[];
    eventItems: any[];
  };
  contact: {
    email: string;
    address: string;
    mapTitle: string;
  };
  footer: {
    address: string;
    email: string;
    copy: string;
    privacy: string;
    terms: string;
    legalContent: {
      privacy: string;
      terms: string;
    }
  };
}

export type Translations = {
  [key in Language]: TranslationContent;
};
