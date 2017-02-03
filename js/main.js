$(document).ready(function(){

    //*******adds SVG code for work sample items. Removes DRY code from HTML*******//

    const captionSvg = '<svg class="bigTriangleColor caption-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 101" preserveAspectRatio="none"><path d="M0 100 L75 0 L100 100 Z" /></svg>'

    $('.caption').prepend(captionSvg);


    //*******hover effect and caption show/hide for work samples*******//

    const $pic = $('.pic-div');
    const $window = $(window);

    $pic.mouseenter(function(){
        var caption = $(this).children().children().eq(1);
        caption.stop().animate({top: '-115px', opacity: '0.9'}, 350);
    });
    $pic.mouseleave(function(){
        var caption = $(this).children().children().eq(1);
        caption.stop().animate({top: '115px', opacity: '0'}, 350);
    });
    $pic.on('click', function() {
        var caption = $(this).children().children().eq(1);
        var isHover = $(this).is(":hover");

        caption.stop().animate({top: '115px', opacity: '0'}, 0);
        if (isHover) {
            $(this).addClass('pic-div-clicked');
            $(this).children().children().first().addClass('pic-clicked');
        }
    });


/*******IF MOBILE, FORCE HOVER ON THUMBS*******/
    checkSize();

    $window.resize(checkSize());

    function checkSize() {
        if ($pic.css("z-index") === "11") {
          var caption = $pic.children().children().eq(1);
          caption.stop().animate({top: '-115px', opacity: '0.9'}, 350);
        }
    }



    //*******Skills Animation*******//

    const $skills = $('.tlt');
    if (Modernizr.cssanimations) { //if browser supports it
        skillsAnimate();
    } else {  //if not
        $skills.css('opacity', '1');
    }

    function skillsAnimate () {
        $skills.on('scrollSpy:enter', function() {
            $skills.textillate({
                initialDelay: 100,
                in: {
                        effect: 'fadeInUp',
                        delay: 90
                    },
                type: 'word'
            });
        });
        $('.tlt').scrollSpy();
    }

});
