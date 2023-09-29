
var swiper = new swipe(".gallery", {
  slidesPerView: 3.7,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  grabCursor: true,
  loop: true,
  
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    500: {
      slidesPerView: 5
    },
    700: {
      slidesPerView: 0
    }
  }
});