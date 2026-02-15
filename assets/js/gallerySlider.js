import Swiper from "swiper";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import "swiper/css/pagination";

const gallerySlider = new Swiper(".gallery-slider", {
  modules: [Autoplay, EffectCoverflow, Pagination],
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "2",
  loop: true,
  speed: 800,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});
