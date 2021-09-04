import slick from "slick-carousel";
import $ from "jquery";

const slickOption = {
  arrows: true,
  nextArrow:
    '<a class="control next"><img src="../static/img/slider-right.png" /></a>',
  prevArrow:
    '<a class="control prev"><img src="../static/img/slider-left.png" /></a>',
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  mobileFirst: true,
  appendArrows: $(".slider-management"),
  appendDots: $(".slider-management"),

  responsive: [
    {
      breakpoint: 765,
      settings: {
        variableWidth: true,
      },
    },
    {
      breakpoint: 1366,
      settings: {
        // slidesToShow: 2,
      },
    },
  ],
};

$(".js-slider").slick(slickOption);
