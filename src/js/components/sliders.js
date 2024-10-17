import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation])

new Swiper('.dishes__slider', {
  slidesPerView: 2,
  spaceBetween: 32,

  navigation: {
    prevEl: '.dish-prev',
    nextEl: '.dish-next',
  }
})

new Swiper('.proc__slider', {
  slidesPerView: 2,
  spaceBetween: 32,

  navigation: {
    prevEl: '.proc-prev',
    nextEl: '.proc-next',
  }
})
