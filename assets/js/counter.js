function runCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.getAttribute("data-suffix") || "";
    let count = 0;
    const speed = 20;
    const increment = target / 300;

    const update = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count) + suffix;
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + suffix;
      }
    };

    update();
  });
}

window.runCounters = runCounters;


document.addEventListener("DOMContentLoaded", runCounters);
