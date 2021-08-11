function resize(){

}

$(document).ready(function(){
    resize();
});
  
$(window).resize(function(){
    resize();
});

$(window).on('load',function(){
    resize();
});
$(document).ready(function(){
	$('#home .container header span.icon').click(function(){
		$('.menu').slideDown();
	})
	$('.menu span.icon').click(function(){
		$('.menu').slideUp();
	})
})


