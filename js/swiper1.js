var mySwiper = new Swiper('.swiper', {
   
    loop: true, // 循环模式选项

    effect: 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,

    },

})        
