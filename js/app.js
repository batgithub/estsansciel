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

(function($){

  $(".carousel").owlCarousel({
    dots:true,
    nav:true,
    lazyContent:true,
    navText:["<",">"],
    responsive: {
    	0: {
    		items:1,
    		margin:30
    	},
    	768: {
    		items:3,
    		margin:20
    	},
    	992: {
    		items:4,
    		margin:20
    	}
    }
    
    
  });


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
            scrollTop: (target.offset().top)-90
          }, 1000);
          return false;
        }
      }
    });
  });

})(jQuery);









