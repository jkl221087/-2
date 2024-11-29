// 翻譯對象
const translations = {
    zh: {
        currentLanguage: "中文",
        pageTitle: '台灣夜市搜尋地圖',
        foodCommunity: '美食社群',
        title: '台灣夜市搜尋地圖',
        startButton: '開始使用',
        introduction: '介紹',
        shortDescription: '這是一個方便好用的夜市地圖',
        longDescription: '歡迎來到「台灣夜市互動地圖」，這是一個結合地圖導覽與夜市文化的互動網站！透過我們的網站，您可以輕鬆探索台灣各地的特色夜市，無論是品嚐在地小吃、尋找遊戲攤位，還是體驗熱鬧的市集氛圍，都能一目了然。',
        featuresTitle: '功能介紹',
        feature1Title: '互動式地圖',
        feature1Desc: '透過台灣地圖互動介面，只要滑鼠移到各個縣市上方，即可快速查看該地區的夜市資訊，包含營業時間、特色美食與人潮狀況。',
        feature2Title: '智能搜尋',
        feature2Desc: '提供強大的搜尋功能，可以依照夜市名稱、特色小吃或商品類型進行搜尋，快速找到您想去的夜市。支援即時搜尋建議與關鍵字提示。',
        feature3Title: '定位服務',
        feature3Desc: '使用定位功能自動找出離您最近的夜市，並顯示詳細距離資訊。支援一鍵導航功能，讓您輕鬆找到前往夜市的路線。',
        feature4Title: '智慧篩選',
        feature4Desc: '提供多種篩選條件，包括營業狀態、美食類型、商品種類等，讓您可以根據個人喜好快速找到合適的夜市。支援多重條件組合篩選。',
        feature5Title: '即時資訊',
        feature5Desc: '提供夜市即時營業狀態、擁擠程度等資訊，並顯示詳細的營業時間、評分與特色介紹，幫助您更好地規劃行程。',
        locating: '定位中...',
        loading: '載入中...',
        humidity: '濕度',
        windSpeed: '風速',
        weatherIcon: '天氣圖標',
        socialTitle: "夜市動態分享社群",
        home: "首頁",
        socialShare: "社群分享",
        postCreate: "發布貼文",
        anonymousNickname: "您的匿名暱稱",
        shareExperience: "分享您的夜市美食體驗...",
        uploadPhoto: "上傳照片",
        markLocation: "標記夜市",
        publish: "發布",
        like: "讚",
        comment: "留言",
        share: "分享",
        delete: "刪除",
        writeComment: "寫下您的留言...",
        send: "發送",
        confirmDelete: "確定要刪除這則貼文嗎？",
        pleaseEnterNickname: "請輸入暱稱！",
        pleaseEnterContent: "請輸入貼文內容！",
        galleryTitle: '夜市風景',
        nightMarketFood: '夜市美食',
        nightMarketVendors: '夜市攤販',
        nightMarketGames: '夜市遊戲',
        nightMarketAtmosphere: '夜市氛圍',
        loadingPosts: '載入貼文中...',
        loadError: '載入失敗，請稍後再試',
        retry: '重試',
        anonymousAvatar: '匿名頭像',
        previewImage: '預覽圖片',
        removeImage: '移除圖片',
        userAvatar: '用戶頭像',
        foodExpert: '美食達人',
        nightMarketLocation: '饒河街夜市',
        foodDescription: '今天在饒河街發現超讚的蚵仔煎！老闆的醬料配方特別，完全不一樣的美味～推薦大家來試試！',
        foodPhoto: '美食照片',
        likeAction: '讚',
        commentAction: '留言',
        shareAction: '分享',
        likeAriaLabel: '按讚',
        commentAriaLabel: '留言',
        shareAriaLabel: '分享',
        chooseFile: '選擇檔案',
        likeCount: '1',
        commentCount: '0',
        shareCount: '分享',
        languageDisplay: '中文',
        languageToggleLabel: '切換語言'
    },
    en: {
        currentLanguage: "English",
        pageTitle: 'Taiwan Night Market Map',
        foodCommunity: 'Food Community',
        title: 'Taiwan Night Market Map',
        startButton: 'Get Started',
        introduction: 'Introduction',
        shortDescription: 'A convenient night market map',
        longDescription: 'Welcome to "Taiwan Night Market Interactive Map", an interactive website combining map navigation and night market culture! Through our website, you can easily explore Taiwan\'s unique night markets, whether you\'re looking to taste local snacks, find game stalls, or experience the bustling market atmosphere.',
        featuresTitle: 'Features',
        feature1Title: 'Interactive Map',
        feature1Desc: 'Through the Taiwan map interface, simply hover over each city to quickly view night market information, including operating hours, special foods, and crowd conditions.',
        feature2Title: 'Smart Search',
        feature2Desc: 'Powerful search functionality allows you to search by night market name, special snacks, or product type to quickly find the night market you want to visit. Supports real-time search suggestions and keyword hints.',
        feature3Title: 'Location Services',
        feature3Desc: 'Automatically find the nearest night markets using location services, with detailed distance information. Supports one-click navigation to help you easily find your way to the night market.',
        feature4Title: 'Smart Filtering',
        feature4Desc: 'Provides multiple filtering conditions, including operating status, food types, and product categories, allowing you to quickly find suitable night markets based on your preferences. Supports multiple condition combination filtering.',
        feature5Title: 'Real-time Information',
        feature5Desc: 'Provides real-time information about night market operating status, crowding levels, and displays detailed operating hours, ratings, and feature introductions to help you better plan your trip.',
        locating: 'Locating...',
        loading: 'Loading...',
        humidity: 'Humidity',
        windSpeed: 'Wind Speed',
        weatherIcon: 'Weather Icon',
        socialTitle: "Night Market Social Community",
        home: "Home",
        socialShare: "Social Share",
        postCreate: "Create Post",
        anonymousNickname: "Your Anonymous Nickname",
        shareExperience: "Share your night market food experience...",
        uploadPhoto: "Upload Photo",
        markLocation: "Mark Location",
        publish: "Publish",
        like: "Like",
        comment: "Comment",
        share: "Share",
        delete: "Delete",
        writeComment: "Write your comment...",
        send: "Send",
        confirmDelete: "Are you sure you want to delete this post?",
        pleaseEnterNickname: "Please enter a nickname!",
        pleaseEnterContent: "Please enter post content!",
        galleryTitle: 'Night Market Scenes',
        nightMarketFood: 'Night Market Food',
        nightMarketVendors: 'Night Market Vendors',
        nightMarketGames: 'Night Market Games',
        nightMarketAtmosphere: 'Night Market Atmosphere',
        loadingPosts: 'Loading posts...',
        loadError: 'Failed to load, please try again later',
        retry: 'Retry',
        anonymousAvatar: 'Anonymous Avatar',
        previewImage: 'Preview Image',
        removeImage: 'Remove Image',
        userAvatar: 'User Avatar',
        foodExpert: 'Food Expert',
        nightMarketLocation: 'Raohe Street Night Market',
        foodDescription: 'Found an amazing oyster omelette at Raohe Street today! The boss has a special sauce recipe, a completely different taste~ Recommend everyone to try it!',
        foodPhoto: 'Food Photo',
        likeAction: 'Like',
        commentAction: 'Comment',
        shareAction: 'Share',
        likeAriaLabel: 'Like',
        commentAriaLabel: 'Comment',
        shareAriaLabel: 'Share',
        chooseFile: 'Choose File',
        likeCount: '1',
        commentCount: '0',
        shareCount: 'Share',
        languageDisplay: 'English',
        languageToggleLabel: 'Switch Language'
    }
};

