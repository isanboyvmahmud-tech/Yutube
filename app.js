/**
 * YouTube Clone - Mukammal JavaScript Kodi
 * Til: O'zbekcha (Uzbek)
 */

// ================= 1. ASOSIY MA'LUMOTLAR (VIDEOLAR RO'YXATI) =================
const DEFAULT_VIDEOS = [
  {
    id: "vid_1",
    ytId: "OWg2WTBz3GI",
    mp4Url: "https://vjs.zencdn.net/v/oceans.mp4",
    title: "Konsta & Timur Alixonov - Odamlar Nima Deydi? (Rasmiy Musiqiy Klip)",
    channel: "Konsta Official",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    subs: "520 ming",
    views: "8.2 mln",
    rawViews: 8200000,
    timestamp: "1 oy oldin",
    duration: "3:45",
    category: "musiqa",
    thumbnail: "https://img.youtube.com/vi/OWg2WTBz3GI/hqdefault.jpg",
    likes: "250K",
    description: "Konsta va Timur Alixonov tomonidan ijro etilgan jamiyatdagi qarashlar, erkinlik va shaxsiy rivojlanish haqidagi chuqur ma'noli o'zbek musiqiy xiti.\n\nKanalga obuna bo'ling va yangi treklarni birinchilardan bo'lib tinglang!",
    tags: ["#konsta", "#odamlarnimadeydi", "#uzbekmusic", "#rap"]
  },
  {
    id: "vid_2",
    ytId: "rBmJZhbquyA",
    mp4Url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Suvsiz Oʻzbekiston: Orol Fojeasi va Kelajak Avlod Taqdiri | SUBYEKTIV",
    channel: "Subyektiv",
    channelAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
    subs: "680 ming",
    views: "1.4 mln",
    rawViews: 1400000,
    timestamp: "3 oy oldin",
    duration: "48:15",
    category: "podkast",
    thumbnail: "https://img.youtube.com/vi/rBmJZhbquyA/hqdefault.jpg",
    likes: "85K",
    description: "Jamshidxon Ziyoxonov boshchiligidagi Subyektiv loyihasidan O'zbekistondagi global suv muammosi, suv tanqisligi va Orolbo'yi hududidagi ekologik holat haqida maxsus tahliliy film.\n\n\"Fikrlar subyektiv, xulosa har kimning o'zidan!\"",
    tags: ["#subyektiv", "#suvsizuzbekistan", "#hujjatlifilm", "#ekologiya"]
  },
  {
    id: "vid_3",
    ytId: "R0k-sQlqL8c",
    mp4Url: "https://vjs.zencdn.net/v/oceans.mp4",
    title: "Osmondagi Bolalar (O'zbek Milliy Badiiy Filmi) | To'liq film 1080p HD",
    channel: "O'zbekfilm",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    subs: "1.2 mln",
    views: "5.6 mln",
    rawViews: 5600000,
    timestamp: "6 oy oldin",
    duration: "1:24:10",
    category: "kino",
    thumbnail: "https://img.youtube.com/vi/R0k-sQlqL8c/hqdefault.jpg",
    likes: "310K",
    description: "Zulfiqor Musoqovning o'zbek kinosi durdonasi hisoblangan afsonaviy 'Osmondagi bolalar' filmi. To'rt do'stning beg'ubor orzulari, sevgisi va hayotiy kechinmalari haqida to'liq o'zbekcha film.",
    tags: ["#osmondagibolalar", "#ozbekkino", "#uzbekfilm", "#retro"]
  },
  {
    id: "vid_4",
    ytId: "R0IZt1O6Gz4",
    mp4Url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "#00 Dasturlash Asoslari: Python Darslariga Kirish | Sariq Dev",
    channel: "Sariq Dev",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    subs: "380 ming",
    views: "480 ming",
    rawViews: 480000,
    timestamp: "1 yil oldin",
    duration: "18:25",
    category: "dasturlash",
    thumbnail: "https://img.youtube.com/vi/R0IZt1O6Gz4/hqdefault.jpg",
    likes: "28K",
    description: "Anvar Narzullaev (Sariq Dev) tomonidan o'zbek tilida noldan boshlovchilar uchun tayyorlangan eng mukammal Python dasturlash kursi.\n\nDasturlashni o'rganishni bugundan boshlang!",
    tags: ["#sariqdev", "#python", "#dasturlash", "#itpark"]
  },
  {
    id: "vid_5",
    ytId: "3l2r1M2o5j8",
    mp4Url: "https://vjs.zencdn.net/v/oceans.mp4",
    title: "#02 Python Darslari: Birinchi Dasturimiz (Hello World!) va Sintaksis",
    channel: "Sariq Dev",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    subs: "380 ming",
    views: "340 ming",
    rawViews: 340000,
    timestamp: "1 yil oldin",
    duration: "15:40",
    category: "dasturlash",
    thumbnail: "https://img.youtube.com/vi/3l2r1M2o5j8/hqdefault.jpg",
    likes: "19K",
    description: "Ushbu darsda Python tilida birinchi kodimizni yozamiz, print() funksiyasi, matnlar bilan ishlash va dasturlash mantig'ini tushunib olamiz.",
    tags: ["#python", "#helloworld", "#dasturlash", "#mohirdev"]
  },
  {
    id: "vid_6",
    ytId: "AGJClb_FeJQ",
    mp4Url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Samarqand Bo'ylab 4K Sayohat: Registon, Go'ri Amir va Ipak Yo'li Javohiri",
    channel: "Uzbekistan Travel",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    subs: "310 ming",
    views: "920 ming",
    rawViews: 920000,
    timestamp: "5 oy oldin",
    duration: "28:10",
    category: "sayohat",
    thumbnail: "https://img.youtube.com/vi/AGJClb_FeJQ/hqdefault.jpg",
    likes: "54K",
    description: "Samarqand shahrining ko'hna obidalari, Registon maydoni, Bibixonim masjidi va betakror sharqona bozorlar bo'ylab ajoyib 4K ultra-ravshan sayohat lavhasi.",
    tags: ["#samarqand", "#uzbekistan", "#travel", "#registan"]
  },
  {
    id: "vid_7",
    ytId: "mjCVlpSmAkQ",
    mp4Url: "https://vjs.zencdn.net/v/oceans.mp4",
    title: "O'zbek Milliy Mumtoz Dutor Kuylari: Abdurahim Hamidov - Mashqi Iroq",
    channel: "O'zbek Madaniyati",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    subs: "120 ming",
    views: "650 ming",
    rawViews: 650000,
    timestamp: "8 oy oldin",
    duration: "12:45",
    category: "musiqa",
    thumbnail: "https://img.youtube.com/vi/mjCVlpSmAkQ/hqdefault.jpg",
    likes: "42K",
    description: "Qalbga sokinlik va ma'naviy orom bag'ishlovchi o'zbek an'anaviy mumtoz dutor kuylari. O'zbekiston xalq artisti Abdurahim Hamidov ijrosida.",
    tags: ["#dutor", "#milliykuy", "#mumtoz", "#uzbekistan"]
  },
  {
    id: "vid_8",
    ytId: "sL6xY79-1kg",
    mp4Url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "Kun.uz Maxsus Intervyusi: Fabio Kannavaro va O'zbekiston Futboli Kelajagi",
    channel: "Kun.uz",
    channelAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
    subs: "1.8 mln",
    views: "320 ming",
    rawViews: 320000,
    timestamp: "1 oy oldin",
    duration: "35:20",
    category: "yangiliklar",
    thumbnail: "https://img.youtube.com/vi/sL6xY79-1kg/hqdefault.jpg",
    likes: "24K",
    description: "Kun.uz tahririyatidan jahon futboli yulduzlari va O'zbekiston terma jamoasi faoliyati, yangi rejalar va qiziqarli voqealar tahlili.",
    tags: ["#kunuz", "#intervyu", "#futbol", "#yangiliklar"]
  },
  {
    id: "vid_9",
    ytId: "F5v6z6J2t4c",
    mp4Url: "https://vjs.zencdn.net/v/oceans.mp4",
    title: "#04 Python Darslari: O'zgaruvchilar (Variables) va Ma'lumot Turlari",
    channel: "Sariq Dev",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    subs: "380 ming",
    views: "290 ming",
    rawViews: 290000,
    timestamp: "1 yil oldin",
    duration: "22:15",
    category: "dasturlash",
    thumbnail: "https://img.youtube.com/vi/F5v6z6J2t4c/hqdefault.jpg",
    likes: "16K",
    description: "Python tilida o'zgaruvchilar nima, sonlar (int, float), matnlar (string) va ulardan to'g'ri foydalanish qoidalari o'zbek tilida batafsil tushuntirilgan.",
    tags: ["#python", "#ozgaruvchilar", "#sariqdev", "#dasturlash"]
  },
  {
    id: "vid_10",
    ytId: "Gk7K-Wc1Xyk",
    mp4Url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    title: "#11 Python Darslari: Shart Operatorlari if-elif-else | Amaliy Dars",
    channel: "Najot Ta'lim",
    channelAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    subs: "215 ming",
    views: "210 ming",
    rawViews: 210000,
    timestamp: "10 oy oldin",
    duration: "26:30",
    category: "talim",
    thumbnail: "https://img.youtube.com/vi/Gk7K-Wc1Xyk/hqdefault.jpg",
    likes: "14K",
    description: "Dasturlashda eng muhim qism — mantiqiy qarorlar qabul qilish. Python tilida if, elif va else operatorlari bilan ishlash bo'yicha to'liq amaliyot.",
    tags: ["#python", "#najottalim", "#shartoperatorlari", "#dasturlash"]
  }
];

