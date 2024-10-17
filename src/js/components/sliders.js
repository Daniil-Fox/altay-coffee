import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation])

new Swiper('.dishes__slider', {
  slidesPerView: 2,
  spaceBetween: 32,

  navigation: {
    prevEl: '.dish-prev',
    nextEl: '.dish-next',
  },
  breakpoints: {
    320: {
      slidesPerView : 1
    },
    768 : {
      slidesPerView : 2
    }
  }
})

new Swiper('.proc__slider', {
  slidesPerView: 2,
  spaceBetween: 32,

  navigation: {
    prevEl: '.proc-prev',
    nextEl: '.proc-next',
  },
  breakpoints: {
    320: {
      slidesPerView : 1
    },
    768 : {
      slidesPerView : 2
    }
  }
})
