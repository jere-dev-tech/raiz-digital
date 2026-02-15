// import "preline";
import AOS from "aos";
import "aos/dist/aos.css";
import "./testimonial.js";
import "./testimonial2.js";
import "./homeSlider.js";
import "./service.js";
import "./homeService.js";
import "./gallerySlider.js";
import Lenis from "lenis";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const text = new SplitType(".headline", { types: "words, chars" });

gsap.from(".char", {
  opacity: 0,
  x: -60,
  duration: 0.9,
  ease: "power4.out",
  stagger: {
    amount: 0.4,
    from: "random"
  },
  scrollTrigger: {
    trigger: ".headline",
    start: "top 80%",
    once: true,
  }
});


// vanilatilt 
VanillaTilt.init(document.querySelector(".image"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.9,
});





//  AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    AOS.init({
      once: true,
      duration: 700,
      offset: 100,
    });

    window.dispatchEvent(new Event("resize"));
    AOS.refresh();
  }, 500);
});

//back to top Start
var toTopButton = document.getElementById("to-top-button");

if (toTopButton) {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      toTopButton.classList.remove("hidden");
    } else {
      toTopButton.classList.add("hidden");
    }
  };

  window.goToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

// lenis for function

const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: true,
  touchMultiplier: 1.5,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