// YouTube Shorts ma'lumotlari (100% O'zbekona Shorts)
const SHORTS_DATA = [
  {
    id: "short1",
    ytId: "2xE9OY9H-lY",
    title: "Toshkent City: Zamonaviy O'zbekiston poytaxti go'zalligi 🏙️🇺🇿 #shorts #tashkent #uzbekistan",
    channel: "@tashkent_uz",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
    likes: "195K",
    comments: "1.4K",
    sound: "Toshkent City Favvoralari",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
  },
  {
    id: "short2",
    ytId: "dKH2hKq4Drs",
    title: "Toshkent shahrining eng go'zal va diqqatga sazovor joylari! ✨🕌 #shorts #uzbekistan",
    channel: "@uzbekistan_travel",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    likes: "240K",
    comments: "1.8K",
    sound: "O'zbekona Navo",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "short3",
    ytId: "I-f_VDM2K6k",
    title: "Samarqand Registon maydoni kechqurun aqlbovar qilmas go'zal! 🕌✨ #samarkand #registan",
    channel: "@samarqand_official",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    likes: "320K",
    comments: "3.2K",
    sound: "Registon Sehrli Oqshomi",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
  },
  {
    id: "short4",
    ytId: "vlb4c9ePo1M",
    title: "Toshkent Osh Markazi: Har kuni 3000 kg haqiqiy o'zbek oshi tayyorlanadi! 🍲🇺🇿 #osh #plov",
    channel: "@milliy_taomlar",
    channelAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100",
    likes: "410K",
    comments: "4.5K",
    sound: "O'zbek Milliy Palovi",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: "short5",
    ytId: "OWg2WTBz3GI",
    title: "Konsta: Odamlar Nima Deydi? (Mashhur qism) 🎤✨ #konsta #shorts #uzbekmusic",
    channel: "@konsta_uz",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    likes: "380K",
    comments: "5.1K",
    sound: "Konsta - Odamlar nima deydi",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
  }
];

