$(document).ready(function(){

  $('.main-menu__ico').click(function() {
    $( this ).closest('.main-menu').toggleClass('open');
    return false;
  });


  function slide_r()
	{
		$('.header-wrapper').css('height',$('.header-out').height()+'px');
		$('.footer-wrapper').css('height',$('.section-footer').height()+'px');
   
	}
	$(window).resize(function()
	{
    slide_r();
	});
	section__text_r();
	
	$(window).on("load", function()
	{
		slide_r();
	});



  function section__text_r()
	{
    if (document.documentElement.clientWidth > 768) {
      $('.section__text').css('max-height',
      ($(window).height()-
      ($('.head').outerHeight(true)+$('.nav-sub').outerHeight(true)+$('.section__btn').outerHeight(true))
      )+'px');

      $('.cigarettes-galllery__item').css('max-height',
      ($(window).height()-$('.head').outerHeight(true))+'px');
    }
    else {
      $('.section__text').css('max-height','none'
      );

      $('.cigarettes-galllery__item').css('max-height','none'
      );
    }
	}
	$(window).resize(function()
	{
    section__text_r();
	});
	section__text_r();
	
	$(window).on("load", function()
	{
		section__text_r();
	});


  



  $('.galllery-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    //dots: true,
    //mobileFirst: true,
  //  responsive: [
  //      {
  //          breakpoint: 991,
  //          settings: {
  //            arrows: false,
  //            slidesToShow: 2
  //          }
  //      },
  //      {
  //        breakpoint: 767,
  //        settings: {
  //          arrows: false,
  //          slidesToShow: 1
  //        }
  //  },
  //]
  });
  (function($) {
    $(function() {
    
      $('input.styler, select.styler').styler();
    
    });
  })(jQuery);
});



	
let bg = document.querySelectorAll('.hookah-pic__leaf img');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg[i].style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });    
}
let bg2 = document.querySelectorAll('.hookah-pic__papaya img');
for (let i = 0; i < bg2.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg2[i].style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    });    
}
let bg3 = document.querySelectorAll('.hookah-pic__malina img');
for (let i = 0; i < bg3.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg3[i].style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });    
}