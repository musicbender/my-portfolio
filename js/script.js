$(document).ready(function(){
    
    
    
    $('.pic-div').mouseenter(function(){
        var caption = $(this).children().children().eq(1);
        caption.stop().fadeIn(500);
    });
    $('.pic-div').mouseleave(function(){
        var caption = $(this).children().children().eq(1);
        caption.stop().fadeOut(500);
    });
});