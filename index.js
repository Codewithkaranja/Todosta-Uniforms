document.addEventListener("DOMContentLoaded", function () {
  // =============================
  // NAV TOGGLE
  // =============================
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    document.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
      });
    });
  }

  // =============================
  // HEADER SCROLL EFFECT
  // =============================
  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 50);
  });

  // =============================
  // HERO SWIPER (CLEAN VERSION)
  // =============================
  const heroEl = document.querySelector(".hero-swiper");

  if (heroEl && typeof Swiper !== "undefined") {
    const heroSwiper = new Swiper(".hero-swiper", {
      loop: true,
      speed: 800,
      effect: "fade",
      fadeEffect: { crossFade: true },

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".hero-swiper .swiper-pagination",
        clickable: true,
      },
    });

    // Fix background video layout bug
    const video = document.querySelector(".hero-bg-video");
    if (video) {
      video.addEventListener("loadeddata", () => heroSwiper.update());
      video.addEventListener("canplay", () => heroSwiper.update());
    }

    // Final safety update
    window.addEventListener("load", () => heroSwiper.update());
  } else {
    console.error("Swiper not found or hero-swiper missing");
  }
  // =============================
// TESTIMONIALS SWIPER
// =============================
const tEl = document.querySelector(".testimonials-swiper");

if (tEl && typeof Swiper !== "undefined") {
  new Swiper(".testimonials-swiper", {
    loop: true,
    speed: 700,
    spaceBetween: 18,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    pagination: {
      el: ".testimonials-swiper .swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".testimonials-swiper .swiper-button-next",
      prevEl: ".testimonials-swiper .swiper-button-prev",
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      900: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  });
}

});
