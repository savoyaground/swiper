
      var swiper_autos = new Swiper(".swiper-autos", {
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 8,
        initialSlide: 0,
        autoHeight: true,
        grabCursor: true,
        loop: true,
        navigation: {
          hideOnClick: true,
          prevEl: ".swiper-autos-button-prev",
          nextEl: ".swiper-autos-button-next",
        },
        pagination: {
          hideOnClick: true,
          dynamicBullets: true,
          el: ".swiper-pagination",
        },
        autoplay: { enabled: true, pauseOnMouseEnter: true },
        mousewheel: { enabled: false },
        lazy: { enabled: false },
        watchSlidesProgress: true,
        slidesPerGroupAuto: false,
      });
      
       var swiper_details = new Swiper(".swiper-details", {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0,
        initialSlide: 2,
        autoHeight: true,
        grabCursor: true,
        loop: true,
        navigation: {
          hideOnClick: true,
          prevEl: ".swiper-details-button-prev",
          nextEl: ".swiper-details-button-next",
        },
        pagination: {
          hideOnClick: true,
          dynamicBullets: true,
          el: ".swiper-pagination",
        },
        autoplay: { enabled: true, pauseOnMouseEnter: true },
        mousewheel: { enabled: false },
        lazy: { enabled: true },
        watchSlidesProgress: true,
        slidesPerGroupAuto: false,
      });

