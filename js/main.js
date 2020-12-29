$(window).on('load', function () {

  //preloader
  $('.pre-loader').fadeOut("500", function () {
    $('html').removeClass("overflow");
    $(this).remove();
  });

  if ($('.pre-loader').length == 0) {
    $('html').removeClass("overflow");
  }

  // animate on scroll

  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 769;
      return window.innerWidth < maxWidth;
    },
    easing: 'ease-in-out'
  });

  //nava toggle
  $('#nava-icon').click(function (e) {
    $('#nava').toggleClass('nava-active');
    $('html').toggleClass('overflow');
  });

  $('#nava').click(function (e) {
    if (e.target.id == 'nava' || e.target.id == 'close-nava' || e.target.parentNode.id == "close-nava") {
      $(this).removeClass('nava-active');
      $('html').removeClass('overflow');
    }
  });

  //search toggle
  $('#search-btn').click(function (e) {
    $('#search-form').toggleClass('search-form-active');
    $('html').toggleClass('overflow');
  });

  $('#search-form').click(function (e) {
    if (e.target.id == 'search-form' || e.target.id == 'close-search' || e.target.parentNode.id == "close-search") {
      $(this).removeClass('search-form-active');
      $('html').removeClass('overflow');
    }
  });

  $(".slide").on("click", function (e) {
    if (window.innerWidth <= 1200) {
      if (e.target.classList.contains('drop')) {
        e.stopPropagation();
        $(this).toggleClass("slide-active");
        $(this).children(".top-dropDown").slideToggle();
      }
    }
  });

  //change nav slide 
  function changeSlide() {
    if (window.innerWidth <= 1200) {
      $('.sm-slide').removeClass('top-setting');
      $('.sm-slide').addClass('slide');
      $('.sm-slide .top-dropDown').css('display', 'none');

    } else {
      $('.sm-slide').addClass('top-setting');
      $('.sm-slide').removeClass('slide');
      $('.sm-slide .top-dropDown').css('display', 'unset');
    }
  }

  changeSlide();

  window.addEventListener('resize', changeSlide);

  // add footer collabse
  function addCollapse() {
    if (window.innerWidth <= 992) {
      $('.footer-list').attr("data-toggle", "collapse");
      $('.footer-list ul').addClass('collapse');
    } else {
      $('.footer-list').attr("data-toggle", "none");
      $('.footer-list ul').removeClass('collapse');
      $('.footer-list ul').css('height', 'auto');
      $('#nava').removeClass('nava-active');
    }
  }


  addCollapse();
  window.addEventListener("resize", addCollapse);


  $(".footer-list").on("click", function (e) {
    if (window.innerWidth <= 992) {
      $(this).toggleClass("footer-list-active");
    }
  });


  var mySwiper2 = new Swiper('.s-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 25,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 480px
      1100: {
        slidesPerView: 4,
      },

      768: {
        slidesPerView: 3,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 150px
      150: {
        slidesPerView: 2,
        spaceBetween: 10,
      }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper4 = new Swiper('.categories-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 10,
    autoplay: false,
    allowTouchMove: false,

    breakpoints: {

      1100: {
        slidesPerView: 10,
        allowTouchMove: false,
        autoplay: {
          delay: 4000,
        }
      },

      992: {
        slidesPerView: 7,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        }
      },

      768: {
        slidesPerView: 5,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        }
      },

      576: {
        slidesPerView: 3,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        }
      },

      0: {
        slidesPerView: 2,
        allowTouchMove: true,
        autoplay: 4000,
      }
    },

    pagination: {
      el: '#categories-pagenation',
      clickable: true,
    },

  });

  if (window.innerWidth <= 1100) {
    setInterval(() => {
      mySwiper4.forEach(e => {
        e.slideNext();
      });;
    }, 4000);
  }

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById('up');
    if (this.scrollY > 200) {
      up.classList.add('active-up');
    } else {
      up.classList.remove('active-up');
    }
  }



});

