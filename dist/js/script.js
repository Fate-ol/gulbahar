$(document).ready(function(){
	
	
	
	
	
	var rounded = function(number){
    return Math.round(parseFloat(number) * 100) / 100;
}
	
	//$('.cigarettes-galllery__item').css("max-height",$('#cigarettes .section__left').height()+"px !important");
	//alert($('#cigarettes .section__left').height()+"px !important");
	
  if (document.documentElement.clientWidth > 768) {
    height=$('#cigarettes .section__left').height();
  }  
  else {
    height=400;
  }


	height_scale=rounded((height-40)/1200);
	
	width=$('#cigarettes .cigarettes-galllery__item:first').width();
	width_scale=rounded(width/1288);
	
	console.log(height_scale+' '+width_scale);
	
	if (height_scale>width_scale)
	{
		find_scale=width_scale;
	}
	else
	{
		find_scale=height_scale;
	}
	
	$('.cigarettes-galllery__picposition .catalog-item__size').css("transform","scale("+find_scale+")");
	$('.cigarettes-galllery__fajek img').css("transform","scale("+find_scale+")");
  
	
	delay=false;
	check_timeout="";
	first_slide=true;
	function check_delay(check_first=false)
		{
			
			if (!check_first || first_slide)
			{
				timeDelay=0;
				delay=true;
				if (typeof($('.section:visible').data("delay"))!=undefined)
				{
					timeDelay=parseInt($('.section:visible').data("delay"));
				}
				
				clearTimeout(check_timeout);
				check_timeout=setTimeout(function()
				{
					delay=false;
				},timeDelay);
			}
			
			if (check_first)
			{
				$('.section:visible').addClass("animation");
				first_slide=false;
			}
			
		}
	
	$('.section').not(":first").hide();
	//check_delay();
	anim="";
	wait_delay=false;
function next()
		{
			
			if ($(".section").index($('.section:visible'))==0)
			{
				check_delay(true);
			}
			if (!anim)
			{
				if (!delay)
				{
					cur=$('.section:visible');
					
					if (cur.next(".section").length>0)
					{
						cur.fadeOut(function()
						{
							cur.removeClass("section-show animation");
							cur.next(".section").addClass("section-show animation").fadeIn();
							$('.galllery-slider').slick('refresh');
						});
						
					}
				}
				else
				{
					setTimeout(function()
					{
						next();
					},500);
				}

				
			}
			
		}
		function prev()
		{
			if (!anim)
			{
				
				cur=$('.section:visible');
				
				if (cur.prev(".section").length>0)
				{
					cur.removeClass("section-show animation").fadeOut(function()
					{
						cur.prev(".section").addClass("section-show animation").fadeIn();
						$('.galllery-slider').slick('refresh');
					});
					
				}
		
			}
		}
		
	
		$(window).keyup(function(e)
		{
			if (e.keyCode==38)//нажали вверх 
			{
				prev();
			}
			
			if (e.keyCode==40)//нажали вниз 
			{
				next();
			}
		});
		
		
		$(window).mousewheel(function (event, delta) {
			if (delta>0)
			{
				prev();
			}
			else
			{
				next();
			}
		});
	

  $('.main-menu__ico').click(function() {
    $( this ).closest('.main-menu').toggleClass('open');
    return false;
  });


  function slide_r()
	{
		$('.header-wrapper').css('height',$('.header-out').height()+'px');
		$('.footer-wrapper').css('height',$('.section-footer').height()+'px');
    if (document.documentElement.clientWidth > 768) {
      $('.cigarettes-galllery__item').css('height',$('.section__left').height()+40+'px');
    }  
    else {
       $('.cigarettes-galllery__item').css('height','400px');
    }
   
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