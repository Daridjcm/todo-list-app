// Declaration of mySwiper for the scope in the function.
let mySwiper;

document.addEventListener('DOMContentLoaded', function () {
  mySwiper = new Swiper('.mySwiper', {
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

  const swiperContainer = document.querySelector('.mySwiper');

  // Stop animation
  swiperContainer.addEventListener('mouseenter', function () {
    mySwiper.autoplay.stop();
  });

  // Replay animation
  swiperContainer.addEventListener('mouseleave', function () {
    mySwiper.autoplay.start();
  });
});
