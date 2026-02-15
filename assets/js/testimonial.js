import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonial2 = new Swiper(".testimonial-slider", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".testimonial-pagination",
    clickable: true,
  },



  modules: [Autoplay, Pagination],
});
