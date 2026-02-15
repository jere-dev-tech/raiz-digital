 
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particle2", {
    particles: {
      number: { value: 40 },
      size: { value: 15, random: true },
      color: { value: "#10b981" },
      opacity: { value: 0.5, random: true },
      shape: { type: "circle" },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        straight: false,
        out_mode: "out",
        random: true
      },
      line_linked: { enable: false }
    },
    interactivity: {
      events: {
        onhover: { enable: false },
        onclick: { enable: false }
      }
    }
  });
});