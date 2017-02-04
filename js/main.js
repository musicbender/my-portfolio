$(document).ready(function(){

/*******adds SVG code for work sample items. Removes DRY code from HTML*******/

    const captionSvg = '<svg class="bigTriangleColor caption-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 101" preserveAspectRatio="none"><path d="M0 100 L75 0 L100 100 Z" /></svg>'

    $('.caption').prepend(captionSvg); 


//*******hover effect and caption show/hide for work samples*******//

    const $pic = $('.pic-div');

    $pic.on('click', function() {
        var caption = $(this).children().children().eq(1);
        var isHover = $(this).is(":hover");

        caption.css({transform: 'translateY(-115)', opacity: '0'});
        if (isHover) {
            $(this).addClass('pic-div-clicked');
            $(this).children().children().first().addClass('pic-clicked');
        }
    });


//*******Skills Animation*******//

    // const $skills = $('.tlt');
    // if (Modernizr.cssanimations) {
    //     $skills.on('inview', function(event, isInView) {
    //         if(isInView) {
    //             $skills.textillate({
    //                 initialDelay: 100,
    //                 in: {
    //                         effect: 'fadeInUp',
    //                         delay: 90
    //                     },
    //                 type: 'word'
    //             });
    //         }
    //     });
    // } else {
    //     $skills.css('opacity', '1');
    // }


/*******Smooth Scroll*******/

    $('.arrows-link').click(function(e) {
      e.preventDefault();
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, .main').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
});
