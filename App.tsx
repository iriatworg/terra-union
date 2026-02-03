
import React, { useState } from 'react';
import { translations } from './translations';
import { siteContent } from './content';
import { Language } from './types';

type Page = string;
type TechTab = 'reforis' | 'esg';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh-TW');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedParkId, setSelectedParkId] = useState<string | null>(null);
  const [activeTechTab, setActiveTechTab] = useState<TechTab>('reforis');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMediaTab, setActiveMediaTab] = useState<'news' | 'events'>('news');
  const [showLegal, setShowLegal] = useState<{ show: boolean, type: 'privacy' | 'terms' }>({ show: false, type: 'privacy' });
  
  const t = translations[lang];
  const assets = siteContent.assets;

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    document.documentElement.lang = newLang;
    setIsMenuOpen(false);
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setSelectedParkId(null);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const primaryColor = 'text-[#708238]';
  const primaryBg = 'bg-[#708238]';

  const renderPageContent = () => {
    const bannerImg = assets.banners[currentPage as keyof typeof assets.banners] || assets.banners.news;
    const pageTitle = (t.nav as any)[currentPage] || currentPage;

    switch(currentPage) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-500">
            <section className="relative h-[80vh] flex items-center bg-gray-900 overflow-hidden">
               <div className="absolute inset-0 opacity-50">
                 <img src={assets.home.heroBg} className="w-full h-full object-cover" alt="Hero" />
               </div>
               <div className="max-w-7xl mx-auto px-4 w-full relative z-10 text-white">
                  <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">{t.hero.title}</h1>
                  <p className="text-xl text-gray-300 mb-10 max-w-2xl">{t.hero.subtitle}</p>
                  <div className="flex gap-4">
                    <button onClick={() => navigateTo('tech')} className={`${primaryBg} text-white px-10 py-4 rounded-full font-black text-sm shadow-2xl hover:scale-105 transition-transform`}>
                      {t.hero.cta}
                    </button>
                    <button onClick={() => navigateTo('apps')} className={`bg-white text-[#708238] border border-white px-10 py-4 rounded-full font-black text-sm shadow-2xl hover:bg-gray-100 transition-all`}>
                      {t.nav.apps}
                    </button>
                  </div>
               </div>
            </section>

            <section className="py-32 max-w-7xl mx-auto px-4">
               <div className="grid md:grid-cols-3 gap-10">
                 <HomeFeatureCard title={t.nav.about} desc={t.about.spiritContent} onMore={() => navigateTo('about')} icon={assets.home.aboutIcon} detailLabel={t.common.detail} />
                 <HomeFeatureCard title={t.nav.tech} desc={t.tech.introContent} onMore={() => navigateTo('tech')} icon={assets.home.techIcon} detailLabel={t.common.detail} />
                 <HomeFeatureCard title={t.nav.apps} desc={t.apps.categories[0].description} onMore={() => navigateTo('apps')} icon="fa-th-large" detailLabel={t.common.detail} />
               </div>
            </section>
          </div>
        );

      case 'about':
        return (
          <div className="animate-in fade-in duration-500">
            <PageHeader title={pageTitle} bgImage={bannerImg} />
            <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="inline-block px-4 py-1 bg-[#708238]/10 text-[#708238] rounded-lg text-xs font-black uppercase tracking-widest mb-6">Spirit</div>
                    <h3 className="text-4xl font-black mb-8 text-gray-900">{t.about.spiritTitle}</h3>
                    <p className="text-gray-600 leading-[1.8] text-lg font-medium whitespace-pre-line">{t.about.spiritContent}</p>
                  </div>
                  <div className="order-1 lg:order-2 aspect-video lg:aspect-square bg-gray-50 rounded-[3rem] overflow-hidden shadow-xl">
                    <img src={assets.pageImages.aboutSpirit} className="w-full h-full object-cover" alt="Spirit" />
                  </div>
               </div>
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="aspect-video lg:aspect-square bg-gray-50 rounded-[3rem] overflow-hidden shadow-xl">
                     <img src={assets.pageImages.aboutStory} className="w-full h-full object-cover" alt="Story" />
                  </div>
                  <div>
                    <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-black uppercase tracking-widest mb-6">Our Story</div>
                    <h3 className="text-4xl font-black mb-8 text-gray-900">{t.about.storyTitle}</h3>
                    <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                      <p className="text-gray-600 leading-[1.8] text-lg font-medium whitespace-pre-line">{t.about.storyContent}</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className="animate-in fade-in duration-500">
            <PageHeader title={pageTitle} subtitle={t.tech.bannerSubtitle} bgImage={bannerImg} />
            <div className="max-w-7xl mx-auto px-4 py-24">
               {/* 技術切換目錄 */}
               <div className="flex flex-wrap justify-center gap-6 mb-24">
                  <button 
                    onClick={() => setActiveTechTab('reforis')}
                    className={`flex items-center gap-4 px-10 py-5 rounded-[2rem] text-lg font-black transition-all duration-300 ${activeTechTab === 'reforis' ? 'bg-[#708238] text-white shadow-2xl scale-105' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                  >
                    <i className="fas fa-microchip"></i> {t.tech.tabReForis}
                  </button>
                  <button 
                    onClick={() => setActiveTechTab('esg')}
                    className={`flex items-center gap-4 px-10 py-5 rounded-[2rem] text-lg font-black transition-all duration-300 ${activeTechTab === 'esg' ? 'bg-[#708238] text-white shadow-2xl scale-105' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                  >
                    <i className="fas fa-chart-line"></i> {t.tech.tabESG}
                  </button>
               </div>

               {activeTechTab === 'reforis' ? (
                 <div className="animate-in slide-in-from-bottom duration-500">
                    <div className="max-w-4xl mx-auto mb-40 text-left">
                       <div className="inline-block px-8 py-3 bg-[#708238]/10 rounded-2xl text-[#708238] font-black text-sm mb-12 uppercase tracking-widest">ReForis Material Technology</div>
                       <h3 className="text-5xl lg:text-6xl font-black mb-12 text-gray-900 leading-tight">{t.tech.introTitle}</h3>
                       <div className="p-12 bg-white border-l-[12px] border-[#708238] shadow-2xl rounded-r-[3rem]">
                         <p className="text-2xl text-gray-700 leading-relaxed font-bold">{t.tech.introContent}</p>
                       </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 mb-40">
                       <div className="p-16 bg-[#708238]/5 border border-[#708238]/10 rounded-[4rem] shadow-sm relative overflow-hidden group">
                         <h4 className="text-4xl font-black mb-12 flex items-center gap-6 text-[#708238]">{t.tech.featureTitle}</h4>
                         <ul className="grid sm:grid-cols-1 gap-6">
                           {t.tech.features.map((f, i) => (
                             <li key={i} className="flex items-start gap-6 text-xl font-bold leading-normal text-gray-800">
                               <div className="w-10 h-10 bg-[#708238] rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                                  <i className={`fas ${f.icon} text-lg`}></i>
                               </div>
                               <span className="pt-0.5">{f.text}</span>
                             </li>
                           ))}
                         </ul>
                       </div>

                       <div className="p-16 border-4 border-[#708238] rounded-[4rem] relative overflow-hidden group bg-white text-gray-900">
                         <h4 className="text-4xl font-black mb-12 flex items-center gap-6 text-[#708238]">{t.tech.specialTitle}</h4>
                         <ul className="space-y-8">
                           {t.tech.specials.map((s, i) => (
                             <li key={i} className="flex items-start gap-6 text-xl font-bold leading-normal">
                               <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                                  <i className={`fas ${s.icon} text-lg`}></i>
                               </div>
                               <span className="pt-0.5">{s.text}</span>
                             </li>
                           ))}
                         </ul>
                       </div>
                    </div>

                    <div className="mb-32">
                       <h4 className="text-4xl lg:text-5xl font-black mb-8 text-center">{t.tech.appTitle}</h4>
                       <p className="text-xl text-gray-500 font-bold mb-16 text-center max-w-2xl mx-auto">{t.tech.appSubtitle}</p>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {t.tech.apps.map((a: any, i: number) => (
                            <div key={i} className="group p-10 bg-white border border-gray-100 rounded-[3rem] shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-b-8 border-b-gray-100 hover:border-b-[#708238] flex items-center gap-8">
                              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-[#708238] group-hover:bg-[#708238] group-hover:text-white transition-all duration-500 flex-shrink-0">
                                <i className={`fas ${a.icon} text-3xl`}></i>
                              </div>
                              <div className="text-xl font-black text-gray-900 group-hover:text-[#708238] transition-colors">{a.text}</div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
               ) : (
                 <div className="animate-in slide-in-from-bottom duration-500">
                    <div className="max-w-4xl mx-auto mb-24 text-left">
                       <div className="inline-block px-8 py-3 bg-[#708238]/10 rounded-2xl text-[#708238] font-black text-sm mb-12 uppercase tracking-widest">ESG Smart Platform System</div>
                       <h3 className="text-4xl lg:text-5xl font-black mb-10 text-gray-900 leading-tight">ESG 智能平台系統</h3>
                       
                       <div className="p-12 bg-white border-l-[12px] border-[#708238] shadow-2xl rounded-r-[3rem] mb-16">
                         <p className="text-2xl text-gray-700 leading-relaxed font-bold mb-8">
                           {(t.tech as any).esgIntro}
                         </p>
                         <ul className="space-y-6">
                           {(t.tech as any).esgStrategic.map((text: string, idx: number) => (
                             <li key={idx} className="flex items-start gap-4 text-xl font-bold text-gray-800">
                               <div className="w-3 h-3 bg-[#708238] rounded-full mt-2.5 shrink-0"></div>
                               <span>{text}</span>
                             </li>
                           ))}
                         </ul>
                       </div>
                    </div>

                    <div className="mb-24">
                       <h4 className="text-3xl lg:text-4xl font-black mb-16 text-center text-gray-900 italic">
                         {(t.tech as any).esgDimensionsTitle}
                       </h4>
                       <div className="grid lg:grid-cols-3 gap-10">
                          {(t.tech as any).esgDimensions.map((dim: any) => (
                            <div key={dim.id} className="p-10 bg-[#708238]/5 border border-[#708238]/10 rounded-[3.5rem] shadow-sm flex flex-col h-full font-bold">
                              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#708238] mb-10 shadow-lg border border-gray-50">
                                <i className={`fas ${dim.icon} text-3xl`}></i>
                              </div>
                              <h5 className="text-2xl font-black mb-8 text-gray-900">{dim.title}</h5>
                              
                              <div className="space-y-8 flex-grow">
                                <div>
                                  <div className="text-[10px] uppercase tracking-widest text-[#708238] mb-2">具體做法 / Approach</div>
                                  <p className="text-gray-600 leading-relaxed">{dim.approach}</p>
                                </div>
                                <div className="pt-6 border-t border-[#708238]/10">
                                  <div className="text-[10px] uppercase tracking-widest text-[#708238] mb-2">核心價值 / Core Value</div>
                                  <p className="text-gray-800 leading-relaxed font-black">{dim.value}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                       </div>
                    </div>

                    {/* 💡 圖片版位：預留給您的 ESG 生態照片 */}
                    <div className="mt-32 max-w-6xl mx-auto">
                       <div className="aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100 group">
                          <img 
                            src={(t.tech as any).esgSectionImage} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                            alt="ESG Ecosystem" 
                          />
                       </div>
                       <p className="text-center text-gray-400 mt-8 text-sm font-bold uppercase tracking-widest">
                         ESG Ecosystem Visualization
                       </p>
                    </div>
                 </div>
               )}
            </div>
          </div>
        );

      case 'apps':
        return (
          <div className="animate-in fade-in duration-500">
            <PageHeader title={pageTitle} subtitle={lang === 'en' ? 'Practical applications of TerraUnion technologies.' : '聚合創研技術的多元實踐成果。'} bgImage={bannerImg} />
            <div className="max-w-7xl mx-auto px-4 py-24">
              <div className="grid gap-16">
                {t.apps.categories.map((cat: any, i: number) => (
                  <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                      <img src={cat.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={cat.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                      <h3 className="text-4xl font-black text-gray-900 leading-tight">{cat.title}</h3>
                      <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                         <div className="text-[#708238] font-black text-sm mb-2 uppercase tracking-wide">Key Products</div>
                         <p className="text-gray-900 font-bold mb-6 text-lg">{cat.products}</p>
                         <hr className="border-gray-200 mb-6" />
                         <p className="text-gray-600 leading-relaxed font-medium text-lg">"{cat.description}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'park':
        const visibleParks = t.park.items.filter((p: any) => p.hidden !== true);
        const currentPark = t.park.items.find((p:any) => p.id === selectedParkId);
        return (
          <div className="animate-in fade-in duration-500">
            <PageHeader title={pageTitle} bgImage={bannerImg} />
            <div className="max-w-7xl mx-auto px-4 py-24">
              {!selectedParkId ? (
                <div>
                  <h3 className="text-3xl font-black mb-16 text-center">{t.park.listTitle}</h3>
                  <div className="flex flex-wrap justify-center gap-10">
                    {visibleParks.map((item: any) => (
                      <div 
                        key={item.id} 
                        onClick={() => { setSelectedParkId(item.id); window.scrollTo(0, 400); }} 
                        className="group cursor-pointer bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 w-full md:max-w-[380px]"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <img src={item.images[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                        </div>
                        <div className="p-8">
                          <h4 className="text-xl font-black mb-4 group-hover:text-[#708238] transition-colors">{item.title}</h4>
                          <p className="text-gray-500 text-sm line-clamp-2 mb-6 font-bold">{item.description}</p>
                          <span className="text-xs font-black uppercase tracking-widest text-[#708238]">{t.common.detail} <i className="fas fa-arrow-right ml-2"></i></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-in slide-in-from-bottom duration-500">
                  <button onClick={() => setSelectedParkId(null)} className="mb-12 flex items-center gap-3 text-gray-400 font-black text-sm hover:text-black transition-colors">
                    <i className="fas fa-arrow-left"></i> {t.common.back}
                  </button>
                  <div className="max-w-4xl mx-auto mb-24 text-center lg:text-left">
                    <h3 className="text-4xl font-black mb-8 border-l-8 border-[#708238] pl-8">{currentPark.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">{currentPark.description}</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentPark.images.map((img: string, i: number) => (
                      <div key={i} className="aspect-square bg-gray-50 rounded-3xl overflow-hidden shadow-md group">
                        <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Park" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'news':
        const visibleNews = t.news.items.filter((n: any) => n.hidden !== true);
        return (
          <div className="animate-in fade-in duration-500">
            <PageHeader title={pageTitle} bgImage={bannerImg} />
            <div className="max-w-4xl mx-auto px-4 py-24">
               {visibleNews.length > 0 ? (
                 <div className="space-y-12">
                   {visibleNews.map((news: any, idx: number) => {
                     const CardWrapper = news.link ? 'a' : 'div';
                     return (
                       <CardWrapper key={idx} href={news.link} className={`block overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-sm transition-all ${news.link ? 'hover:shadow-2xl hover:-translate-y-1' : ''}`}>
                          <div className="p-10 font-black">
                            <div className="flex items-center gap-4 mb-4">
                              <span className="text-sm text-[#708238] uppercase tracking-widest">{news.date}</span>
                            </div>
                            <h4 className="text-2xl text-gray-900 mb-4">{news.title}</h4>
                            {news.content && <p className="text-gray-500 mb-6 font-medium leading-relaxed whitespace-pre-line text-lg">{news.content}</p>}
                          </div>
                          {news.image && (
                            <div className="aspect-video lg:aspect-[21/9] overflow-hidden bg-gray-100">
                               <img src={news.image} className="w-full h-full object-cover" alt={news.title} />
                            </div>
                          )}
                       </CardWrapper>
                     );
                   })}
                 </div>
               ) : (
                 <p className="text-center text-gray-400 py-20 font-medium">{t.common.comingSoon}</p>
               )}
            </div>
          </div>
        );

      case 'contact':
        const addressLabel = { 'zh-TW': '公司地址', 'zh-CN': '公司地址', 'en': 'Company Address' }[lang];
        const emailLabel = { 'zh-TW': '聯絡信箱', 'zh-CN': '联络信箱', 'en': 'Email Address' }[lang];
        const openMapLabel = { 'zh-TW': '在導航中開啟', 'zh-CN': '在导航中开启', 'en': 'Open in Maps' }[lang];
        const sendMailLabel = { 'zh-TW': '立即寄信聯絡', 'zh-CN': '立即寄信联络', 'en': 'Send a Mail' }[lang];

        return (
          <div className="animate-in fade-in duration-500">
            <PageHeader title={pageTitle} bgImage={bannerImg} />
            <div className="max-w-7xl mx-auto px-4 py-32">
              <div className="grid md:grid-cols-2 gap-12 items-stretch">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-[4rem] p-16 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-50 overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#708238]"></div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className={`w-20 h-20 mb-12 rounded-3xl ${primaryBg} flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:rotate-12`}>
                      <i className="fas fa-map-marker-alt text-3xl"></i>
                    </div>
                    <div className="text-gray-400 text-xs font-black uppercase tracking-[0.3em] mb-4">Our Location</div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 group-hover:text-[#708238] transition-colors">
                      {addressLabel}
                    </h3>
                    <p className="text-xl lg:text-2xl font-bold text-gray-600 leading-relaxed mb-12 flex-grow min-h-[4rem]">
                      {t.contact.address}
                    </p>
                    <div className="flex items-center gap-3 text-[#708238] font-black text-sm uppercase tracking-widest pt-4 border-t border-gray-50">
                      {openMapLabel} <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                  <i className="fas fa-map-marker-alt absolute -bottom-10 -right-10 text-[12rem] text-gray-50 group-hover:text-[#708238]/5 transition-colors pointer-events-none"></i>
                </a>

                <a 
                  href={`mailto:${t.contact.email}`}
                  className="group relative bg-white rounded-[4rem] p-16 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-50 overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#708238]"></div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className={`w-20 h-20 mb-12 rounded-3xl ${primaryBg} flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:-rotate-12`}>
                      <i className="fas fa-envelope text-3xl"></i>
                    </div>
                    <div className="text-gray-400 text-xs font-black uppercase tracking-[0.3em] mb-4">Direct Communication</div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 group-hover:text-[#708238] transition-colors">
                      {emailLabel}
                    </h3>
                    <p className="text-xl lg:text-2xl font-bold text-gray-600 leading-relaxed mb-12 break-all flex-grow min-h-[4rem]">
                      {t.contact.email}
                    </p>
                    <div className="flex items-center gap-3 text-[#708238] font-black text-sm uppercase tracking-widest pt-4 border-t border-gray-50">
                      {sendMailLabel} <i className="fas fa-paper-plane"></i>
                    </div>
                  </div>
                  <i className="fas fa-envelope absolute -bottom-10 -right-10 text-[12rem] text-gray-50 group-hover:text-[#708238]/5 transition-colors pointer-events-none"></i>
                </a>
              </div>
            </div>
          </div>
        );

      case 'media':
        const visibleMediaNews = t.media.newsItems.filter((m: any) => m.hidden !== true);
        const visibleMediaEvents = t.media.eventItems.filter((e: any) => e.hidden !== true);
        return (
          <div className="animate-in fade-in duration-500">
            <PageHeader title={pageTitle} bgImage={bannerImg} />
            <div className="max-w-7xl mx-auto px-4 py-24">
              <div className="flex justify-center gap-4 mb-20">
                 <button onClick={() => setActiveMediaTab('news')} className={`px-8 py-3 rounded-full text-sm font-black transition-all ${activeMediaTab === 'news' ? 'bg-[#708238] text-white shadow-lg' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}>{t.media.newsTitle}</button>
                 <button onClick={() => setActiveMediaTab('events')} className={`px-8 py-3 rounded-full text-sm font-black transition-all ${activeMediaTab === 'events' ? 'bg-[#708238] text-white shadow-lg' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}>{t.media.eventTitle}</button>
              </div>

              {activeMediaTab === 'news' ? (
                <div className="max-w-5xl mx-auto space-y-8">
                  {visibleMediaNews.map((item: any, idx: number) => (
                    <a key={idx} href={item.link} target="_blank" className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-3xl hover:shadow-xl border border-gray-50 transition-all group overflow-hidden">
                       <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                          <img src={item.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={item.title} />
                       </div>
                       <div className="flex-grow flex flex-col justify-center">
                         <div className="flex items-center gap-3 mb-3">
                           <span className="bg-gray-50 px-3 py-1 rounded text-[10px] font-black text-[#708238]">{item.source}</span>
                           <span className="text-[10px] text-gray-400 font-bold">{item.date}</span>
                         </div>
                         <h4 className="text-xl font-black text-gray-800 group-hover:text-[#708238] transition-colors">{item.title}</h4>
                       </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {visibleMediaEvents.map((event: any, idx: number) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl flex flex-col h-full font-black">
                      <div className="aspect-video overflow-hidden">
                        <img src={event.image} className="w-full h-full object-cover" alt={event.title} />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="text-[#708238] text-xs mb-2 uppercase tracking-widest">{event.date}</div>
                        <h4 className="text-xl mb-4 text-gray-900">{event.title}</h4>
                        <p className="text-gray-500 text-sm mb-8 font-medium line-clamp-3 flex-grow">{event.description}</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-4 pt-4 border-t border-gray-50 mt-auto">
                          {event.videoUrl && (
                            <a href={event.videoUrl} target="_blank" className="flex items-center gap-2 text-red-600 text-xs font-black hover:underline uppercase tracking-widest group">
                              <i className="fab fa-youtube text-lg group-hover:scale-110 transition-transform"></i> 
                              {event.videoLabel || '影片實錄'}
                            </a>
                          )}
                          {event.albumUrl && (
                            <a href={event.albumUrl} target="_blank" className="flex items-center gap-2 text-blue-600 text-xs font-black hover:underline uppercase tracking-widest group">
                              <i className="fas fa-images text-lg group-hover:scale-110 transition-transform"></i> 
                              {event.albumLabel}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="animate-in fade-in duration-500">
            <PageHeader title={pageTitle} bgImage={bannerImg} />
            <div className="max-w-7xl mx-auto px-4 py-40 text-center">
                <i className="fas fa-hammer text-4xl text-gray-200 mb-10"></i>
                <p className="text-gray-400 text-lg font-medium">{t.common.comingSoon}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#708238] selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateTo('home')}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${primaryBg} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <i className="fas fa-leaf"></i>
              </div>
              <span className="text-xl font-black tracking-tighter">聚合創研 <span className={primaryColor}>TerraUnion</span></span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {siteContent.menuConfig.map(key => (
              <NavButton key={key} active={currentPage === key} label={String((t.nav as any)[key])} onClick={() => navigateTo(key)} />
            ))}
            <div className="flex bg-gray-50 p-1 rounded-full border border-gray-100 mx-2">
              <LangBtn active={lang === 'zh-TW'} label="繁" onClick={() => changeLanguage('zh-TW')} />
              <LangBtn active={lang === 'zh-CN'} label="简" onClick={() => changeLanguage('zh-CN')} />
              <LangBtn active={lang === 'en'} label="EN" onClick={() => changeLanguage('en')} />
            </div>
            <button onClick={() => navigateTo('contact')} className={`${primaryBg} text-white px-6 py-2 rounded-full text-xs font-black shadow-md hover:brightness-110 transition-all`}>
              {t.nav.contact}
            </button>
          </div>

          <button className="lg:hidden p-2 text-gray-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </nav>

      {/* 修正：移除聯絡我們下方的淺色線條，並調整語言選擇區塊位置上移 */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#708238] pt-24 px-10 flex flex-col lg:hidden animate-in slide-in-from-right duration-300 overflow-y-auto text-white">
          <div className="flex flex-col space-y-1">
            {siteContent.menuConfig.map(key => (
              <MobileNavBtn 
                key={key} 
                active={currentPage === key}
                label={String((t.nav as any)[key])} 
                onClick={() => navigateTo(key)} 
              />
            ))}
            <MobileNavBtn 
                active={currentPage === 'contact'}
                label={String(t.nav.contact)} 
                onClick={() => navigateTo('contact')} 
                noBorder
            />
          </div>
          
          <div className="py-4 border-t border-white/20 mt-2 flex flex-col gap-4">
             <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">Language Selection</div>
             <div className="flex gap-8">
               <button onClick={() => changeLanguage('zh-TW')} className={`text-sm font-bold tracking-widest ${lang === 'zh-TW' ? 'text-white' : 'text-white/50'}`}>繁體中文</button>
               <button onClick={() => changeLanguage('zh-CN')} className={`text-sm font-bold tracking-widest ${lang === 'zh-CN' ? 'text-white' : 'text-white/50'}`}>简体中文</button>
               <button onClick={() => changeLanguage('en')} className={`text-sm font-bold tracking-widest ${lang === 'en' ? 'text-white' : 'text-white/50'}`}>ENGLISH</button>
             </div>
          </div>
        </div>
      )}

      <main>{renderPageContent()}</main>

      <footer className="bg-gray-950 text-white py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-black mb-8">聚合創研 <span className={primaryColor}>TerraUnion</span></div>
          <div className="mb-12 space-y-2 text-gray-400 font-bold">
            <p><i className="fas fa-map-marker-alt mr-2"></i> {t.footer.address}</p>
            <p>
              <i className="fas fa-envelope mr-2"></i> 
              <a href={`mailto:${t.footer.email}`} className="hover:text-white transition-colors underline-offset-4 hover:underline">
                {t.footer.email}
              </a>
            </p>
          </div>
          <p className="text-gray-500 text-sm mb-12">{t.footer.copy}</p>
          <div className="flex justify-center gap-8 text-xs font-black uppercase tracking-widest text-gray-400">
             <button onClick={() => setShowLegal({ show: true, type: 'privacy' })} className="hover:text-white transition-colors underline-offset-4 hover:underline">{t.footer.privacy}</button>
             <button onClick={() => setShowLegal({ show: true, type: 'terms' })} className="hover:text-white transition-colors underline-offset-4 hover:underline">{t.footer.terms}</button>
          </div>
        </div>
      </footer>

      {showLegal.show && (
        <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-2xl rounded-[3rem] p-12 relative animate-in zoom-in duration-300 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-4 bg-[#708238]"></div>
              <button onClick={() => setShowLegal({ ...showLegal, show: false })} className="absolute top-8 right-8 text-gray-300 hover:text-black transition-colors"><i className="fas fa-times text-2xl"></i></button>
              <h4 className="text-4xl font-black mb-10 text-gray-900 flex items-center gap-4">
                <i className={`fas ${showLegal.type === 'privacy' ? 'fa-user-shield' : 'fa-file-contract'} text-[#708238]`}></i>
                {showLegal.type === 'privacy' ? t.footer.privacy : t.footer.terms}
              </h4>
              <div className="p-10 bg-gray-50 rounded-[2.5rem] text-gray-600 leading-[1.8] font-bold text-lg max-h-[60vh] overflow-y-auto custom-scrollbar">
                {showLegal.type === 'privacy' ? t.footer.legalContent.privacy : t.footer.legalContent.terms}
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

const PageHeader: React.FC<{ title: string; subtitle?: string; bgImage: string }> = ({ title, subtitle, bgImage }) => (
  <div className="relative pt-48 pb-24 overflow-hidden bg-gray-900">
    <div className="absolute inset-0 z-0">
      <img src={bgImage} className="w-full h-full object-cover opacity-40" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
      <h1 className="text-6xl font-black mb-6">{title}</h1>
      {subtitle && <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-medium">{subtitle}</p>}
    </div>
  </div>
);

const NavButton: React.FC<{ active: boolean; label: string; onClick: () => void }> = ({ active, label, onClick }) => (
  <button onClick={onClick} className={`hover:text-[#708238] transition-colors relative py-1 text-[13px] font-bold uppercase tracking-widest ${active ? 'text-[#708238]' : 'text-gray-500'}`}>
    {label}
    {active && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#708238] animate-in fade-in duration-300"></span>}
  </button>
);

const MobileNavBtn: React.FC<{ label: string; onClick: () => void; active?: boolean; noBorder?: boolean }> = ({ label, onClick, active, noBorder }) => (
  <button 
    onClick={onClick} 
    className={`block w-full text-left text-lg font-medium py-4 ${noBorder ? '' : 'border-b border-white/10'} transition-all ${active ? 'text-white font-black pl-2' : 'text-white/70 hover:text-white hover:pl-2'}`}
  >
    {label}
  </button>
);

const LangBtn: React.FC<{ active: boolean; label: string; onClick: () => void }> = ({ active, label, onClick }) => (
  <button onClick={onClick} className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest transition-all ${active ? 'bg-[#708238] text-white shadow-md' : 'text-gray-400 hover:text-gray-900'}`}>{label}</button>
);

const HomeFeatureCard: React.FC<{ title: string; desc: string; onMore: () => void; icon: string; detailLabel: string }> = ({ title, desc, onMore, icon, detailLabel }) => (
  <div className="p-12 bg-white border border-gray-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group hover:-translate-y-2 flex flex-col h-full font-bold">
    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#708238] mb-10 group-hover:bg-[#708238] group-hover:text-white transition-all">
      <i className={`fas ${icon} text-2xl`}></i>
    </div>
    <h4 className="text-2xl font-black mb-6 text-gray-900">{title}</h4>
    <p className="text-gray-500 mb-10 leading-relaxed text-sm flex-grow line-clamp-4">{desc}</p>
    <div className="mt-auto">
      <button onClick={onMore} className="text-[#708238] font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2">
        {detailLabel} <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
);

export default App;
