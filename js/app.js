$(document).ready(function(){
    $('.creations-carousel').slick({
        dots:true,
        infinite:false        
    });
});

$('#play').on('click', function(ev) {
    $('#video').removeClass("hidden");
    $('#play').addClass("hidden");
    $('#image').addClass("hidden");
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });


function underline(element)
{
    //Calcule de la position du bas de la fenètre, en hauteur dans le site
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
   
    
    //Calcule de la position de notre élément
    var elemTop = element.offset().top;
    var elemBottom = elemTop + element.height(); 


    //si la fenètre dépasse le bas de la div 
    if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
    {
      $(window).on('load scroll');
      element.addClass("underline");
    }
   
}





