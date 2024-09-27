var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {

  })
})


//thumbnail nav
var swiper = new Swiper(".swiper-1", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      direction: "horizontal",
      breakpoints: {
      767: {
        direction: "vertical",
      }
    }
});
//main photo
    var swiper2 = new Swiper(".swiper-2", {
      spaceBetween: 10,
      zoom:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
});
