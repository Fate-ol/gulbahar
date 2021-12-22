$(document).ready(function(){
	
function isTouchDevice() {
 try {
    document.createEvent("TouchEvent");
    return true;
  }
  catch (e) { return false; }
 }	
	
	$('input.styler, select.styler').styler();
	
  function section__text_r()
	{
		
		if (document.documentElement.clientWidth > 768) 
		{
		  $('.section__text').css('max-height',($(window).height()-($('.head').outerHeight(true)+$('.nav-sub').outerHeight(true)+$('.section__btn').outerHeight(true)))+'px');

		  $('.cigarettes-galllery__item').css('height',($(window).height()-$('.head').outerHeight(true))+'px');
		}
		else 
		{
		  $('.section__text').css('max-height','none');

		  $('.cigarettes-galllery__item').css('height','300px');
		}
		$('.cigarettes-galllery__item').css('max-height',$('.section__left').height()+'px');
	}
	
		var rounded = function(number){
    return Math.round(parseFloat(number) * 100) / 100;
}
	
	//$('.cigarettes-galllery__item').css("max-height",$('#cigarettes .section__left').height()+"px !important");
	//alert($('#cigarettes .section__left').height()+"px !important");
	function check_scale()
	{


    if (document.documentElement.clientWidth > 768) {
      height=$('#cigarettes .section__left').height();
    }  
    else {
      height=300;
    }

    height_scale=rounded((height-50)/1220);
    
    width=$('#cigarettes .cigarettes-galllery__item:first').width();
    width_scale=rounded(width/1320);
    
    console.log(height_scale+' '+width_scale);
    
    if (height_scale>width_scale && width_scale!=0)
    {
      find_scale=width_scale;
    }
    else
    {
      find_scale=height_scale;
    }
    $('.cigarettes-galllery__picposition .catalog-item__size').css("transform","scale("+find_scale+")");



    /* catalog category page*/
    height2=$('.catalog-item__piccigaret').height();
    height2_scale=rounded((height2-50)/1220);

    width2=$('.catalog-item__piccigaret').width();
    width2_scale=rounded(width2/1320);

    console.log(height2_scale+' '+width2_scale);

    if (height2_scale>width2_scale)
    {
      find_scale=width2_scale;
    }
    else
    {
      find_scale=height2_scale;
    }
    $('.catalog-item__piccigaret .catalog-item__size').css("transform","scale("+find_scale+")");



  }
	
	 function slide_r()
	{
		$('.header-wrapper').css('height',$('.header-out').height()+'px');
		$('.footer-wrapper').css('height',$('.footer.footer-pages').outerHeight(true)+'px');
    //if (document.documentElement.clientWidth > 768) {
      //$('.cigarettes-galllery__item').css('height',$('.section__left').height()+40+'px');
    //}  
    //else {
       //$('.cigarettes-galllery__item').css('height','400px');
    //}
   
	}
	
	$(window).resize(function()
	{
		section__text_r();
		check_scale();
		slide_r();
	});
	section__text_r();
	check_scale();
	slide_r();
	
	$(window).on("load", function()
	{
		section__text_r();
		check_scale();
		slide_r();
	});

	

	

    
	
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
			
			if (check_first && first_slide)
			{
				$('.section:visible').addClass("animation");
				first_slide=false;
			}
			
		}
	
	
	check_delay();
	anim="";
	wait_delay=false;
function next()
		{
			
				if ($('.scroll-down-b').is(":visible"))
					{
						$('.scroll-down-b').fadeOut();
					}
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
						if ($(".section").index(cur)==0)
							{
								cur.removeClass("animation"); //animation
							}
							
							cur.removeClass("section-show"); //animation
							$('.cigarettes-galllery__picposition.active_animation_cigaret').removeClass('active_animation_cigaret');
							cur.next(".section").addClass("section-show").fadeIn(function()
							{
								//alert(1);
								$(window).triggerHandler("resize");
								$('.cigarettes-galllery__picposition').not('.active_animation_cigaret').addClass('active_animation_cigaret');
								//$('.galllery-slider')[0].slick.resize();
								//check_scale();
							});
							

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
						$('.cigarettes-galllery__picposition.active_animation_cigaret').removeClass('active_animation_cigaret');
					cur.removeClass("section-show").fadeOut(function()
					{
						cur.prev(".section").addClass("section-show").fadeIn(function()
							{
								/*if ($(".section").index(cur.prev(".section"))>0)
								{
									$(this).addClass("animation")
								}*/
								//$('.galllery-slider').slick('refresh');
								//check_scale();
								$(window).triggerHandler("resize");
								$('.cigarettes-galllery__picposition').not('.active_animation_cigaret').addClass('active_animation_cigaret');
							});

					});
					
				}
		
			}
		}
		
		//alert("touch ".isTouchDevice());
		if (!isTouchDevice())
		{
			$('.section').not(":first").hide();
			$(window).keyup(function(e)
			{
				if (e.keyCode==38) //нажали вверх 
				{
					prev();
				}
				
				if (e.keyCode==40) //нажали вниз 
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
		}
		else
		{
			$('.scroll-down-b').hide();
		}
	

  $('.main-menu__ico').click(function() {
    $( this ).closest('.main-menu').toggleClass('open');
    return false;
  });


$('.scroll-down-b a').click(function()
{
	
		next();
	return false;
});
 
	






  $('.galllery-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,

  });
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,

  });


  $('.link-arr').click(function() {
    $( this ).closest('.catalog-tile-out').toggleClass('hide');
    return false;
  });

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