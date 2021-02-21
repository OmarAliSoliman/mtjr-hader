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

});

