document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 40 },
      size: { value: 3 },
      move: { enable: true, speed: 2 },
      line_linked: { enable: true, distance: 150, opacity: 0.5, color: "#10b981" },
      color: { value: "#10b981" },
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } },
    },
  });
});
