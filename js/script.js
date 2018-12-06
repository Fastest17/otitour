//menu
$(document).ready(function(){
    var menuBtn = $('#icon-menu');
    var menu = $('.top-nav');

    menuBtn.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('top-nav_active');
    })
});

//slider

$('.slider').on('init', function(event, slick){
    var $items = slick.$dots.find('li');
    $items.addClass('dots');
    $items.find('button').remove();
});

$('.slider').slick({
    arrows: false,
    appendDots: $('.dots-item'),
    dots: true
});

