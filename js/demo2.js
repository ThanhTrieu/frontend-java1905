$(function(){
	// bat su kien click cho button
	$('.btn').click(function(){
		// an box
		//$('.box').hide(5000);
		// 5000: milisecond - hieu ung xay ra trong bao lau
		//$('.box').hide('slow');
		//$('.box').hide('fast');
		
		//$('.box').fadeOut(5000);
		$('.box').slideUp(5000);
	});

	$('.btn2').click(function(){
		// hien thi box
		//$('.box').show(5000);
		
		//$('.box').fadeIn(5000);
		$('.box').slideDown(5000);
	});

	$('.btn3').click(function(){
		//$('.box').toggle(5000);
		//$('.box').fadeToggle(5000);
		$('.box').slideToggle(5000);
	});
});