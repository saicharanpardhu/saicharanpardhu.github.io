$(document).ready(function() {
    $("#contact-form").submit(function(e){
                 document.getElementById("ajax-response1").style.display = "none";
                 document.getElementById("ajax-response2").style.display = "none";

                 var name= $("#c_name").val();
                 var email= $("#c_email").val();
                 var message= $("#c_message").val();
                 if (email == ""){
                  document.getElementById("ajax-response2").style.display = "block";
                 }
                 else{
                  document.getElementById("ajax-response1").style.display = "block";
                  $("#c_email").val('');
                  $("#c_name").val('');
                  $("#c_message").val('');
                  
                  // $.ajax({
                  //     type: 'post',
                  //     url: 'process.php',
                  //    data: $('form').serialize(),
                  //      success: function () {
                  //       alert('form was submitted');
                  //            }
                  //       });


                 }

                e.preventDefault();
                               });
          
    /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});
		
	});
	
	/* ======= Fixed page nav when scrolled ======= */    
    $(window).on('scroll resize load', function() {
        
        $('#page-nav-wrapper').removeClass('fixed');
         
         var scrollTop = $(this).scrollTop();
         var topDistance = $('#page-nav-wrapper').offset().top;
         
         if ( (topDistance) > scrollTop ) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
         }
         else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
         }

    });
    
    /* ======= Chart ========= */
    
    $('.chart').easyPieChart({		
		barColor:'white',//Pie chart colour
		trackColor: '#404040',
		scaleColor: false,
		lineWidth : 5,
		animate: 2000,
		onStep: function(from, to, percent) {
			$(this.el).find('span').text(Math.round(percent));
		}
	});  
	

    
    /* ======= Isotope plugin ======= */
    /* Ref: http://isotope.metafizzy.co/ */
    // init Isotope    
    var $container = $('.isotope');
    
    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        });
    });
    
    // filter items on click
    $('#filters').on( 'click', '.type', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.filters').each( function( i, typeGroup ) {
        var $typeGroup = $( typeGroup );
        $typeGroup.on( 'click', '.type', function() {
          $typeGroup.find('.active').removeClass('active');
          $( this ).addClass('active');
        });
    });
    

});