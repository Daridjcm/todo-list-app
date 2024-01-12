// Import
import Swiper from 'swiper';

// Init Swiper:
const Swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'vertical', 
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
