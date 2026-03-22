document.addEventListener('DOMContentLoaded', function() {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentIndex = 0;
    const intervalTime = 5000;

    function nextSlide() {
        sliderItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % sliderItems.length;
        sliderItems[currentIndex].classList.add('active');
    }

    if (sliderItems.length > 0) {
        setInterval(nextSlide, intervalTime);
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
