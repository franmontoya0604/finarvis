(function ($) {
    $(window).scroll(function (){
        
        
        if(!$( ".fixed-top" ).hasClass( "show" )){

          var scroll = $(window).scrollTop();
          
        if (scroll>0) {
            $("nav").addClass("change");
         
           
            
        }
        else{
            $("nav").removeClass("change");
       
        }
      }
        
      
    });


    $( '[data-toggle="lightbox"]').click(function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      });
})(jQuery);
//preguntas alineamiento con container?    palabras slidershow    carousel por debajo de soluciones    nav cuando baja cambia de color?