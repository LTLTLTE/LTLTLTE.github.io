// const swiper = new Swiper('.mySwiper2', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });

const swiper = new Swiper('.mySwiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'slide',  // 可以是 'slide', 'fade', 'cube', 'coverflow', 'flip' 等
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


var swiper1 = new Swiper('#swiper1');
var swiper2 = new Swiper('#swiper2');
var swiper3 = new Swiper('#swiper3');