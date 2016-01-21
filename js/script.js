$(document).ready(function(){
    
    $('.caption').prepend('<svg class="bigTriangleColor caption-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none"><path d="M0 100 L50 0 L100 100 Z" /></svg>');
    
    
    $('.pic-div').mouseenter(function(){
        var caption = $(this).children().children().eq(1);
        caption.stop().animate({top: '-115px', opacity: '0.7', easing: 'easein'}, 500);
    });
    $('.pic-div').mouseleave(function(){
        var caption = $(this).children().children().eq(1);
        caption.stop().animate({top: '115px', opacity: '0', easing: 'easein'}, 500);
    });
});