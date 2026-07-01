import type { Dictionary } from "./index";

const tr: Dictionary = {
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    portfolio: "Portföy",
    why: "Neden Web Sitesi?",
    news: "Haberler",
    contact: "İletişim",
    cta: "Bize Ulaşın",
  },

  common: {
    viewWork: "Çalışmalarımız",
    startProject: "Projeye Başla",
    chooseService: "Hizmet Seçin",
    startYourProject: "Projene Başla",
    seeOurWork: "Çalışmaları Gör",
    exploreServices: "Tüm Hizmetler",
    viewAll: "Tümünü Gör",
    readFullCase: "Tamamını Oku",
    learnMore: "Daha Fazla",
    readMore: "Devamını Oku",
    getStarted: "Başla",
    sendMessage: "Mesaj Gönder",
    trustedBy: "30+ müşteri bize güveniyor",
  },

  home: {
    badge: "Dijital Ajans · Tiflis, Gürcistan",
    heroLine: "İşletmeniz için dijital ürünler geliştiriyoruz",
    heroHighlight: "İşletmeniz için",
    heroSubtitle:
      "Web siteleri ve uygulamalar, analitik ve denetim, SEO ve reklam, web tasarımı ve pazarlama.",

    stats: {
      projects: "Tamamlanan Proje",
      clients: "Mutlu Müşteri",
      years: "Yıllık Deneyim",
      satisfaction: "Memnuniyet Oranı",
    },

    services: {
      badge: "Ne Yapıyoruz",
      title: "Büyüme için tasarlanmış",
      titleHighlight: "Hizmetler",
      subtitle:
        "Çevrimiçi var olmak, büyümek ve öne çıkmak için ihtiyacınız olan her şey — tek çatı altında.",
    },

    why: {
      badge: "Neden Web Sitesi?",
      title: "Müşterileriniz",
      titleHighlight: "Şu An Arıyor",
      subtitle:
        "Çevrimiçi görünmüyorsanız, rakibiniz görünüyor. Her işletmenin neden profesyonel bir web sitesine ihtiyacı olduğu işte burada.",
      labels: { credibility: "Güven", visibility: "Görünürlük", sales: "Satış" },
    },

    portfolio: {
      badge: "Çalışmalarımız",
      title: "Son",
      titleHighlight: "Projeler",
      dragHint: "Keşfetmek için sürükleyin veya yan kartlara tıklayın",
    },

    process: {
      badge: "Nasıl Çalışıyoruz",
      title: "Basit,",
      titleHighlight: "Şeffaf",
      titleEnd: "Süreç",
    },

    testimonials: {
      badge: "Yorumlar",
      title: "Müşterilerimiz",
      titleHighlight: "Ne Diyor",
    },

    cta: {
      badge: "Ücretsiz Danışmanlık · Taahhüt Yok",
      title: "Harika bir şey inşa etmeye",
      titleHighlight: "hazır mısınız?",
      subtitle:
        "Ücretsiz 30 dakikalık görüşme ayırtın — neye ihtiyacınız olduğunu birlikte belirleyelim.",
    },

    ai: {
      badge: "Yapay Zeka ve Otomasyon",
      title: "İşletmenizi",
      titleHighlight: "otomatik pilota",
      subtitle:
        "Siz uyurken çalışan yapay zeka asistanları ve otomasyonlar kuruyoruz — müşterilere yanıt verir, potansiyel müşterileri eler, araçlarınızı senkronize eder.",
      points: [
        { title: "Yapay Zeka Sohbet Asistanları", desc: "İşinize göre eğitilmiş. Her dilde anında yanıt, 7/24." },
        { title: "İş Akışı Otomasyonu", desc: "CRM, e-posta, faturalar ve tablolar — bağlı ve kendi kendine çalışıyor." },
        { title: "Akıllı Analitik", desc: "Neyin işe yaradığını söyleyen net raporlar — tablo derdi olmadan." },
      ],
      chat: {
        assistant: "Yapay Zeka Asistanı",
        online: "Çevrimiçi",
        m1: "Merhaba! Yarın boş bir saat var mı?",
        m2: "Merhaba! Evet — 10:00 veya 14:30. Hangisi uygun?",
        m3: "14:30 lütfen",
        m4: "Rezerve edildi ✓ Yarın 14:30'da görüşürüz!",
      },
    },
  },

  services: {
    items: [
      { title: "Web Geliştirme", desc: "Next.js üzerine kurulu, dönüşüm için tasarlanmış yıldırım hızında siteler ve uygulamalar." },
      { title: "Yapay Zeka Sohbet Botları", desc: "Müşterilere yanıt veren, randevu alan ve satan özel yapay zeka ajanları — 7/24." },
      { title: "İş Otomasyonu", desc: "Araçlarınızı bağlıyor, tekrarlayan işleri otomatikleştiriyoruz — potansiyel müşteriden faturaya." },
      { title: "UI/UX ve Marka Tasarımı", desc: "Piksel mükemmelliğinde arayüzler ve gerçekten hatırlanan kimlikler." },
      { title: "SEO ve Büyüme", desc: "Üst sıralara çıkın, bulunun ve trafiği gelire dönüştürün." },
      { title: "Mobil Uygulamalar", desc: "Tek kod tabanından yerel hissiyatlı iOS ve Android uygulamaları." },
    ],
    page: {
      badge: "Hizmetlerimiz",
      title: "Çevrimiçi kazanmak için",
      titleHighlight: "ihtiyacınız olan her şey",
      subtitle:
        "Fikirden büyümeye — tek çatı altında uçtan uca dijital hizmetler.",
      featuresLabel: "Neler dahil",
      ctaTitle: "Neye ihtiyacınız olduğundan emin değil misiniz?",
      ctaSubtitle: "Ücretsiz danışmanlık ayırtın, hedefleriniz için mükemmel planı birlikte çıkaralım.",
    },
  },

  why: {
    items: [
      { stat: "%97", text: "tüketici yerel alışveriş öncesi çevrimiçi arama yapıyor" },
      { stat: "%75", text: "güvenilirliğinizi web sitenizin tasarımıyla değerlendiriyor" },
      { stat: "24/7", text: "siz uyurken bile web siteniz çalışıyor" },
      { stat: "2.8×", text: "profesyonel web varlığı olan işletmeler için daha fazla gelir" },
      { stat: "%88", text: "çevrimiçi ziyaretçi 24 saat içinde arıyor veya geliyor" },
    ],
    page: {
      badge: "Neden Web Sitesi?",
      title: "Web sitesi bir masraf değil —",
      titleHighlight: "en iyi satış elemanınızdır",
      subtitle:
        "7/24 çalışır, asla hastalanmaz ve başka türlü tanışamayacağınız müşterilere ulaşır. İşte veriler.",
      reasonsTitle: "Harika bir web sitesi sizin için ne yapar",
      reasons: [
        { title: "Anında güven oluşturur", desc: "İlk izlenim 50 milisaniyede oluşur. Özenli bir site gerçek olduğunuzu gösterir." },
        { title: "Gece gündüz çalışır", desc: "Vitriniz, broşürünüz ve satış temsilciniz — her gün 24 saat açık." },
        { title: "Google'da bulunmanızı sağlar", desc: "İnsanlar sunduğunuz şeyi aradığında, tıkladıkları sonuç olmak istersiniz." },
        { title: "Ziyaretçileri müşteriye çevirir", desc: "Net mesaj ve akıllı tasarım, merakı rezervasyon ve satışa dönüştürür." },
      ],
      ctaTitle: "İşinizi çevrimiçine taşımaya hazır mısınız?",
      ctaSubtitle: "Gelirinizi gerçekten artıran bir web sitesi inşa edelim.",
    },
  },

  portfolio: {
    categories: ["Tümü", "Web", "UI/UX", "Marka", "Mobil"],
    items: [
      { title: "Chateau Iveri", category: "Web", desc: "Gürcü bir şaraphane malikanesi için etkileyici görseller, tadımlar ve konaklama rezervasyonuna sahip şarap ve konaklama sitesi." },
      { title: "SBuilding", category: "Web", desc: "Batum'da konut projelerini sergileyen bir inşaat ve gayrimenkul geliştirici sitesi." },
      { title: "AISI Group", category: "Web", desc: "Premium konut ve ticari projeler için gayrimenkul yatırım platformu." },
      { title: "Daud Travel", category: "Web", desc: "Gürcistan'da tur, transfer ve macera rezervasyonu için turizm şirketi sitesi." },
      { title: "United Company", category: "Web", desc: "Batum'da daire, ev ve ticari mülkler için inşaat ve gayrimenkul portalı." },
      { title: "Roommate", category: "Web", desc: "Ev arkadaşı, oda ve daire bulmak için eşleştirme platformu." },
      { title: "Prestige Audit", category: "Web", desc: "Mali denetim, vergi ve iş danışmanlığı şirketi sitesi." },
      { title: "GB Valuation", category: "Web", desc: "Hukuki ve sigorta amaçlı sertifikalı mülk ve varlık değerleme platformu." },
      { title: "Geo Care Group", category: "Web", desc: "Acil olmayan tıbbi ulaşım hizmeti rezervasyon sitesi." },
    ],
    page: {
      badge: "Çalışmalarımız",
      title: "Gurur duyduğumuz",
      titleHighlight: "Projeler",
      subtitle:
        "Web, mobil ve markalaşma alanlarından son çalışmalardan bir seçki. Her proje sonuç için inşa edildi.",
      ctaTitle: "Aklınızda bir proje mi var?",
      ctaSubtitle: "Müşterilerinizin seveceği bir şey yaratalım.",
    },
  },

  about: {
    page: {
      badge: "Hakkımızda",
      title: "Harika dijital işlere",
      titleHighlight: "takıntılı bir ekibiz",
      subtitle:
        "Tiflis'ten tasarımcılar ve mühendisler — harika görünen, kusursuz çalışan ürünler.",
      storyTitle: "Hikayemiz",
      story:
        "Tek inanç: dijital varlığınız sizin kadar çok çalışmalı. Gürcistan'da ve ötesinde ekiplere yardım ediyoruz.",
      valuesTitle: "Neyi Savunuyoruz",
      values: [
        { title: "Ustalık", desc: "Yaptığımız her işte piksel mükemmelliğinde detaylar ve temiz kod." },
        { title: "Hız", desc: "Hızlı siteler, hızlı teslimat, hızlı destek — bekleme yok." },
        { title: "Ortaklık", desc: "Sadece teslimata değil, büyümenize yatırım yapıyoruz." },
        { title: "Şeffaflık", desc: "Net fiyatlar, dürüst zaman çizelgeleri, sürpriz yok." },
      ],
      statsTitle: "Rakamlarla",
      ctaTitle: "Bizimle çalışmak ister misiniz?",
      ctaSubtitle: "Projenizi duymaktan mutluluk duyarız.",
    },
  },

  news: {
    page: {
      badge: "Haberler ve Görüşler",
      title: "Fikirler, güncellemeler ve",
      titleHighlight: "dijital trendler",
      subtitle:
        "Web tasarımı, geliştirme ve büyüme üzerine taze düşünceler — doğrudan Digify Lab ekibinden.",
      readMore: "Makaleyi oku",
      minRead: "dk okuma",
    },
    posts: [
      { title: "2026'yı Belirleyecek 7 Web Tasarım Trendi", category: "Tasarım", excerpt: "Yapay zeka destekli düzenlerden cesur minimalizme — bu yıl webi şekillendiren trendler.", date: "2 Haz 2026", read: 6 },
      { title: "Sayfa Hızı Neden En Hafife Alınan Büyüme Kaldıracınız", category: "Performans", excerpt: "Bir saniyelik gecikme dönüşümleri %7 düşürebilir. Siteleri nasıl hızlı tuttuğumuz.", date: "24 May 2026", read: 5 },
      { title: "2026'da Yerel SEO: Küçük İşletmeler için Pratik Rehber", category: "SEO", excerpt: "Reklama servet harcamadan, yakınınızdaki müşteriler aradığında nasıl görünürsünüz.", date: "12 May 2026", read: 8 },
      { title: "İnsanların Gerçekten Hatırladığı Bir Marka İnşa Etmek", category: "Marka", excerpt: "Logolar sadece başlangıç. Kalıcı bir kimlik nasıl oluşturulur.", date: "30 Nis 2026", read: 7 },
      { title: "Next.js mi WordPress mi: Hangisi Size Uygun?", category: "Geliştirme", excerpt: "Siteniz için doğru temeli seçmenize yardımcı olacak açık bir karşılaştırma.", date: "18 Nis 2026", read: 9 },
      { title: "Dönüşüm Sağlayan Bir Açılış Sayfasının Anatomisi", category: "Büyüme", excerpt: "Her bölüm sırayla ve neden işe yaradığının psikolojisi.", date: "5 Nis 2026", read: 6 },
    ],
  },

  contact: {
    page: {
      badge: "Bize Ulaşın",
      title: "Birlikte bir şeyler",
      titleHighlight: "inşa edelim",
      subtitle:
        "Projenizi anlatın, 24 saat içinde size dönelim. Taahhüt yok, baskı yok.",
      infoTitle: "İletişim Bilgileri",
      email: "E-posta",
      phone: "Telefon",
      location: "Konum",
      locationValue: "Tiflis, Gürcistan",
      hoursTitle: "Çalışma Saatleri",
      hours: "Pzt–Cum · 9:00 – 18:00",
      followTitle: "Bizi Takip Edin",
    },
    form: {
      name: "Ad Soyad",
      namePlaceholder: "Ahmet Yılmaz",
      email: "E-posta Adresi",
      emailPlaceholder: "ahmet@example.com",
      subject: "Konu",
      subjectPlaceholder: "Size nasıl yardımcı olabiliriz?",
      message: "Mesaj",
      messagePlaceholder: "Projenizi anlatın...",
      submit: "Mesaj Gönder",
      sending: "Gönderiliyor...",
      success: "Teşekkürler! 24 saat içinde size döneceğiz.",
      error: "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
      required: "Bu alan zorunludur",
      invalidEmail: "Lütfen geçerli bir e-posta girin",
    },
  },

  footer: {
    tagline:
      "Olağanüstü dijital deneyimler üretiyoruz — etkileyici web sitelerinden, işinize gerçek büyüme getiren güçlü web uygulamalarına kadar.",
    companyTitle: "Şirket",
    servicesTitle: "Hizmetler",
    ctaTitle: "Başlamaya hazır mısınız?",
    ctaText: "Ücretsiz danışmanlık ve proje tahmini alın. Taahhüt gerekmez.",
    ctaLink: "Bir sohbet başlatın",
    rights: "Tüm hakları saklıdır.",
    builtBy: "Özenle inşa edildi —",
    serviceLinks: ["Web Geliştirme", "Yapay Zeka Botları", "İş Otomasyonu", "UI/UX Tasarımı", "SEO ve Büyüme"],
  },

  testimonials: [
    { name: "İrakli Beridze", role: "CEO, TbilisiTech", quote: "Gelen taleplerimiz 3 ayda üç katına çıktı. Yaptığımız en iyi yatırım." },
    { name: "Nino Cangiraşvili", role: "Sahibi, Café Rustaveli", quote: "Google'da #1'iz ve site üzerinden her gün rezervasyon alıyoruz." },
    { name: "Giorgi Kvaratskhelia", role: "Kurucu, GeoProperty", quote: "Zamanında, bütçesinde ve sonuç tüm beklentileri aştı." },
    { name: "Ana Maisuradze", role: "Direktör, Tbilisi Spa", quote: "3 kat fazla harcayan rakiplerden daha iyi görünüyor. Kesinlikle değer." },
    { name: "David Tsintsadze", role: "Sahibi, Auto Service Plus", quote: "Siteden gelen aramalar 2 ayda ikiye katlandı. Hayran kaldım." },
    { name: "Tamar Basilaşvili", role: "Kurucu, Flora Studio", quote: "Ekip markamızı mükemmel anladı. Muhteşem sonuç." },
  ],

  process: [
    { title: "Keşif", desc: "Hedeflerinizi, kitlenizi ve rekabet ortamını öğreniriz." },
    { title: "Tasarım", desc: "Gurur duyacağınız yüksek çözünürlüklü taslaklar ve görseller." },
    { title: "Geliştirme", desc: "Temiz, performanslı kod zamanında teslim edilir." },
    { title: "Yayın ve Büyüme", desc: "Yayınlarız, ardından sürekli büyümenizi destekleriz." },
  ],
};

export default tr;
