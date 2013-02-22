jQuery(document).ready(function($){

  // $('body').delay(100).hide().fadeIn(1000, 'swing')

	$('.twitter').hover(function(){
		$('.card').addClass('twitter white');
		$(this).siblings().addClass('faded')
	}, function(){
		$('.card').removeClass('twitter white')
		$(this).siblings().removeClass('faded')
	})

	$('.rdio').hover(function(){
		$('.card').addClass('rdio white');
		$(this).siblings().addClass('faded')
	}, function(){
		$('.card').removeClass('rdio white')
		$(this).siblings().removeClass('faded')
	})

	$('.instagram').hover(function(){
		$('.card').addClass('instagram white');
		$(this).siblings().addClass('faded')
	}, function(){
		$('.card').removeClass('instagram white')
		$(this).siblings().removeClass('faded')
	})

	$('.github').hover(function(){
		$('.card').addClass('github white');
		$(this).siblings().addClass('faded')
	}, function(){
		$('.card').removeClass('github white')
		$(this).siblings().removeClass('faded')
	})

});

