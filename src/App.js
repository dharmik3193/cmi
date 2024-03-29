import './App.css';
import $ from 'jquery';
import { useEffect } from 'react'
import WOW from 'wowjs';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import { Route, Routes } from 'react-router-dom';
import SingleCourse from './Pages/SingleCourse';
import SingleBlog from './Pages/SingleBlog';

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
    var wow = new WOW.WOW(
      {
        boxClass: 'wow',   
        animateClass: 'animated', 
        offset: 0,         
        mobile: false,      
        live: true      
      }
    );
    wow.init();

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

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/course/:id' element={<SingleCourse />} />
        <Route path='/about/course/:id' element={<SingleCourse />} />
        <Route path='/blog/:id' element={<SingleBlog />} />

      </Routes>
    </div>
  );
}

export default App;
