$('.galeria').slick({
    centerMode: true,
    focusOnselect:true,
      slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prev2'),
    nextArrow: $('.next2'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });