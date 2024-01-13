document.addEventListener('DOMContentLoaded', function () {
  let mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 60,
    breakpoints: {
      375: {
        slidesPerView: 3,
      },

      640: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
    },

    effect: 'slide',
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
});

const swiperContainer = document.querySelector('.mySwiper');

swiperContainer.addEventListener('mouseenter', function () {
  mySwiper.autoplay.stop();
});
swiperContainer.addEventListener('mouseleave', function () {
  mySwiper.autoplay.start();
});
