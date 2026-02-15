 document.addEventListener("DOMContentLoaded", function () {
    
    $('#ripple-section').ripples({
      resolution: 200,
      dropRadius: 20,
      perturbance: 0.02
    });

    
    setInterval(function () {
      var $el = $('#ripple-section');
      var x = Math.random() * $el.outerWidth();
      var y = Math.random() * $el.outerHeight();
      var dropRadius = 20;
      var strength = 0.02;

      $el.ripples('drop', x, y, dropRadius, strength);
    }, 2000);
  });