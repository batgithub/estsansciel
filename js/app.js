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






