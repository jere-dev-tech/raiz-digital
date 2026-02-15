import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".serviceSlider2 ", {
  spaceBetween: 20,

  loop: true,
  speed:800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
 
  navigation: {
    nextEl: ".service-next",
    prevEl: ".service-prev",
  },

  modules: [Navigation, Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
