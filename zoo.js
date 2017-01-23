$(document).ready(function(){

	var total = 5;
	var current = 1;

	$(".left").click(function() {
		if(current>1){
			$(".sliderbox").animate({left:"+=840"},500)
			current--;
		}
	})//end left click
	$(".right").click(function() {
		if(current<total) {
			$(".sliderbox").animate({left:"-=840"},500)
			current++;
		}
	})//end right click

	$(".toTop").click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	})//end click to get to top

	$(window).scroll (function () {
    var sT = $(this).scrollTop();
        if (sT >= 100) {
            $('nav').addClass('shrink')

        }else {
            $('nav').removeClass('shrink')
        }
  	})//end of shrinking the nav bar

});