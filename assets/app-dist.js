var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map((function(e){return new bootstrap.Tooltip(e,{})})),swiper=new Swiper(".swiper-1",{spaceBetween:10,slidesPerView:3,freeMode:!0,watchSlidesProgress:!0,direction:"horizontal",breakpoints:{767:{direction:"vertical"}}}),swiper2=new Swiper(".swiper-2",{spaceBetween:10,zoom:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:swiper}});
//# sourceMappingURL=app-dist.js.map