$(document).ready(function() {
    $("input[type=radio]").uniform();
    $("select").fancySelect();
    $('input[placeholder], textarea[placeholder]').placeholder();
     $('.slider').bxSlider({
        mode:'fade',
        speed:1000,
        touchEnabled: false,
        controls: false,
        auto: true,
        pause: 9000,
    });
     $(".item-list li").mouseenter(function(){  
        $(this).find($('.item-list .hover')).stop(true, true).fadeIn(600);
        return false;
     });
      $('.item-list li').mouseleave(function(){  
        $(this).find($('.item-list .hover')).stop(true, true).fadeOut(400);
        return false;
     });
      jQuery(document).on('click', ".menu_trigger", function (e) {
        e.preventDefault()
        window.setTimeout(function() {
            if(jQuery('#nav').hasClass('clicked')){
                jQuery('#nav').stop(true,true).animate({height:'hide'},100);
                jQuery('#nav').removeClass('clicked');
            }else{
                jQuery('#nav').stop(true,true).animate({height:'show'},400);
                jQuery('#nav').addClass('clicked');
            }
        }, 400);
        return false;
    });
    jQuery("#nav").on('click', '.drops', function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active").parent().next().slideUp();
        } else {
            jQuery(this).addClass("active").parent().next().slideDown();
        }
        return false;
    });

    function insertCurrentYear() {
        const currentYear = new Date().getFullYear();
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = currentYear;
        }
    }
    
    // call the function insertCurrentYear()
    insertCurrentYear();
      
}); 
$(window).resize(function() {
    if($(document).width() > 768){
      $( "#nav" ).addClass("active");
      $( "#nav ul" ).attr('style','');
      $( "#nav" ).attr('style','');
      $( "#nav" ).removeClass("clicked");
      $( "#nav .active" ).removeClass('active');
    }
    else {
        $( "#nav" ).removeClass("active");
    }
});