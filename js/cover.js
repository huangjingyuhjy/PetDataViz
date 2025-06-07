document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const carousel = document.getElementById('carousel');
    const images = carousel.children;
    const totalImages = images.length;
    const imageBoxWidth = document.getElementById('top-image-box').clientWidth;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        carousel.style.transform = `translateX(-${currentIndex * imageBoxWidth}px)`;
    }

    setInterval(showNextImage, 3000); // 每3秒切换一次图片
});
