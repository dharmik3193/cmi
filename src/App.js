import './App.css';
import $ from 'jquery';
import { useEffect } from 'react'
import WOW from 'wowjs';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import { Route, Routes } from 'react-router-dom';
import SingleCourse from './Pages/SingleCourse';
import Preloader from './components/Preloader';

function App() {

  useEffect(() => {
    //Hide Loading Box (Preloader)
    function handlePreloader() {
      if ($('.preloader').length) {
        $('.preloader').delay(200).fadeOut(500);
      }
    }

    // Update Header Style and Scroll to Top
    function headerStyle() {
      if ($('.main-header').length) {
        var windowpos = $(window).scrollTop();
        var siteHeader = $('.header-style-one');
        var scrollLink = $('.scroll-to-top');
        var sticky_header = $('.main-header .sticky-header');
        // console.log(windowpos);
        if (windowpos > 100) {
          sticky_header.addClass("fixed-header animated slideInDown");
          scrollLink.fadeIn(300);
        } else {
          sticky_header.removeClass("fixed-header animated slideInDown");
          scrollLink.fadeOut(300);
        }
        if (windowpos > 1) {
          siteHeader.addClass("fixed-header");
        } else {
          siteHeader.removeClass("fixed-header");
        }
      }
    }
    headerStyle();

    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
      $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
    }

    //Mobile Nav Hide Show
    function mobilenav() {
      if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.main-header .main-menu .navigation').html();
        console.log(mobileMenuContent);
        $('.mobile-menu .navigation').append(mobileMenuContent);
        $('.sticky-header .navigation').append(mobileMenuContent);
        $('.mobile-menu .close-btn').on('click', function () {
          $('body').removeClass('mobile-menu-visible');
        });

        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
          $(this).prev('ul').slideToggle(500);
          $(this).toggleClass('active');
        });

        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function () {
          $('body').removeClass('mobile-menu-visible');
        });

      }
    }
    mobilenav();

    //Header Search
    if ($('.search-btn').length) {
      $('.search-btn').on('click', function () {
        $('.main-header').addClass('moblie-search-active');
      });
      $('.close-search, .search-back-drop').on('click', function () {
        $('.main-header').removeClass('moblie-search-active');
      });
    }


    //Banner Carousel
    if ($('.banner-carousel').length) {
      $('.banner-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 500,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 10000,
        navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1024: {
            items: 1
          },
        }
      });
    }


    //Accordion Box
    if ($('.accordion-box').length) {
      $(".accordion-box").on('click', '.acc-btn', function () {

        var outerBox = $(this).parents('.accordion-box');
        var target = $(this).parents('.accordion');

        if ($(this).hasClass('active') !== true) {
          $(outerBox).find('.accordion .acc-btn').removeClass('active ');
        }

        if ($(this).next('.acc-content').is(':visible')) {
          return false;
        } else {
          $(this).addClass('active');
          $(outerBox).children('.accordion').removeClass('active-block');
          $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
          target.addClass('active-block');
          $(this).next('.acc-content').slideDown(300);
        }
      });
    }



    //Fact Counter + Text Count
    if ($('.count-box').length) {
      $('.count-box').appear(function () {

        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            }
          });
        }

      }, { accY: 0 });
    }

    //product bxslider
    if ($('.product-details .bxslider').length) {
      $('.product-details .bxslider').bxSlider({
        nextSelector: '.product-details #slider-next',
        prevSelector: '.product-details #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.product-details .slider-pager .thumb-box'
      });
    };


    //Tabs Box
    if ($('.tabs-box').length) {
      $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));

        if ($(target).is(':visible')) {
          return false;
        } else {
          target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
          $(this).addClass('active-btn');
          target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
          target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
          $(target).fadeIn(300);
          $(target).addClass('active-tab animated fadeIn');
        }
      });
    }


    // count Bar
    if ($(".count-bar").length) {
      $(".count-bar").appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        }, {
        accY: -50
      }
      );
    }

    //Progress Bar
    if ($('.progress-line').length) {
      $('.progress-line').appear(function () {
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent + '%');
      }, { accY: 0 });
    }

    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
      $('.lightbox-image').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        helpers: {
          media: {}
        }
      });
    }

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
      $(".scroll-to-target").on('click', function () {
        var target = $(this).attr('data-target');
        // animate
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 1500);

      });
    }

    // Elements Animation
    // if ($('.wow').length) {
    var wow = new WOW.WOW(
      {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: false,       // trigger animations on mobile devices (default is true)
        live: true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
    // }

    //Quantity box
    $(".quantity-box .add").on("click", function () {
      if ($(this).prev().val() < 999) {
        $(this)
          .prev()
          .val(+$(this).prev().val() + 1);
      }
    });
    $(".quantity-box .sub").on("click", function () {
      if ($(this).next().val() > 1) {
        if ($(this).next().val() > 1)
          $(this)
            .next()
            .val(+$(this).next().val() - 1);
      }
    });

    //Price Range Slider
    if ($('.price-range-slider').length) {
      $(".price-range-slider").slider({
        range: true,
        min: 10,
        max: 99,
        values: [10, 60],
        slide: function (event, ui) {
          $("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
        }
      });

      $("input.property-amount").val($(".price-range-slider").slider("values", 0) + " - $" + $(".price-range-slider").slider("values", 1));
    }


    // Select2 Dropdown
    // $('.custom-select').select2({
    //   minimumResultsForSearch: 7,
    // });

    //Gallery Filters
    if ($('.filter-list').length) {
      $('.filter-list').mixItUp({});
    }


    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function () {
      headerStyle();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function () {
      handlePreloader();
    });

  }, []);

  return (
    <div className="page-wrapper">
      {/* <Header /> */}
      {/* <Home/> */}
      {/* <Courses/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Blog/> */}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/course/:id' element={<SingleCourse />} />

      </Routes>
      {/* <Preloader /> */}
      {/* <GptFooter/> */}
    </div>
  );
}

export default App;