// Obunalar ro'yxati (Sidebar)
const SUBSCRIPTIONS = [
  { name: "Konsta Official", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", isLive: false },
  { name: "Subyektiv", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100", isLive: true },
  { name: "Sariq Dev", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100", isLive: false },
  { name: "O'zbekfilm", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", isLive: false },
  { name: "Uzbekistan Travel", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", isLive: false },
  { name: "Kun.uz", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100", isLive: true }
];

// Birlamchi sharhlar
const DEFAULT_COMMENTS = [
  {
    id: "c1",
    author: "Javohir Toshmatov",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
    time: "2 soat oldin",
    text: "Ajoyib o'zbekcha kontent bo'libdi! Aynan shu mavzuni kutayotgan edim. Keyingi qismini ham tezroq chiqaringlar iltimos!",
    likes: 42
  },
  {
    id: "c2",
    author: "Malika Karimova",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    time: "1 kun oldin",
    text: "O'zbek tilida shunday sifatli va tushunarli videolar ko'payotganidan juda xursandman. Rahmat kattakon!",
    likes: 24
  },
  {
    id: "c3",
    author: "Bekzod Umarov",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100",
    time: "3 kun oldin",
    text: "Super kontent! O'zbekiston IT va madaniyatini dunyoga tanitishda sizlarga omad 👏🇺🇿",
    likes: 68
  }
];

// ================= 2. APP CLASS =================
class YouTubeApp {
  constructor() {
    const DATA_VERSION = 'v6_uzbek_real_confirmed';
    const currentVer = localStorage.getItem('yt_app_version');
    let savedVideos = this.loadFromStorage('yt_videos', null);
    const hasOldVideo = savedVideos && savedVideos.some(v => v.ytId === 'EngW7tLk6R8' || v.ytId === 'tgbNymZ7vqY' || v.ytId === 'kJQP7kiw5Fk' || (v.title && (v.title.includes('Gangnam') || v.title.includes('Bunny') || v.title.includes('Blender'))));

    if (currentVer !== DATA_VERSION || !savedVideos || !Array.isArray(savedVideos) || savedVideos.length === 0 || hasOldVideo || savedVideos[0].ytId === undefined) {
      this.videos = DEFAULT_VIDEOS;
      this.saveToStorage('yt_videos', DEFAULT_VIDEOS);
      this.subscriptions = ['Konsta Official', 'Subyektiv', 'Sariq Dev', 'O\'zbekfilm', 'Uzbekistan Travel', 'Kun.uz'];
      this.saveToStorage('yt_subs', this.subscriptions);
      try { localStorage.setItem('yt_app_version', DATA_VERSION); } catch(e) {}
    } else {
      this.videos = savedVideos;
      this.subscriptions = this.loadFromStorage('yt_subs', ['Konsta Official', 'Subyektiv', 'Sariq Dev']);
    }

    this.history = this.loadFromStorage('yt_history', []);
    this.likedVideos = this.loadFromStorage('yt_liked', []);
    this.watchLater = this.loadFromStorage('yt_watch_later', []);
    this.comments = this.loadFromStorage('yt_comments', {});
    
    this.currentVideo = null;
    this.currentCategory = 'all';
    this.currentShortIndex = 0;
    this.searchQuery = '';
    this.isDescExpanded = false;
    this.playerMode = 'youtube'; // Asosiy video pleyer
    this.shortsMode = 'youtube'; // Asosiy Shorts pleyer (YouTube orqali)
    this.isShortMuted = false;

    this.initDOM();
    this.initEventListeners();
    this.initTheme();
    this.renderSubscriptionsSidebar();
    this.renderVideoGrid();
  }

  loadFromStorage(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  }

  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("LocalStorage saqlashda xatolik:", e);
    }
  }

  initDOM() {
    this.sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    this.logoBtn = document.getElementById('logoBtn');
    this.mainSidebar = document.getElementById('mainSidebar');
    this.miniSidebar = document.getElementById('miniSidebar');
    this.themeToggleBtn = document.getElementById('themeToggleBtn');
    this.themeIcon = document.getElementById('themeIcon');
    
    // Qidiruv
    this.searchForm = document.getElementById('searchForm');
    this.searchInput = document.getElementById('searchInput');
    this.clearSearchBtn = document.getElementById('clearSearchBtn');
    this.voiceSearchBtn = document.getElementById('voiceSearchBtn');
    this.mobileSearchBtn = document.getElementById('mobileSearchBtn');
    this.mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
    this.closeMobileSearchBtn = document.getElementById('closeMobileSearchBtn');
    this.mobileSearchForm = document.getElementById('mobileSearchForm');
    this.mobileSearchInput = document.getElementById('mobileSearchInput');

    // Bo'limlar
    this.homeView = document.getElementById('homeView');
    this.watchView = document.getElementById('watchView');
    this.shortsView = document.getElementById('shortsView');
    this.collectionListView = document.getElementById('collectionListView');

    // Video Grid
    this.videoGrid = document.getElementById('videoGrid');
    this.noResults = document.getElementById('noResults');
    this.resetFilterBtn = document.getElementById('resetFilterBtn');
    this.categoryPills = document.querySelectorAll('.category-pill');

    // Watch Player elementlari
    this.playerContainer = document.getElementById('playerContainer');
    this.playerModeHtml5 = document.getElementById('playerModeHtml5');
    this.playerModeYt = document.getElementById('playerModeYt');
    this.quickYtUrlInput = document.getElementById('quickYtUrlInput');
    this.quickYtPlayBtn = document.getElementById('quickYtPlayBtn');

    this.watchTitle = document.getElementById('watchTitle');
    this.watchChannelAvatar = document.getElementById('watchChannelAvatar');
    this.watchChannelName = document.getElementById('watchChannelName');
    this.watchChannelSubs = document.getElementById('watchChannelSubs');
    this.subscribeBtn = document.getElementById('subscribeBtn');
    this.likeBtn = document.getElementById('likeBtn');
    this.likeIcon = document.getElementById('likeIcon');
    this.likeCount = document.getElementById('likeCount');
    this.dislikeBtn = document.getElementById('dislikeBtn');
    this.dislikeIcon = document.getElementById('dislikeIcon');
    this.shareBtn = document.getElementById('shareBtn');
    this.saveBtn = document.getElementById('saveBtn');
    this.saveIcon = document.getElementById('saveIcon');
    this.backToHomeBtn = document.getElementById('backToHomeBtn');
    this.watchViewsCount = document.getElementById('watchViewsCount');
    this.watchUploadDate = document.getElementById('watchUploadDate');
    this.watchTags = document.getElementById('watchTags');
    this.watchDescriptionText = document.getElementById('watchDescriptionText');
    this.toggleDescBtn = document.getElementById('toggleDescBtn');
    this.descriptionBox = document.getElementById('descriptionBox');
    this.relatedVideosList = document.getElementById('relatedVideosList');

    // Izohlar
    this.commentInput = document.getElementById('commentInput');
    this.commentActions = document.getElementById('commentActions');
    this.cancelCommentBtn = document.getElementById('cancelCommentBtn');
    this.submitCommentBtn = document.getElementById('submitCommentBtn');
    this.commentsList = document.getElementById('commentsList');
    this.commentsCountDisplay = document.getElementById('commentsCountDisplay');

    // Shorts elementlari
    this.shortsVideoPlayer = document.getElementById('shortsVideoPlayer');
    this.shortsModeYt = document.getElementById('shortsModeYt');
    this.shortsModeHtml5 = document.getElementById('shortsModeHtml5');
    this.quickShortsUrlInput = document.getElementById('quickShortsUrlInput');
    this.quickShortsPlayBtn = document.getElementById('quickShortsPlayBtn');
    this.shortsCounter = document.getElementById('shortsCounter');
    this.shortsSoundToggleBtn = document.getElementById('shortsSoundToggleBtn');
    this.shortsSoundIcon = document.getElementById('shortsSoundIcon');
    this.prevShortBtn = document.getElementById('prevShortBtn');
    this.nextShortBtn = document.getElementById('nextShortBtn');
    this.shortsAvatar = document.getElementById('shortsAvatar');
    this.shortsChannel = document.getElementById('shortsChannel');
    this.shortsSubBtn = document.getElementById('shortsSubBtn');
    this.shortsTitle = document.getElementById('shortsTitle');
    this.shortsSound = document.getElementById('shortsSound');
    this.shortsLikeBtn = document.getElementById('shortsLikeBtn');
    this.shortsLikeIcon = document.getElementById('shortsLikeIcon');
    this.shortsLikeCount = document.getElementById('shortsLikeCount');
    this.shortsShareBtn = document.getElementById('shortsShareBtn');

    // Kolleksiyalar
    this.collectionTitle = document.getElementById('collectionTitle');
    this.collectionSubtitle = document.getElementById('collectionSubtitle');
    this.collectionIcon = document.getElementById('collectionIcon');
    this.collectionGrid = document.getElementById('collectionGrid');
    this.collectionEmpty = document.getElementById('collectionEmpty');
    this.clearCollectionBtn = document.getElementById('clearCollectionBtn');

    // Modallar
    this.createVideoBtn = document.getElementById('createVideoBtn');
    this.uploadModal = document.getElementById('uploadModal');
    this.closeUploadModalBtn = document.getElementById('closeUploadModalBtn');
    this.cancelUploadBtn = document.getElementById('cancelUploadBtn');
    this.uploadVideoForm = document.getElementById('uploadVideoForm');

    this.shareModal = document.getElementById('shareModal');
    this.closeShareModalBtn = document.getElementById('closeShareModalBtn');
    this.shareLinkInput = document.getElementById('shareLinkInput');
    this.copyShareLinkBtn = document.getElementById('copyShareLinkBtn');

    // Dropdowns
    this.notificationsBtn = document.getElementById('notificationsBtn');
    this.notificationsDropdown = document.getElementById('notificationsDropdown');
    this.userProfileBtn = document.getElementById('userProfileBtn');
    this.profileDropdown = document.getElementById('profileDropdown');

    // Toast & Banner
    this.toast = document.getElementById('toast');
    this.toastMessage = document.getElementById('toastMessage');
    this.toastIcon = document.getElementById('toastIcon');
    this.bannerExploreBtn = document.getElementById('bannerExploreBtn');
  }

  initEventListeners() {
    // Sidebar
    if (this.sidebarToggleBtn) {
      this.sidebarToggleBtn.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          this.mainSidebar.classList.toggle('open');
        } else {
          document.body.classList.toggle('sidebar-collapsed');
        }
      });
    }

    if (this.logoBtn) {
      this.logoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('home');
        this.currentCategory = 'all';
        this.updateCategoryPills();
        this.renderVideoGrid();
      });
    }

    if (this.bannerExploreBtn) {
      this.bannerExploreBtn.addEventListener('click', () => {
        this.currentCategory = 'dasturlash';
        this.updateCategoryPills();
        this.renderVideoGrid();
      });
    }

    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Pleyer rejimi almashtirish (YouTube vs HTML5 MP4)
    if (this.playerModeYt) {
      this.playerModeYt.addEventListener('click', () => this.setPlayerMode('youtube'));
    }
    if (this.playerModeHtml5) {
      this.playerModeHtml5.addEventListener('click', () => this.setPlayerMode('html5'));
    }

    // Tezkor YouTube URL
    if (this.quickYtPlayBtn && this.quickYtUrlInput) {
      this.quickYtPlayBtn.addEventListener('click', () => this.handleQuickPlay());
      this.quickYtUrlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleQuickPlay();
        }
      });
    }

    // Shorts boshqaruvi
    if (this.shortsModeYt) {
      this.shortsModeYt.addEventListener('click', () => this.setShortsMode('youtube'));
    }
    if (this.shortsModeHtml5) {
      this.shortsModeHtml5.addEventListener('click', () => this.setShortsMode('html5'));
    }
    if (this.prevShortBtn) {
      this.prevShortBtn.addEventListener('click', () => this.prevShort());
    }
    if (this.nextShortBtn) {
      this.nextShortBtn.addEventListener('click', () => this.nextShort());
    }
    if (this.quickShortsPlayBtn && this.quickShortsUrlInput) {
      this.quickShortsPlayBtn.addEventListener('click', () => this.handleQuickShortPlay());
      this.quickShortsUrlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleQuickShortPlay();
        }
      });
    }
    if (this.shortsSoundToggleBtn) {
      this.shortsSoundToggleBtn.addEventListener('click', () => this.toggleShortsSound());
    }
    if (this.shortsLikeBtn) {
      this.shortsLikeBtn.addEventListener('click', () => this.toggleShortsLike());
    }
    if (this.shortsShareBtn) {
      this.shortsShareBtn.addEventListener('click', () => this.openShareModal("https://youtube.com/shorts/" + (SHORTS_DATA[this.currentShortIndex].ytId || SHORTS_DATA[this.currentShortIndex].id)));
    }

    // Qidiruv
    if (this.searchForm) {
      this.searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.performSearch(this.searchInput.value.trim());
      });
    }

    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => {
        if (this.searchInput.value.length > 0) {
          this.clearSearchBtn.classList.remove('hidden');
        } else {
          this.clearSearchBtn.classList.add('hidden');
          this.performSearch('');
        }
      });
    }

    if (this.clearSearchBtn) {
      this.clearSearchBtn.addEventListener('click', () => {
        this.searchInput.value = '';
        this.clearSearchBtn.classList.add('hidden');
        this.performSearch('');
      });
    }

    // Mobil qidiruv
    if (this.mobileSearchBtn) {
      this.mobileSearchBtn.addEventListener('click', () => {
        this.mobileSearchOverlay.classList.remove('hidden');
        this.mobileSearchOverlay.classList.add('flex');
        this.mobileSearchInput.focus();
      });
    }

    if (this.closeMobileSearchBtn) {
      this.closeMobileSearchBtn.addEventListener('click', () => {
        this.mobileSearchOverlay.classList.add('hidden');
        this.mobileSearchOverlay.classList.remove('flex');
      });
    }

    if (this.mobileSearchForm) {
      this.mobileSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = this.mobileSearchInput.value.trim();
        this.mobileSearchOverlay.classList.add('hidden');
        this.mobileSearchOverlay.classList.remove('flex');
        this.searchInput.value = query;
        this.performSearch(query);
      });
    }

    // Ovozli qidiruv
    if (this.voiceSearchBtn) {
      this.voiceSearchBtn.addEventListener('click', () => this.handleVoiceSearch());
    }

    // Kategoriya tugmalari
    this.categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.currentCategory = pill.dataset.category;
        this.updateCategoryPills();
        this.renderVideoGrid();
      });
    });

    if (this.resetFilterBtn) {
      this.resetFilterBtn.addEventListener('click', () => {
        this.currentCategory = 'all';
        this.searchInput.value = '';
        this.updateCategoryPills();
        this.renderVideoGrid();
      });
    }

    // Sidebar navigatsiya
    document.querySelectorAll('[data-nav]').forEach(item => {
      item.addEventListener('click', () => {
        const targetView = item.dataset.nav;
        this.handleNavigation(targetView);
        if (window.innerWidth <= 768) {
          this.mainSidebar.classList.remove('open');
        }
      });
    });

    // Sidebar kategoriyalari
    document.querySelectorAll('.category-sidebar-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.category;
        this.switchView('home');
        this.currentCategory = cat === 'tech' ? 'dasturlash' : cat;
        this.updateCategoryPills();
        this.renderVideoGrid();
        if (window.innerWidth <= 768) {
          this.mainSidebar.classList.remove('open');
        }
      });
    });

    // Watch Page tugmalari
    if (this.backToHomeBtn) {
      this.backToHomeBtn.addEventListener('click', () => this.switchView('home'));
    }
    if (this.subscribeBtn) {
      this.subscribeBtn.addEventListener('click', () => this.toggleSubscribe());
    }
    if (this.likeBtn) {
      this.likeBtn.addEventListener('click', () => this.toggleLike());
    }
    if (this.dislikeBtn) {
      this.dislikeBtn.addEventListener('click', () => this.toggleDislike());
    }
    if (this.saveBtn) {
      this.saveBtn.addEventListener('click', () => this.toggleSaveWatchLater());
    }
    if (this.shareBtn) {
      this.shareBtn.addEventListener('click', () => this.openShareModal());
    }
    if (this.descriptionBox) {
      this.descriptionBox.addEventListener('click', () => this.toggleDescription());
    }

    // Izohlar
    if (this.commentInput) {
      this.commentInput.addEventListener('focus', () => {
        this.commentActions.classList.remove('hidden');
        this.commentActions.classList.add('flex');
      });
      this.commentInput.addEventListener('input', () => {
        this.submitCommentBtn.disabled = this.commentInput.value.trim().length === 0;
      });
    }

    if (this.cancelCommentBtn) {
      this.cancelCommentBtn.addEventListener('click', () => {
        this.commentInput.value = '';
        this.submitCommentBtn.disabled = true;
        this.commentActions.classList.add('hidden');
        this.commentActions.classList.remove('flex');
      });
    }

    if (this.submitCommentBtn) {
      this.submitCommentBtn.addEventListener('click', () => this.handleAddComment());
    }

    // Video yuklash
    if (this.createVideoBtn) {
      this.createVideoBtn.addEventListener('click', () => this.uploadModal.classList.replace('hidden', 'flex'));
    }
    if (this.closeUploadModalBtn) {
      this.closeUploadModalBtn.addEventListener('click', () => this.uploadModal.classList.replace('flex', 'hidden'));
    }
    if (this.cancelUploadBtn) {
      this.cancelUploadBtn.addEventListener('click', () => this.uploadModal.classList.replace('flex', 'hidden'));
    }
    if (this.uploadVideoForm) {
      this.uploadVideoForm.addEventListener('submit', (e) => this.handleUploadVideo(e));
    }

    // Share modal
    if (this.closeShareModalBtn) {
      this.closeShareModalBtn.addEventListener('click', () => this.shareModal.classList.replace('flex', 'hidden'));
    }
    if (this.copyShareLinkBtn) {
      this.copyShareLinkBtn.addEventListener('click', () => this.copyShareLink());
    }

    // Dropdowns
    if (this.notificationsBtn) {
      this.notificationsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.notificationsDropdown.classList.toggle('hidden');
        this.profileDropdown.classList.add('hidden');
      });
    }

    if (this.userProfileBtn) {
      this.userProfileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.profileDropdown.classList.toggle('hidden');
        this.notificationsDropdown.classList.add('hidden');
      });
    }

    document.addEventListener('click', (e) => {
      if (this.notificationsDropdown && !this.notificationsDropdown.contains(e.target) && e.target !== this.notificationsBtn) {
        this.notificationsDropdown.classList.add('hidden');
      }
      if (this.profileDropdown && !this.profileDropdown.contains(e.target) && e.target !== this.userProfileBtn) {
        this.profileDropdown.classList.add('hidden');
      }
      if (e.target === this.uploadModal) {
        this.uploadModal.classList.replace('flex', 'hidden');
      }
      if (e.target === this.shareModal) {
        this.shareModal.classList.replace('flex', 'hidden');
      }
    });

    if (this.clearCollectionBtn) {
      this.clearCollectionBtn.addEventListener('click', () => this.handleClearCollection());
    }
  }

  // ================= 3. THEME (MAVZU) =================
  initTheme() {
    const savedTheme = localStorage.getItem('yt_theme') || 'dark';
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      if (this.themeIcon) this.themeIcon.classList.replace('fa-sun', 'fa-moon');
      if (this.themeToggleBtn) this.themeToggleBtn.classList.replace('text-yellow-400', 'text-gray-700');
    } else {
      document.documentElement.classList.add('dark');
      if (this.themeIcon) this.themeIcon.classList.replace('fa-moon', 'fa-sun');
      if (this.themeToggleBtn) this.themeToggleBtn.classList.replace('text-gray-700', 'text-yellow-400');
    }
  }

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('yt_theme', isDark ? 'dark' : 'light');
    if (isDark) {
      this.themeIcon.classList.replace('fa-moon', 'fa-sun');
      this.themeToggleBtn.classList.replace('text-gray-700', 'text-yellow-400');
      this.showToast("Qorong'u rejim yoqildi 🌙", "fa-moon");
    } else {
      this.themeIcon.classList.replace('fa-sun', 'fa-moon');
      this.themeToggleBtn.classList.replace('text-yellow-400', 'text-gray-700');
      this.showToast("Yorug' rejim yoqildi ☀️", "fa-sun");
    }
    this.updateCategoryPills();
  }

  // ================= 4. BO'LIMLAR (VIEWS) =================
  switchView(viewName) {
    this.homeView.classList.add('hidden');
    this.watchView.classList.add('hidden');
    this.shortsView.classList.add('hidden');
    this.collectionListView.classList.add('hidden');

    if (viewName !== 'watch') {
      this.playerContainer.innerHTML = '';
    }
    if (viewName !== 'shorts') {
      this.shortsVideoPlayer.innerHTML = '';
    }

    if (viewName === 'home') {
      this.homeView.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'watch') {
      this.watchView.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'shorts') {
      this.shortsView.classList.remove('hidden');
      this.renderShort(this.currentShortIndex);
    } else if (viewName === 'collection') {
      this.collectionListView.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.querySelectorAll('[data-nav]').forEach(item => {
      if (item.dataset.nav === viewName) {
        item.classList.add('active', 'bg-[#272727]');
      } else {
        item.classList.remove('active', 'bg-[#272727]');
      }
    });
  }

  handleNavigation(view) {
    if (view === 'home') {
      this.switchView('home');
      this.currentCategory = 'all';
      this.updateCategoryPills();
      this.renderVideoGrid();
    } else if (view === 'shorts') {
      this.switchView('shorts');
    } else if (view === 'history') {
      this.renderCollection('history');
    } else if (view === 'liked') {
      this.renderCollection('liked');
    } else if (view === 'watch-later') {
      this.renderCollection('watch-later');
    } else if (view === 'subscriptions') {
      this.renderCollection('subscriptions');
    } else if (view === 'my-videos') {
      this.renderCollection('my-videos');
    }
  }

  // ================= 5. VIDEO GRID & QIDIRUV =================
  renderVideoGrid() {
    let filtered = [...this.videos];

    if (this.currentCategory !== 'all') {
      filtered = filtered.filter(v => v.category === this.currentCategory);
    }

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(v => 
        v.title.toLowerCase().includes(q) || 
        v.channel.toLowerCase().includes(q) ||
        (v.tags && v.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    if (filtered.length === 0) {
      this.videoGrid.innerHTML = '';
      this.noResults.classList.remove('hidden');
      return;
    }

    this.noResults.classList.add('hidden');
    this.videoGrid.innerHTML = filtered.map((video, idx) => this.createVideoCardHTML(video, idx)).join('');

    this.videoGrid.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-more-btn')) {
          e.stopPropagation();
          this.handleQuickSave(card.dataset.videoId);
          return;
        }
        this.openWatchVideo(card.dataset.videoId);
      });
    });
  }

  createVideoCardHTML(video, index) {
    return `
      <div class="video-card cursor-pointer group flex flex-col relative" data-video-id="${video.id}">
        <!-- Thumbnail -->
        <div class="relative aspect-video w-full rounded-xl overflow-hidden bg-[#202020] mb-3">
          <img 
            src="${video.thumbnail}" 
            alt="${video.title}" 
            onerror="this.onerror=null; this.src='https://picsum.photos/640/360?random=${index + 1}';"
            class="video-card-thumb w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="play-overlay absolute inset-0 bg-black/40 flex items-center justify-center">
            <div class="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition">
              <i class="fa-solid fa-play text-lg ml-0.5"></i>
            </div>
          </div>
          <span class="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm z-10">
            ${video.duration}
          </span>
        </div>

        <!-- Video Info -->
        <div class="flex gap-3 px-1">
          <img 
            src="${video.channelAvatar}" 
            alt="${video.channel}" 
            class="w-9 h-9 rounded-full object-cover shrink-0 mt-0.5"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100';"
          />
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-sm line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors" title="${video.title}">
              ${video.title}
            </h3>
            <div class="flex items-center gap-1 mt-1 text-xs text-gray-400">
              <span class="hover:text-white transition-colors truncate">${video.channel}</span>
              <i class="fa-solid fa-circle-check text-[10px] text-gray-400 shrink-0"></i>
            </div>
            <div class="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
              <span>${video.views} ko'rishlar</span>
              <span>•</span>
              <span>${video.timestamp}</span>
            </div>
          </div>
          <button class="card-more-btn opacity-0 group-hover:opacity-100 p-1.5 hover:bg-[#333] rounded-full text-gray-400 hover:text-white self-start transition" title="Keyinroq ko'rish">
            <i class="fa-solid fa-ellipsis-vertical text-sm"></i>
          </button>
        </div>
      </div>
    `;
  }

  updateCategoryPills() {
    this.categoryPills.forEach(pill => {
      const isDark = document.documentElement.classList.contains('dark');
      if (pill.dataset.category === this.currentCategory) {
        pill.className = `category-pill active px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition shrink-0 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`;
      } else {
        pill.className = `category-pill px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition shrink-0 ${isDark ? 'bg-[#272727] text-white hover:bg-[#383838]' : 'bg-[#f2f2f2] text-black hover:bg-[#e5e5e5]'}`;
      }
    });
  }

  performSearch(query) {
    this.searchQuery = query;
    this.switchView('home');
    this.renderVideoGrid();
  }

  handleVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'uz-UZ';
      this.showToast("Ovoz bilan qidiring: Gapiring... 🎙️", "fa-microphone");
      this.voiceSearchBtn.classList.add('bg-red-600', 'animate-pulse');

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.searchInput.value = transcript;
        this.clearSearchBtn.classList.remove('hidden');
        this.voiceSearchBtn.classList.remove('bg-red-600', 'animate-pulse');
        this.performSearch(transcript);
        this.showToast(`Qidirilmoqda: "${transcript}"`, "fa-magnifying-glass");
      };

      recognition.onerror = () => {
        this.voiceSearchBtn.classList.remove('bg-red-600', 'animate-pulse');
        this.showToast("Ovoz aniqlanmadi, qaytadan urinib ko'ring", "fa-triangle-exclamation");
      };

      recognition.start();
    } else {
      const simulated = prompt("Ovozli qidiruv (qidiruv so'zini kiriting):", "Dasturlash");
      if (simulated) {
        this.searchInput.value = simulated;
        this.clearSearchBtn.classList.remove('hidden');
        this.performSearch(simulated);
      }
    }
  }

  // ================= 6. WATCH PAGE (VIDEO PLAYER) =================
  openWatchVideo(videoId) {
    const video = this.videos.find(v => v.id === videoId);
    if (!video) return;

    this.currentVideo = video;
    this.switchView('watch');
    this.addToHistory(video);

    this.renderPlayerContent();

    this.watchTitle.textContent = video.title;
    this.watchChannelName.textContent = video.channel;
    this.watchChannelAvatar.src = video.channelAvatar;
    this.watchChannelSubs.textContent = `${video.subs} obunachi`;
    this.watchViewsCount.textContent = `${video.views} ko'rishlar`;
    this.watchUploadDate.textContent = video.timestamp;
    this.watchDescriptionText.textContent = video.description || "Video haqida ma'lumot mavjud emas.";
    
    if (video.tags && video.tags.length > 0) {
      this.watchTags.innerHTML = video.tags.map(t => `<span>${t}</span>`).join(' ');
    } else {
      this.watchTags.innerHTML = '';
    }

    this.updateWatchStates();
    this.renderComments(video.id);
    this.renderRelatedVideos(video.id);
  }

  setPlayerMode(mode) {
    this.playerMode = mode;
    if (this.playerModeYt && this.playerModeHtml5) {
      if (mode === 'youtube') {
        this.playerModeYt.className = "px-2.5 py-1 rounded-full font-medium transition bg-red-600 text-white text-[11px]";
        this.playerModeHtml5.className = "px-2.5 py-1 rounded-full font-medium transition bg-[#282828] text-gray-300 hover:text-white text-[11px]";
        this.showToast("🔴 YouTube pleyeri faollashdi", "fa-play");
      } else {
        this.playerModeYt.className = "px-2.5 py-1 rounded-full font-medium transition bg-[#282828] text-gray-300 hover:text-white text-[11px]";
        this.playerModeHtml5.className = "px-2.5 py-1 rounded-full font-medium transition bg-red-600 text-white text-[11px]";
        this.showToast("🎬 Mahalliy Video (MP4) pleyeri", "fa-film");
      }
    }
    this.renderPlayerContent();
  }

  renderPlayerContent() {
    if (!this.currentVideo) return;

    if (this.playerMode === 'youtube' && this.currentVideo.ytId) {
      const ytId = this.currentVideo.ytId || this.currentVideo.id;
      this.playerContainer.innerHTML = `
        <iframe 
          class="w-full h-full rounded-2xl" 
          src="https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1" 
          title="${this.currentVideo.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      `;
    } else {
      const videoSrc = this.currentVideo.mp4Url || "https://vjs.zencdn.net/v/oceans.mp4";
      this.playerContainer.innerHTML = `
        <video 
          controls 
          autoplay 
          playsinline 
          class="w-full h-full rounded-2xl bg-black object-contain"
          src="${videoSrc}">
          Sizning brauzeringiz ushbu videoni qo'llab-quvvatlamaydi.
        </video>
      `;

      const vidEl = this.playerContainer.querySelector('video');
      if (vidEl) {
        vidEl.onerror = () => {
          this.setPlayerMode('youtube');
        };
      }
    }
  }

  handleQuickPlay() {
    const input = this.quickYtUrlInput.value.trim();
    if (!input) {
      this.showToast("Iltimos, video havolasi yoki ID kiriting!", "fa-circle-exclamation");
      return;
    }

    let ytId = input;
    if (input.includes('youtube.com/watch?v=')) {
      ytId = input.split('watch?v=')[1].split('&')[0];
    } else if (input.includes('youtu.be/')) {
      ytId = input.split('youtu.be/')[1].split('?')[0];
    } else if (input.includes('youtube.com/embed/')) {
      ytId = input.split('embed/')[1].split('?')[0];
    }

    const customVideo = {
      id: "quick_" + Date.now(),
      ytId: ytId,
      mp4Url: "https://vjs.zencdn.net/v/oceans.mp4",
      title: "YouTube Video: " + ytId,
      channel: "YouTube Foydalanuvchisi",
      channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",
      subs: "Kanal",
      views: "Ko'rishlar",
      rawViews: 1000,
      timestamp: "Hozirgina",
      duration: "Video",
      category: "dasturlash",
      thumbnail: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`,
      likes: "1K",
      description: "YouTube havolasi orqali ochilgan video",
      tags: ["#youtube", "#video"]
    };

    this.currentVideo = customVideo;
    this.playerMode = 'youtube';
    this.quickYtUrlInput.value = '';
    this.openWatchVideo(customVideo.id);
    this.showToast("Video muvaffaqiyatli ochildi! ▶", "fa-play");
  }

  updateWatchStates() {
    if (!this.currentVideo) return;

    const isLiked = this.likedVideos.some(v => v.id === this.currentVideo.id);
    if (isLiked) {
      this.likeIcon.classList.replace('fa-regular', 'fa-solid');
      this.likeBtn.classList.add('text-blue-400');
    } else {
      this.likeIcon.classList.replace('fa-solid', 'fa-regular');
      this.likeBtn.classList.remove('text-blue-400');
    }
    this.likeCount.textContent = this.currentVideo.likes || "12K";

    this.dislikeIcon.classList.replace('fa-solid', 'fa-regular');
    this.dislikeBtn.classList.remove('text-blue-400');

    const isSubscribed = this.subscriptions.includes(this.currentVideo.channel);
    if (isSubscribed) {
      this.subscribeBtn.textContent = "Obuna bo'lindi";
      this.subscribeBtn.className = "ml-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 bg-[#272727] text-white hover:bg-[#383838]";
    } else {
      this.subscribeBtn.textContent = "Obuna bo'lish";
      this.subscribeBtn.className = "ml-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 bg-white text-black hover:bg-gray-200 active:scale-95";
    }

    const isSaved = this.watchLater.some(v => v.id === this.currentVideo.id);
    if (isSaved) {
      this.saveIcon.classList.replace('fa-regular', 'fa-solid');
      this.saveBtn.classList.add('text-red-500');
    } else {
      this.saveIcon.classList.replace('fa-solid', 'fa-regular');
      this.saveBtn.classList.remove('text-red-500');
    }
  }

  toggleSubscribe() {
    if (!this.currentVideo) return;
    const channel = this.currentVideo.channel;
    const index = this.subscriptions.indexOf(channel);

    if (index > -1) {
      this.subscriptions.splice(index, 1);
      this.showToast(`${channel} kanalidan obuna bekor qilindi`, "fa-bell-slash");
    } else {
      this.subscriptions.push(channel);
      this.showToast(`${channel} kanaliga obuna bo'lindi! 🔔`, "fa-bell");
    }

    this.saveToStorage('yt_subs', this.subscriptions);
    this.updateWatchStates();
    this.renderSubscriptionsSidebar();
  }

  toggleLike() {
    if (!this.currentVideo) return;
    const index = this.likedVideos.findIndex(v => v.id === this.currentVideo.id);

    if (index > -1) {
      this.likedVideos.splice(index, 1);
      this.showToast("Yoqtirish bekor qilindi", "fa-thumbs-down");
    } else {
      this.likedVideos.unshift(this.currentVideo);
      this.showToast("Video yoqqanlarga qo'shildi! 👍", "fa-thumbs-up");
    }

    this.saveToStorage('yt_liked', this.likedVideos);
    this.updateWatchStates();
  }

  toggleDislike() {
    if (!this.currentVideo) return;
    const isSolid = this.dislikeIcon.classList.contains('fa-solid');
    if (isSolid) {
      this.dislikeIcon.classList.replace('fa-solid', 'fa-regular');
      this.dislikeBtn.classList.remove('text-blue-400');
    } else {
      this.dislikeIcon.classList.replace('fa-regular', 'fa-solid');
      this.dislikeBtn.classList.add('text-blue-400');
      const index = this.likedVideos.findIndex(v => v.id === this.currentVideo.id);
      if (index > -1) {
        this.likedVideos.splice(index, 1);
        this.saveToStorage('yt_liked', this.likedVideos);
        this.updateWatchStates();
      }
      this.showToast("Fikringiz inobatga olindi", "fa-thumbs-down");
    }
  }

  toggleSaveWatchLater() {
    if (!this.currentVideo) return;
    const index = this.watchLater.findIndex(v => v.id === this.currentVideo.id);

    if (index > -1) {
      this.watchLater.splice(index, 1);
      this.showToast("Keyinroq ko'rishdan olib tashlandi", "fa-bookmark");
    } else {
      this.watchLater.unshift(this.currentVideo);
      this.showToast("Keyinroq ko'rishga saqlandi! 📌", "fa-bookmark");
    }

    this.saveToStorage('yt_watch_later', this.watchLater);
    this.updateWatchStates();
  }

  handleQuickSave(videoId) {
    const video = this.videos.find(v => v.id === videoId);
    if (!video) return;
    const index = this.watchLater.findIndex(v => v.id === videoId);
    if (index > -1) {
      this.watchLater.splice(index, 1);
      this.showToast("Videolar ro'yxatidan o'chirildi", "fa-trash");
    } else {
      this.watchLater.unshift(video);
      this.showToast("Keyinroq ko'rishga saqlandi! 📌", "fa-bookmark");
    }
    this.saveToStorage('yt_watch_later', this.watchLater);
  }

  addToHistory(video) {
    this.history = this.history.filter(v => v.id !== video.id);
    this.history.unshift({ ...video, watchedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    this.saveToStorage('yt_history', this.history);
  }

  toggleDescription() {
    this.isDescExpanded = !this.isDescExpanded;
    if (this.isDescExpanded) {
      this.watchDescriptionText.classList.remove('line-clamp-3');
      this.toggleDescBtn.textContent = "Kamroq ko'rsatish";
    } else {
      this.watchDescriptionText.classList.add('line-clamp-3');
      this.toggleDescBtn.textContent = "Ko'proq ko'rsatish";
    }
  }

  renderRelatedVideos(currentId) {
    const related = this.videos.filter(v => v.id !== currentId);
    this.relatedVideosList.innerHTML = related.map(v => `
      <div class="flex gap-2.5 cursor-pointer group hover:bg-[#202020] p-1.5 rounded-xl transition" data-video-id="${v.id}">
        <div class="relative w-40 aspect-video rounded-lg overflow-hidden bg-[#222] shrink-0">
          <img src="${v.thumbnail}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" alt="${v.title}">
          <span class="absolute bottom-1 right-1 bg-black/80 text-[10px] text-white px-1.5 py-0.2 rounded font-medium">${v.duration}</span>
        </div>
        <div class="flex-1 min-w-0 flex flex-col justify-center">
          <h4 class="text-xs font-semibold text-white line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">${v.title}</h4>
          <span class="text-[11px] text-gray-400 mt-1 truncate">${v.channel}</span>
          <div class="text-[10px] text-gray-500">${v.views} • ${v.timestamp}</div>
        </div>
      </div>
    `).join('');

    this.relatedVideosList.querySelectorAll('[data-video-id]').forEach(item => {
      item.addEventListener('click', () => {
        this.openWatchVideo(item.dataset.videoId);
      });
    });
  }

  // ================= 7. COMMENTS (IZOHLAR) =================
  renderComments(videoId) {
    let videoComments = this.comments[videoId] || DEFAULT_COMMENTS;
    this.commentsCountDisplay.textContent = videoComments.length;

    this.commentsList.innerHTML = videoComments.map(c => `
      <div class="flex gap-3 text-xs md:text-sm group" data-comment-id="${c.id}">
        <img src="${c.avatar}" class="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5" alt="${c.author}">
        <div class="flex-1 space-y-1">
          <div class="flex items-center gap-2">
            <span class="font-bold text-white text-xs">${c.author}</span>
            <span class="text-[11px] text-gray-400">${c.time}</span>
          </div>
          <p class="text-gray-300 text-xs md:text-sm leading-relaxed">${c.text}</p>
          <div class="flex items-center gap-4 text-xs text-gray-400 pt-1">
            <button class="comment-like-btn flex items-center gap-1.5 hover:text-white transition">
              <i class="fa-regular fa-thumbs-up"></i>
              <span class="comment-likes-num">${c.likes}</span>
            </button>
            <button class="hover:text-white transition"><i class="fa-regular fa-thumbs-down"></i></button>
            <button class="font-semibold text-gray-400 hover:text-white transition">Javob berish</button>
          </div>
        </div>
      </div>
    `).join('');

    this.commentsList.querySelectorAll('.comment-like-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const numSpan = btn.querySelector('.comment-likes-num');
        const icon = btn.querySelector('i');
        let currentCount = parseInt(numSpan.textContent);
        if (icon.classList.contains('fa-regular')) {
          icon.classList.replace('fa-regular', 'fa-solid');
          btn.classList.add('text-blue-400');
          numSpan.textContent = currentCount + 1;
        } else {
          icon.classList.replace('fa-solid', 'fa-regular');
          btn.classList.remove('text-blue-400');
          numSpan.textContent = Math.max(0, currentCount - 1);
        }
      });
    });
  }

  handleAddComment() {
    const text = this.commentInput.value.trim();
    if (!text || !this.currentVideo) return;

    const newComment = {
      id: "c_" + Date.now(),
      author: "Dasturchi User",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",
      time: "Hozirgina",
      text: text,
      likes: 0
    };

    let videoComments = this.comments[this.currentVideo.id] || [...DEFAULT_COMMENTS];
    videoComments.unshift(newComment);
    this.comments[this.currentVideo.id] = videoComments;
    this.saveToStorage('yt_comments', this.comments);

    this.commentInput.value = '';
    this.submitCommentBtn.disabled = true;
    this.commentActions.classList.add('hidden');
    this.commentActions.classList.remove('flex');

    this.renderComments(this.currentVideo.id);
    this.showToast("Izohingiz muvaffaqiyatli qoldirildi! 💬", "fa-comment-dots");
  }

  // ================= 8. SHORTS REEL (KAFOLATLANGAN PLEYER) =================
  renderShort(index) {
    const short = SHORTS_DATA[index];
    if (!short) return;

    if (this.shortsCounter) {
      this.shortsCounter.textContent = `${index + 1} / ${SHORTS_DATA.length}`;
    }

    if (this.shortsMode === 'youtube' && short.ytId) {
      // YouTube Shorts Embed (100% ovoz va video bilan ishlaydi!)
      this.shortsVideoPlayer.innerHTML = `
        <iframe 
          class="w-full h-full rounded-3xl" 
          src="https://www.youtube-nocookie.com/embed/${short.ytId}?autoplay=1&loop=1&playlist=${short.ytId}&controls=1&modestbranding=1" 
          title="${short.title}"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      `;
    } else {
      // Yengil MP4 video
      const mutedAttr = this.isShortMuted ? 'muted' : '';
      this.shortsVideoPlayer.innerHTML = `
        <video 
          src="${short.videoUrl || 'https://vjs.zencdn.net/v/oceans.mp4'}" 
          autoplay 
          loop 
          ${mutedAttr}
          playsinline
          class="w-full h-full object-cover rounded-3xl cursor-pointer">
        </video>
      `;

      const video = this.shortsVideoPlayer.querySelector('video');
      if (video) {
        video.addEventListener('click', () => {
          if (video.paused) {
            video.play();
            this.showToast("Shorts davom etmoqda ▶", "fa-play");
          } else {
            video.pause();
            this.showToast("Shorts to'xtatildi ⏸", "fa-pause");
          }
        });
      }
    }

    if (this.shortsAvatar) this.shortsAvatar.src = short.channelAvatar;
    if (this.shortsChannel) this.shortsChannel.textContent = short.channel;
    if (this.shortsTitle) this.shortsTitle.textContent = short.title;
    if (this.shortsSound) this.shortsSound.textContent = short.sound;
    if (this.shortsLikeCount) this.shortsLikeCount.textContent = short.likes;
    if (this.shortsLikeIcon) this.shortsLikeIcon.classList.remove('text-red-500');
  }

  setShortsMode(mode) {
    this.shortsMode = mode;
    if (this.shortsModeYt && this.shortsModeHtml5) {
      if (mode === 'youtube') {
        this.shortsModeYt.className = "px-2.5 py-1 rounded-full font-medium transition bg-red-600 text-white text-[11px]";
        this.shortsModeHtml5.className = "px-2.5 py-1 rounded-full font-medium transition bg-[#2a2a2a] text-gray-300 hover:text-white text-[11px]";
        this.showToast("🔴 YouTube Shorts rejimi faollashdi", "fa-bolt");
      } else {
        this.shortsModeYt.className = "px-2.5 py-1 rounded-full font-medium transition bg-[#2a2a2a] text-gray-300 hover:text-white text-[11px]";
        this.shortsModeHtml5.className = "px-2.5 py-1 rounded-full font-medium transition bg-red-600 text-white text-[11px]";
        this.showToast("🎬 Mahalliy Video (MP4) rejimi", "fa-film");
      }
    }
    this.renderShort(this.currentShortIndex);
  }

  prevShort() {
    this.currentShortIndex = (this.currentShortIndex - 1 + SHORTS_DATA.length) % SHORTS_DATA.length;
    this.renderShort(this.currentShortIndex);
  }

  nextShort() {
    this.currentShortIndex = (this.currentShortIndex + 1) % SHORTS_DATA.length;
    this.renderShort(this.currentShortIndex);
  }

  toggleShortsSound() {
    this.isShortMuted = !this.isShortMuted;
    const video = this.shortsVideoPlayer.querySelector('video');
    if (video) {
      video.muted = this.isShortMuted;
    }
    if (this.shortsSoundIcon) {
      if (this.isShortMuted) {
        this.shortsSoundIcon.className = "fa-solid fa-volume-xmark text-xs text-red-400";
        this.showToast("Ovoz o'chirildi 🔇", "fa-volume-xmark");
      } else {
        this.shortsSoundIcon.className = "fa-solid fa-volume-high text-xs text-green-400";
        this.showToast("Ovoz yoqildi 🔊", "fa-volume-high");
      }
    }
  }

  handleQuickShortPlay() {
    const input = this.quickShortsUrlInput.value.trim();
    if (!input) {
      this.showToast("Iltimos, YouTube Short havolasini kiriting!", "fa-circle-exclamation");
      return;
    }

    let ytId = input;
    if (input.includes('youtube.com/shorts/')) {
      ytId = input.split('shorts/')[1].split('?')[0].split('&')[0];
    } else if (input.includes('youtube.com/watch?v=')) {
      ytId = input.split('watch?v=')[1].split('&')[0];
    } else if (input.includes('youtu.be/')) {
      ytId = input.split('youtu.be/')[1].split('?')[0];
    }

    const newShort = {
      id: "custom_short_" + Date.now(),
      ytId: ytId,
      title: "YouTube Short: " + ytId,
      channel: "@youtube_short",
      channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      likes: "10K",
      comments: "250",
      sound: "Original Audio",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
    };

    SHORTS_DATA.unshift(newShort);
    this.currentShortIndex = 0;
    this.shortsMode = 'youtube';
    this.quickShortsUrlInput.value = '';
    this.renderShort(0);
    this.showToast("Shorts muvaffaqiyatli yuklandi! ⚡", "fa-bolt");
  }

  toggleShortsLike() {
    const isLiked = this.shortsLikeIcon.classList.toggle('text-red-500');
    if (isLiked) {
      this.showToast("Shorts videosi yoqdi! ❤️", "fa-heart");
    }
  }

  // ================= 9. COLLECTIONS =================
  renderCollection(type) {
    this.switchView('collection');
    let items = [];

    if (type === 'history') {
      this.collectionTitle.textContent = "Ko'rishlar tarixi";
      this.collectionSubtitle.textContent = "Siz oxirgi tomosha qilgan videolar ro'yxati";
      this.collectionIcon.innerHTML = `<i class="fa-solid fa-clock-rotate-left"></i>`;
      this.clearCollectionBtn.classList.remove('hidden');
      this.clearCollectionBtn.textContent = "Tarixni tozalash";
      this.clearCollectionBtn.dataset.type = 'history';
      items = this.history;
    } else if (type === 'liked') {
      this.collectionTitle.textContent = "Yoqqan videolar";
      this.collectionSubtitle.textContent = "Siz ijobiy baholagan eng sara videolar";
      this.collectionIcon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
      this.clearCollectionBtn.classList.remove('hidden');
      this.clearCollectionBtn.textContent = "Ro'yxatni tozalash";
      this.clearCollectionBtn.dataset.type = 'liked';
      items = this.likedVideos;
    } else if (type === 'watch-later') {
      this.collectionTitle.textContent = "Keyinroq ko'rish";
      this.collectionSubtitle.textContent = "Saqlab qo'yilgan videolar";
      this.collectionIcon.innerHTML = `<i class="fa-solid fa-bookmark"></i>`;
      this.clearCollectionBtn.classList.remove('hidden');
      this.clearCollectionBtn.textContent = "Ro'yxatni tozalash";
      this.clearCollectionBtn.dataset.type = 'watch-later';
      items = this.watchLater;
    } else if (type === 'subscriptions') {
      this.collectionTitle.textContent = "Obunalar lentasi";
      this.collectionSubtitle.textContent = "Obuna bo'lgan kanallaringizning yangi videolari";
      this.collectionIcon.innerHTML = `<i class="fa-solid fa-layer-group"></i>`;
      this.clearCollectionBtn.classList.add('hidden');
      items = this.videos.filter(v => this.subscriptions.includes(v.channel));
    } else if (type === 'my-videos') {
      this.collectionTitle.textContent = "Sizning videolaringiz";
      this.collectionSubtitle.textContent = "O'zingiz yuklagan barcha videolar";
      this.collectionIcon.innerHTML = `<i class="fa-solid fa-film"></i>`;
      this.clearCollectionBtn.classList.add('hidden');
      items = this.videos.filter(v => v.isUserUploaded);
    }

    if (items.length === 0) {
      this.collectionGrid.innerHTML = '';
      this.collectionEmpty.classList.remove('hidden');
      return;
    }

    this.collectionEmpty.classList.add('hidden');
    this.collectionGrid.innerHTML = items.map(video => `
      <div class="flex flex-col sm:flex-row gap-4 p-2.5 rounded-xl hover:bg-[#222222] transition cursor-pointer group" data-video-id="${video.id}">
        <div class="relative w-full sm:w-64 aspect-video rounded-xl overflow-hidden bg-[#222] shrink-0">
          <img src="${video.thumbnail}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="${video.title}">
          <span class="absolute bottom-2 right-2 bg-black/80 text-[11px] font-semibold text-white px-2 py-0.5 rounded">${video.duration}</span>
        </div>
        <div class="flex-1 min-w-0 space-y-1">
          <h3 class="font-bold text-sm sm:text-base text-white group-hover:text-blue-400 transition-colors line-clamp-2">${video.title}</h3>
          <div class="flex items-center gap-2 text-xs text-gray-400">
            <span>${video.channel}</span>
            <span>•</span>
            <span>${video.views} ko'rishlar</span>
          </div>
          <p class="text-xs text-gray-400 line-clamp-2 pt-1 leading-relaxed">${video.description || ''}</p>
        </div>
      </div>
    `).join('');

    this.collectionGrid.querySelectorAll('[data-video-id]').forEach(card => {
      card.addEventListener('click', () => {
        this.openWatchVideo(card.dataset.videoId);
      });
    });
  }

  handleClearCollection() {
    const type = this.clearCollectionBtn.dataset.type;
    if (type === 'history') {
      this.history = [];
      this.saveToStorage('yt_history', []);
      this.showToast("Ko'rishlar tarixi tozalandi 🗑️", "fa-trash");
      this.renderCollection('history');
    } else if (type === 'liked') {
      this.likedVideos = [];
      this.saveToStorage('yt_liked', []);
      this.showToast("Yoqqan videolar tozalandi 🗑️", "fa-trash");
      this.renderCollection('liked');
    } else if (type === 'watch-later') {
      this.watchLater = [];
      this.saveToStorage('yt_watch_later', []);
      this.showToast("Keyinroq ko'rish ro'yxati tozalandi 🗑️", "fa-trash");
      this.renderCollection('watch-later');
    }
  }

  // ================= 10. VIDEO YUKLASH =================
  handleUploadVideo(e) {
    e.preventDefault();

    const title = document.getElementById('newVideoTitle').value.trim();
    const channel = document.getElementById('newChannelName').value.trim();
    const category = document.getElementById('newCategory').value;
    let videoUrl = document.getElementById('newVideoUrl').value.trim();
    let thumbnail = document.getElementById('newThumbnailUrl').value.trim();
    const desc = document.getElementById('newVideoDesc').value.trim();

    let ytId = videoUrl;
    let mp4Url = "https://vjs.zencdn.net/v/oceans.mp4";

    if (videoUrl.includes('youtube.com/watch?v=')) {
      ytId = videoUrl.split('watch?v=')[1].split('&')[0];
    } else if (videoUrl.includes('youtu.be/')) {
      ytId = videoUrl.split('youtu.be/')[1].split('?')[0];
    } else if (videoUrl.includes('youtube.com/embed/')) {
      ytId = videoUrl.split('embed/')[1].split('?')[0];
    } else if (videoUrl.endsWith('.mp4') || videoUrl.includes('.mp4')) {
      mp4Url = videoUrl;
      ytId = "aqz-KE-bpKQ";
    }

    if (!thumbnail) {
      thumbnail = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
    }

    const newVideo = {
      id: "v_" + Date.now(),
      ytId: ytId,
      mp4Url: mp4Url,
      title: title,
      channel: channel,
      channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",
      subs: "1 obunachi",
      views: "1 ko'rish",
      rawViews: 1,
      timestamp: "Hozirgina",
      duration: "10:00",
      category: category,
      thumbnail: thumbnail,
      likes: "0",
      description: desc || "Yangi yuklangan video",
      tags: ["#yangi", "#video"],
      isUserUploaded: true
    };

    this.videos.unshift(newVideo);
    this.saveToStorage('yt_videos', this.videos);

    this.uploadVideoForm.reset();
    this.uploadModal.classList.replace('flex', 'hidden');

    this.showToast("Yangi video muvaffaqiyatli yuklandi! 🚀", "fa-circle-check");
    this.switchView('home');
    this.currentCategory = 'all';
    this.updateCategoryPills();
    this.renderVideoGrid();
  }

  // ================= 11. ULASHISH =================
  openShareModal(customUrl) {
    const url = customUrl || (this.currentVideo ? `https://youtube.com/watch?v=${this.currentVideo.ytId || this.currentVideo.id}` : window.location.href);
    this.shareLinkInput.value = url;
    this.shareModal.classList.replace('hidden', 'flex');
  }

  copyShareLink() {
    navigator.clipboard.writeText(this.shareLinkInput.value).then(() => {
      this.copyShareLinkBtn.textContent = "Nusxalandi! ✓";
      this.copyShareLinkBtn.classList.replace('bg-blue-600', 'bg-green-600');
      this.showToast("Havola nusxalandi! 📋", "fa-clipboard-check");
      setTimeout(() => {
        this.copyShareLinkBtn.textContent = "Nusxalash";
        this.copyShareLinkBtn.classList.replace('bg-green-600', 'bg-blue-600');
      }, 2000);
    }).catch(() => {
      this.shareLinkInput.select();
      document.execCommand('copy');
      this.showToast("Havola nusxalandi!", "fa-check");
    });
  }

  // ================= 12. SIDEBAR OBUNALAR =================
  renderSubscriptionsSidebar() {
    const list = document.getElementById('subscriptionsList');
    if (!list) return;

    list.innerHTML = SUBSCRIPTIONS.map(sub => `
      <div class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#272727] cursor-pointer transition text-xs group" data-channel="${sub.name}">
        <div class="flex items-center gap-3">
          <img src="${sub.avatar}" class="w-6 h-6 rounded-full object-cover" alt="${sub.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100';">
          <span class="font-medium text-gray-200 group-hover:text-white truncate max-w-[130px]">${sub.name}</span>
        </div>
        ${sub.isLive ? '<span class="w-2 h-2 rounded-full bg-red-600 animate-pulse" title="Jonli efir"></span>' : ''}
      </div>
    `).join('');

    list.querySelectorAll('[data-channel]').forEach(item => {
      item.addEventListener('click', () => {
        const channelName = item.dataset.channel;
        this.performSearch(channelName);
      });
    });
  }

  // ================= 13. TOAST =================
  showToast(message, iconClass = "fa-circle-check") {
    if (!this.toast) return;
    this.toastMessage.textContent = message;
    this.toastIcon.className = `fa-solid ${iconClass} text-green-400 text-base`;
    this.toast.classList.remove('translate-y-20', 'opacity-0');
    this.toast.classList.add('translate-y-0', 'opacity-100');

    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toast.classList.remove('translate-y-0', 'opacity-100');
      this.toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
  }
}

// ================= ISHGA TUSHIRISH =================
function startApp() {
  if (!window.youtubeApp) {
    try {
      window.youtubeApp = new YouTubeApp();
      console.log("YouTube App muvaffaqiyatli ishga tushdi!");
    } catch (err) {
      console.error("YouTube App ishga tushirishda xatolik:", err);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
window.addEventListener('load', startApp);
