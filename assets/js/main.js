$(document).ready(function () {

  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".header").length) {
    $(".header-slider").slick({
      arrows: true,
      rtl: currentDir == "rtl" ? true : false,
    });
  }


  if($('.services').length){
    $(".services-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      arrowa: true,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }


  if ($(".add-image").length) {
    $(".slider-top").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      asNavFor: ".slider-bottom",
    });
    $(".slider-bottom").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".slider-top",
      dots: false,
      centerMode: false,
      focusOnSelect: true,
    });
  }

  if ($(".example").length) {
    $(".example").htmlNumberSpinner();
  }


  if (
    typeof window.location.hash != "undefined" &&
    window.location.hash == "#my-account"
  ) {
    $("#v-pills-home-tab").click();
  }

  if (
    typeof window.location.hash != "undefined" &&
    window.location.hash == "#fav-product"
  ) {
    $("#v-pills-settings-tab").click();
  }

});

