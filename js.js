(function ($) {
    $(window).scroll(function (){
        
        
        if(!$( ".fixed-top" ).hasClass( "show1" )){

          var scroll = $(window).scrollTop();
          
        if (scroll>0) {
            $("nav").addClass("change");
            $("a#nav1").addClass(" change1")
            $("nav div .c1").addClass(" change1");
            $("nav .border-w").addClass(" change2");
           
            
        }
        else{
            $("nav").removeClass("change");
            $("a#nav1").removeClass("change1");
            $("nav div .c1").removeClass(" change1");
            $("nav .border-w").removeClass(" change2");
        }
      }
        
      
    });


    $( '[data-toggle="lightbox"]').click(function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      });
})
//preguntas alineamiento con container?    palabras slidershow    carousel por debajo de soluciones    nav cuando baja cambia de color?