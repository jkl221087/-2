document.addEventListener('DOMContentLoaded', () => {
    // 檢查是否在正確的頁面
    const heroContent = document.querySelector('.hero-content');
    const btn = document.getElementById('btn');
    const backToTopButton = document.getElementById('backToTop');
    const features = document.querySelectorAll('.feature');

    // 添加語言切換按鈕事件監聽器
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            window.i18n.toggleLanguage();
        });
    }

    // 初始化 i18n
    if (window.i18n) {
        window.i18n.initI18n();
    }

    // Hero 區域動畫（僅在 home.html 中執行）
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }

    // 按鈕事件（僅在 home.html 中執行）
    if (btn) {
        btn.addEventListener('click', () => {
            heroContent.classList.add('bounce');
            setTimeout(() => {
                heroContent.classList.remove('bounce');
                window.location.href = 'index.html';
            }, 2000);
        });
    }

    // 回到頂部按鈕
    if (backToTopButton) {
        window.onscroll = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        };

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 特效動畫（僅在 home.html 中執行）
    if (features.length > 0) {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        features.forEach(feature => {
            feature.classList.add('slide-in');
            observer.observe(feature);
        });

        // 為標題添加動畫效果
        const titles = document.querySelectorAll('.features-title, .about1, .about2');
        titles.forEach(title => {
            title.classList.add('slide-in');
            observer.observe(title);
        });

        // 為介紹文字添加動畫效果
        const aboutText = document.querySelector('.about3');
        if (aboutText) {
            aboutText.classList.add('slide-in');
            observer.observe(aboutText);
        }
    }

    // 添加頁面載入動畫
    document.body.classList.add('loaded');

    // 主題切換功能
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // 從 localStorage 獲取保存的主題，如果沒有則使用系統偏好
        const currentTheme = localStorage.getItem('theme') || 
                            (prefersDarkScheme.matches ? 'dark' : 'light');
        
        // 初始化主題
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        themeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
                            ? 'light' 
                            : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // 在頁面加載完成後初始化主題切換功能
    initThemeToggle();

    // 添加滾動動畫
    function addScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        });

        elements.forEach(el => observer.observe(el));
    }

    function openLightbox(element) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const imgSrc = element.querySelector('img').src;
        const imgAlt = element.querySelector('img').alt;
        
        lightboxImg.src = imgSrc;
        lightboxImg.alt = imgAlt;
        lightbox.style.display = 'flex';
        
        // 禁止背景滾動
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
        
        // 恢復背景滾動
        document.body.style.overflow = 'auto';
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // 頁面加載時檢查主題
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    function validateForm() {
        const inputs = document.querySelectorAll('input[required]');
        
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.checkValidity()) {
                    this.classList.remove('invalid');
                    this.classList.add('valid');
                } else {
                    this.classList.remove('valid');
                    this.classList.add('invalid');
                }
            });
        });
    }

    // 添加鍵盤事件監聽
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  const progress = document.querySelector('.progress-bar');
  let width = 0;
  
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      progress.style.width = width + '%';
    }
  }, 10);
});
