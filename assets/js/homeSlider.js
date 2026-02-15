import Swiper from "swiper";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const mainSwiper = new Swiper(".homeSwiper", {
  spaceBetween: 30,

  effect: "fade",
  loop: true,

  modules: [Autoplay, Pagination, EffectFade],
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".home-pagination",
    type: "fraction",
  },
});
