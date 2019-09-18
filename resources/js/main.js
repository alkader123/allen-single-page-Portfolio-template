// typedJs (HEADER)

var typed = new Typed(".type", {
  strings: ["Designer", "Developer", "Freelancer"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
});

$(document).ready(function() {
  // WAYPOINT (STICKY NAVBAR)

  $(".js--about-section").waypoint(function(direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });

  // Owl Carouse (CLIENT SECTION)

  $(function() {
    $("#client-slider").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: false,
      dots: true
    });
  });

  // MIXITUP (PORTFOLIO)
  var mixer = mixitup(".mix-container");

  // FANCY LIGHTBOX
  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });
});

// SMOOTH SCROLL FOR IE/EDGE/SAFARI

$("a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
