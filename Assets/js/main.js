window.addEventListener("DOMContentLoaded", () => {
  (function ($) {
    $.fn.animateNumbers = function (stop, commas, duration, ease) {
      return this.each(function () {
        var $this = $(this);
        var start = parseInt($this.text().replace(/,/g, ""));
        commas = commas === undefined ? true : commas;
        $({ value: start }).animate(
          { value: stop },
          {
            duration: duration == undefined ? 1000 : duration,
            easing: ease == undefined ? "swing" : ease,
            step: function () {
              $this.text(Math.floor(this.value));
              if (commas) {
                $this.text(
                  $this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                );
              }
            },
            complete: function () {
              if (parseInt($this.text()) !== stop) {
                $this.text(stop);
                if (commas) {
                  $this.text(
                    $this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                  );
                }
              }
            },
          }
        );
      });
    };
  })(jQuery);
  function checkVisability() {
    $("#number1").each(function () {
      if ($(this).inView("both")) {
        // $("#number1").animateNumbers(550);
        console.log("yayy");
      } else {
        console.log("nayy");
      }
    });
    console.log("nn");
  }

  // bind to window scroll event
  window.addEventListener("scroll", () => {
    checkVisability();
  });
});
