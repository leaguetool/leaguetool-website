(function (a) {
  function f() {
    if (a(".preloader").length) {
      a("body").addClass("page-loaded");
      a(".preloader").delay(1500).fadeOut(0);
    }
  }
  function g() {
    if (a(".main-header").length) {
      var m = a(window).scrollTop();
      var k = a(".main-header");
      var j = a(".scroll-to-top");
      var l = a(".main-header .sticky-header");
      if (m > 100) {
        k.addClass("fixed-header");
        l.addClass("animated slideInDown");
        j.fadeIn(300);
      } else {
        k.removeClass("fixed-header");
        l.removeClass("animated slideInDown");
        j.fadeOut(300);
      }
    }
  }
  g();
  if (a(".main-header li.dropdown ul").length) {
    a(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>'
    );
  }
  if (a(".mobile-menu").length) {
    a(".mobile-menu .menu-box").mCustomScrollbar();
    var h = a(".main-header .nav-outer .main-menu").html();
    a(".mobile-menu .menu-box .menu-outer").append(h);
    a(".sticky-header .main-menu").append(h);
    a(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      a(this).toggleClass("open");
      a(this).prev("ul").slideToggle(500);
    });
    a(".mobile-nav-toggler").on("click", function () {
      a("body").addClass("mobile-menu-visible");
    });
    a(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        a("body").removeClass("mobile-menu-visible");
      }
    );
    a(document).keydown(function (j) {
      if (j.keyCode === 27) {
        a("body").removeClass("mobile-menu-visible");
      }
    });
  }
  if (a(".banner-carousel").length) {
    a(".banner-carousel").owlCarousel({
      loop: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      margin: 0,
      //   nav: true,
      //   smartSpeed: 500,
      //   autoplay: 6000,
      navText: [
        '<span class="icon flaticon-triangle"></span>',
        '<span class="icon flaticon-next"></span>',
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        800: { items: 1 },
        1024: { items: 1 },
      },
    });
  }
  if (a(".sponsors-carousel").length) {
    a(".sponsors-carousel").owlCarousel({
      loop: true,
      margin: 40,
      nav: true,
      smartSpeed: 500,
      autoplay: 4000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        768: { items: 3 },
        800: { items: 4 },
        1024: { items: 4 },
        1200: { items: 5 },
      },
    });
  }
  if (
    a(".testimonial-slider .text-carousel").length &&
    a(".testimonial-slider .thumb-carousel").length
  ) {
    var b = a(".testimonial-slider .text-carousel"),
      c = a(".testimonial-slider .thumb-carousel"),
      e = false,
      d = 500;
    b.owlCarousel({
      loop: true,
      animateOut: "fadeOutRight",
      animateIn: "fadeInLeft",
      items: 1,
      margin: 20,
      nav: true,
      navText: [
        '<span class="icon flaticon-triangle"></span>',
        '<span class="icon flaticon-next"></span>',
      ],
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
    }).on("changed.owl.carousel", function (j) {
      if (!e) {
        e = false;
        c.trigger("to.owl.carousel", [j.item.index, d, true]);
        e = false;
      }
    });
    c.owlCarousel({
      loop: true,
      margin: 20,
      items: 1,
      nav: false,
      navText: [
        '<span class="icon fa fa-angle-left"></span>',
        '<span class="icon fa fa-angle-right"></span>',
      ],
      dots: false,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: { items: 3 },
        600: { items: 3 },
        768: { items: 3 },
        1024: { items: 3 },
        1200: { items: 3 },
      },
    })
      .on("click", ".owl-item", function () {
        b.trigger("to.owl.carousel", [a(this).index(), d, true]);
      })
      .on("changed.owl.carousel", function (j) {
        if (!e) {
          e = true;
          b.trigger("to.owl.carousel", [j.item.index, d, true]);
          e = false;
        }
      });
  }
  if (a(".single-item-carousel").length) {
    a(".single-item-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="icon flaticon-triangle"></span>',
        '<span class="icon flaticon-next"></span>',
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        800: { items: 1 },
        1024: { items: 1 },
      },
    });
  }
  if (a(".gallery-carousel").length) {
    a(".gallery-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      smartSpeed: 500,
      autoplay: 4000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        600: { items: 2 },
        800: { items: 2 },
        1024: { items: 3 },
        1200: { items: 4 },
      },
    });
  }
  if (a(".count-box").length) {
    a(".count-box").appear(
      function () {
        var j = a(this),
          k = j.find(".count-text").attr("data-stop"),
          l = parseInt(j.find(".count-text").attr("data-speed"), 10);
        if (!j.hasClass("counted")) {
          j.addClass("counted");
          a({ countNum: j.find(".count-text").text() }).animate(
            { countNum: k },
            {
              duration: l,
              easing: "linear",
              step: function () {
                j.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                j.find(".count-text").text(this.countNum);
              },
            }
          );
        }
      },
      { accY: 0 }
    );
  }
  if (a(".accordion-box").length) {
    a(".accordion-box").on("click", ".acc-btn", function () {
      var j = a(this).parents(".accordion-box");
      var k = a(this).parents(".accordion");
      if (a(this).hasClass("active") !== true) {
        a(j).find(".accordion .acc-btn").removeClass("active");
      }
      if (a(this).next(".acc-content").is(":visible")) {
        return false;
      } else {
        a(this).addClass("active");
        a(j).children(".accordion").removeClass("active-block");
        a(j).find(".accordion").children(".acc-content").slideUp(300);
        k.addClass("active-block");
        a(this).next(".acc-content").slideDown(300);
      }
    });
  }
  if (a(".lightbox-image").length) {
    a(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: { media: {} },
    });
  }
  if (a("#contact-form").length) {
    a("#contact-form").validate({
      rules: {
        username: { required: true },
        email: { required: true, email: true },
        phone: { required: true },
        message: { required: true },
      },
    });
  }
  if (a(".scroll-to-target").length) {
    a(".scroll-to-target").on("click", function () {
      var j = a(this).attr("data-target");
      a("html, body").animate({ scrollTop: a(j).offset().top }, 1500);
    });
  }
  if (a(".wow").length) {
    var i = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    i.init();
  }
  a(window).on("scroll", function () {
    g();
  });
  a(window).on("load", function () {
    f();
  });
})(window.jQuery);
