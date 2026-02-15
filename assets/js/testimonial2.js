import Swiper from "swiper";
import { Navigation ,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

 const testimonial2 = new Swiper(".testimonial2-slider", {
    spaceBetween:20,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

   slidesPerView: 1,
  spaceBetween: 20,

     navigation: {
    nextEl: ".testimonial2-next",
    prevEl: ".testimonial2-prev",
  },
 modules: [Navigation, Autoplay],
  });


  







  
