// mimport Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.mjs';

document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 4,
      },
      640: {
        slidesPerView: 4,
      },
      960: {
        slidesPerView: 5,
      }
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    effect: 'slide',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