// 從 localStorage 獲取當前語言，如果沒有則默認為中文
let currentLang = localStorage.getItem('language') || 'zh';

// 確保初始語言是中文
if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'zh');
}

// 切換語言函數
function toggleLanguage() {
    console.log('Toggling language from:', currentLang);
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    console.log('Language toggled to:', currentLang);
    
    // 保存語言設置到 localStorage
    localStorage.setItem('language', currentLang);
    
    // 更新當前語言顯示和語言切換按鈕的顯示文字
    const currentLanguageSpan = document.getElementById('currentLanguage');
    if (currentLanguageSpan) {
        currentLanguageSpan.textContent = translations[currentLang].languageDisplay;
    }
    
    // 更新頁面內容
    updateContent();
    
    // 更新按鈕的 aria-label
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.setAttribute('aria-label', translations[currentLang].languageToggleLabel);
    }
}

// 更新頁面內容
function updateContent() {
    console.log('Updating content with language:', currentLang);
    
    // 更新語言按鈕文本
    const langButton = document.getElementById('currentLanguage');
    if (langButton) {
        langButton.textContent = translations[currentLang].currentLanguage;
    }
    
    // 更新所有帶有 data-i18n 屬性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        console.log('Updating element:', element, 'with key:', key);
        
        if (translations[currentLang][key]) {
            // 更新文本內容
            element.textContent = translations[currentLang][key];
            
            // 如果是按鈕且有 aria-label，同時更新 aria-label
            if (element.tagName.toLowerCase() === 'button') {
                element.setAttribute('aria-label', translations[currentLang][key]);
            }
        } else {
            console.warn('Missing translation for key:', key, 'in language:', currentLang);
        }
    });

    // 更新所有帶有 data-i18n-placeholder 屬性的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });

    // 更新所有帶有 data-i18n-alt 屬性的元素
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[currentLang][key]) {
            element.alt = translations[currentLang][key];
        }
    });
}

// 初始化函數
function initI18n() {
    // 移除舊的事件監聽器
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        // 移除所有現有的事件監聽器
        languageToggle.replaceWith(languageToggle.cloneNode(true));
        
        // 重新獲取元素並添加事件監聽器
        const newLanguageToggle = document.getElementById('languageToggle');
        newLanguageToggle.addEventListener('click', () => {
            console.log('Language toggle clicked, current:', currentLang);
            toggleLanguage();
            console.log('Language switched to:', currentLang);
        });
    }

    // 更新當前語言顯示
    const currentLanguageSpan = document.getElementById('currentLanguage');
    if (currentLanguageSpan) {
        currentLanguageSpan.textContent = translations[currentLang].currentLanguage;
    }

    // 更新頁面內容
    updateContent();
}

// 確保所有函數都被正確導出
window.i18n = {
    toggleLanguage,
    updateContent,
    initI18n,
    currentLang,  // 也導出當前語言
    translations  // 導出翻譯對象
};

// 初始化時立即更新內容
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded, initializing i18n...');
    window.i18n.initI18n();
});