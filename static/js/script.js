/* 
==============================================
* Green Paper - v1.0
==============================================

* Demo: https://demo.uicard.io/green-paper-pro/
* Free Version: https://uicard.io/products/green-paper
* Premium Version: https://uicard.io/products/green-paper-pro

==============================================
* Coded By : UICardio https://uicard.io
==============================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* Copyright 2018 UICardio
*/


$(document).ready(function(){
  
  

  //Activating tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //Hack for navbar
  $(".navbar-toggler").click(function(e){
    if($("nav").hasClass('navbar-light') && !$("nav").hasClass('nochange')){
      if($(window).scrollTop() < 30){
        $("nav").addClass('navbar-dark').removeClass('navbar-light');
      }
      
    } else {
      $("nav").removeClass('navbar-dark').addClass('navbar-light');
    }
  });

  //Check scroll location of page
  //If more than 30 add white bg in nav
  if($(window).scrollTop() >= 30){
    $("nav").addClass('navbar-dark').removeClass('navbar-light');
  }
  

  $('a').click(function(){
    var hash = $(this).attr('href').split('#')[1];
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top
    }, 500);
    return false;
});



  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 30) {
        //clearHeader, not clearheader - caps H
        $(".nav-transparent").removeClass("navbar-dark").addClass("navbar-light");
    } else {
      $(".nav-transparent").removeClass("navbar-light").addClass("navbar-dark");
    }
});

    $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });


});
