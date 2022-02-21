console.log("👋");

	
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows:false,
  responsive: [
   
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.single-item').slick({
slidesToScroll: 1,
  autoplaySpeed: 3000,
  dots: true,
  arrows:false,
});

// jQuery counterUp
  $('[data-toggle="counterUp"]').counterUp({
      delay: 15,
      time: 1500
  });
  
//header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $("header").addClass("sticky-header");
    }
	else{
		$("header").removeClass("sticky-header");
	}
});
	
