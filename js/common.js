jQuery(document).ready(function($){
    
    // Sticky Nav
        $(window).scroll(function() {     
            var scroll = $(window).scrollTop();     
            if (scroll > 0) { 
                $(".main-head").addClass("fixed"); 
            } 
            else {
            $(".main-head").removeClass("fixed"); 
            }
        })

     $(document).ready(function () {
        var $slider = $('.js-features');
        var $current = $('.slider-counter .current-vlu');
        var $total = $('.slider-counter .total-slider');

        $slider.on('init reInit', function (event, slick) {
            $total.text(('0' + slick.slideCount).slice(-2));
            $current.text('01');
        });

        $slider.on('afterChange', function (event, slick, currentSlide) {
            var currentSlideIndex = currentSlide + 1;
            $current.text(('0' + currentSlideIndex).slice(-2));
        });

        $slider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

function formatNumber(n) {
    return n < 10 ? '0' + n : n;
}

let $slider = $('.js-ai-powered-slider');
let $current = $('.counter-lft-vul');
let $total = $('.counter-rgt-vul');

$slider.on('init', function(event, slick) {
    $current.text(formatNumber(1));
    $total.text(formatNumber(slick.slideCount));
});

$slider.on('afterChange', function(event, slick, currentSlide) {
    $current.text(formatNumber(currentSlide + 1));
});

$slider.slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next')
});

// accordion add active class

  $(document).ready(function () {
    $('.accordion-button').on('click', function () {
      // Remove 'active' class from all .accordion-item elements
      $('.accordion-item').removeClass('active');
      $(this).closest('.accordion-item').addClass('active');
    });
  });

  $( "#datepicker" ).datepicker();

// check box

$('.form-group label').on('click', function() {
        $(this).closest('.form-group').toggleClass('active');
    });

    // select option
    $( "#speed" ).selectmenu();

    // enter key go to next page

$(document).ready(function () {
    // Check if we're on request-early-access-one.html
    if (window.location.pathname.includes('request-early-access-one')) {
      $(document).on('keydown', function (e) {
        if (e.key === 'Enter' && !$('input, textarea').is(':focus')) {
          window.location.href = 'request-early-access-two.html';
        }
      });
    }
  });

    })
    
   