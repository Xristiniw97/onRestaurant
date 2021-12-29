
 $(window).on('resize', function (){
    var isMobile = window.matchMedia("only screen and (max-width: 767px)");

    //if (!isMobile.matches) {
    if (window.matchMedia("(min-width: 768px)").matches) {
        var $item = $('#bgCarouselSlider .carousel-item'); 
       /* var $wHeight = $(window).height();
        $item.height($wHeight); */
        $item.addClass('full-screen');
        
        $('#bgCarouselSlider .carousel-item .overlay').each(function() {
          var backgroundnew = "url('" + $(this).attr('data-deskimg') + "')";
            $(this).css({
                'background' : 'url(' + $(this).attr('data-deskimg') + ')',
                'background-size' : 'cover',
                'background-repeat' : 'no-repeat'
             }); 
    
        });

    }else{
       
       $('#bgCarouselSlider .carousel-item .overlay').removeClass('full-screen');
        $('#bgCarouselSlider .carousel-item .overlay').each(function() {
            /*$(this).css('height','auto');*/
            var backgroundnew = "url('" + $(this).attr('data-mobImg') + "')";
           // $(this).css('background', backgroundnew);   
            $(this).css({
                'background' : 'url(' + $(this).attr('data-mobImg') + ')',
                'background-size' : 'cover',
                'background-repeat' : 'no-repeat'
             });
        });
        
    }
}).trigger("resize");


$(document).ready(function(){
    
    // bgCarouselSlider
    $("#bgCarouselSlider").carousel({
        interval: 5000,
        pause: false
    });   
  
    
    $(".animate-to-id").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#next").offset().top
        }, 2000);
    });
 
    $('.offersCarousel').owlCarousel({
      smartSpeed: 300,
      loop: false,
      responsiveClass: true,
      margin:0,
      nav: false,
      navText: ["", ""],
      dots: false,
      items: 1,
      onInitialized:counter,
      onTranslated:counter,
      responsive: {
      767: {
        nav: true,
      }}
    });
  
    $('.mainPagesOwlCarousel').owlCarousel({
        smartSpeed: 300,
        loop: false,
        responsiveClass: true,
        margin:0,
        nav: true,
        navText: ["", ""],
        dots: false,
        items: 1,
        onInitialized:counter,
        onTranslated:counter
    });   
    
    function counter(event) {
      var items = event.item.count;
      var item = event.item.index + 1;
      if(item<10) {
        item = "0"+item;
      }
      if(items<10) {
        items = "0"+items;
      }
      $('#counter').html(item+ "  /  "+items);
    }
      
 
    /*Scroll to top*/
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
      });
      $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
              return false;
      }); 


    $(".menu-btn").click(function() {
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
              $( "#navbar").css("height", "100vh");
              $( "body").css("overflow", "hidden");
              $("header").addClass('menuHeader');
        } else {
              $( "#navbar").css("height", "0");
              $( "body").css("overflow", "auto");
              $( "header").css("transition-duration", "1s");
              $("header").removeClass('menuHeader');
        }
    });
    /*
    //MENU
    $( ".openMenu" ).click(function() {
      $( "#navbar").css("height", "100vh");
      $( "body").css("overflow", "hidden");
      $("header").addClass('menuHeader');
    });
    $( ".closeMenu" ).click(function() {
      $( "#navbar").css("height", "0");
      $( "body").css("overflow", "auto");
      $( "header").css("transition-duration", "1s");
      $("header").removeClass('menuHeader');
    });
*/


    $(".carouselBtn").click(function() {
      $(".overlay").css("filter","none");
    });


    $(".carouselBtn").mouseenter(function() {
      $(".overlay").css("filter","none");
    });
   
    $(".carouselBtn").mouseleave(function() {
      $(".overlay").css("filter"," grayscale(80%)");
    });


    $(window).on("scroll touchmove", function () {
      $('#header_nav').toggleClass('tiny', $(document).scrollTop() > 0);
    });
    
    
/* MODAL ON HOMEPAGE - OFFERS*/
   setTimeout(function(){
       $('#popupModal').modal('show');
   }, 3000);  
   
    /*
  // add all to same gallery
  $(".galleryPage .fancy").attr("data-fancybox","mygallery");
  // assign captions and title from alt-attributes of images:
  $(".galleryPage .fancy").each(function(){
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });*/ 
  // start fancybox:
   // $(".galleryPage .fancy").fancybox();
   
 

   
       $("#attachment").on("change", function (e) {
     
        //Maximum allowed size in bytes 5MB Example
        //Change first operand(multiplier) for your needs
        const maxAllowedSize = 5 * 1024 * 1024;   //((file[0].size/1024)/1024).toFixed(4); 
      
        var file = e.currentTarget.files; // puts all files into an array
       var filesize=file[0].size;
       //alert(filesize);
         if(filesize > maxAllowedSize){
            $(this).removeClass("input-validation-error");
            $("#approvedFiles").text("File must be smaller than 5MB.");
            $("#approvedFiles").removeClass( "valid" );
            
            $("#attachment").val('');
        } else {
            $(this).removeClass("input-validation-error");
            $("#approvedFiles").empty();
            $("#approvedFiles").addClass( "valid" );
        }
    
      
    }); 
     
     
     
      /* FORMS RECAPTCHA
    ================================== */
   var captchaLoaded = false;
   // $(document).ready(function(){
        $(".formRecap input").on('focus', function() {
            // If we have loaded script once already, exit.
            if (captchaLoaded) {
              return;
            }
            
            //var head = document.getElementsByTagName('head')[0];
            var recaptchaScript = document.createElement('script');
            //recaptchaScript.type = 'text/javascript';
            recaptchaScript.src = 'https://www.google.com/recaptcha/api.js'
            recaptchaScript.async = true;
			recaptchaScript.defer = true;
           // head.appendChild(recaptchaScript);
			document.body.appendChild(recaptchaScript);
            captchaLoaded = true;
            onload();
        });    
        // onload();
   // });         
     
     
 });   
 
 
 $(document).ready(function(){
         
  var heroSlider = $('.gallery_slider');


  heroSlider.on('initialized.owl.carousel changed.owl.carousel', function(e) {
      if (!e.namespace)  {
        return;
      }
      var carousel = e.relatedTarget;
      $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({ 
        smartSpeed: 1500,
        responsiveClass: true,  
        autoplay: false,
        loop: true,
        margin:180,
        nav: true,
        dots: false,
        items: 1,
        navText: [" ", " "]
     });


});
