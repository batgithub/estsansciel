(function($){
 
    /* Quand je clique sur l'icône hamburger je rajoute une classe au body */
    $('#header-icon').click(function(e){
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });
 
    /* Je veux pouvoir masquer le menu si on clique sur le cache */
    $('#site-cache').click(function(e){
        $('body').removeClass('with--sidebar');
    })
 
})(jQuery);


/**
* Verification du navigateur de l'utilisateur
**/
var $buoop = {};
$buoop.ol = window.onload;
window.onload=function(){
    try {if ($buoop.ol) $buoop.ol();}catch (e) {}
    var e = document.createElement("script");
    e.setAttribute("type", "text/javascript");
    e.setAttribute("src", "//browser-update.org/update.js");
    document.body.appendChild(e);
}



/**
* Changement d'apparence du menu après le passage de la div header
**/
  $(document).on("scroll",function(){
    if($(document).scrollTop()>$(".intro").outerHeight()){
        $(".header").addClass("header-float");
         
    } else{
        $(".header").removeClass("header-float");
        
    }
});



/**
* scroll on click du menu
**/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top)-80
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){
    $('.creations-carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
                {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
                },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});










