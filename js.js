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


    $('#navbarToggleExternalContent').on('show.bs.collapse', function () {
      $("#td").parent().addClass("show1");
     
      $("button svg.color-white").removeClass("fa-bars")
      $("button svg.color-white").addClass("fa-times")
      
    

      $(".c1").removeClass("change1")
     
        $("nav").removeClass("change");
      
    })

    $('#navbarToggleExternalContent').on('hide.bs.collapse', function () {
      $("#td").parent().removeClass("show1");
      
      $("button svg.color-white").addClass("fa-bars")
      $("button svg.color-white").removeClass("fa-times")
      
    
      
    })
})(jQuery);
//preguntas alineamiento con container?    palabras slidershow    carousel por debajo de soluciones    nav cuando baja cambia de color?