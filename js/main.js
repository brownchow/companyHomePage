document.addEventListener('DOMContentLoaded', function() {
    const sliderItems = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;
    const intervalTime = 5000;

    function showSlide(index) {
        // 移除所有激活状态
        sliderItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // 设置新的激活状态
        currentIndex = index;
        sliderItems[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        let nextIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(nextIndex);
    }

    function startAutoPlay() {
        stopAutoPlay(); // 先清除之前的，防止重复
        interval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoPlay() {
        if (interval) {
            clearInterval(interval);
        }
    }

    // 初始化自动轮播
    if (sliderItems.length > 0) {
        startAutoPlay();
    }

    // 点击小白点切换
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startAutoPlay(); // 用户点击后重新计时
        });
    });

    // 鼠标悬停停止轮播，离开继续
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoPlay);
        sliderContainer.addEventListener('mouseleave', startAutoPlay);
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});
