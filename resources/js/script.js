$(document).ready(function () {

    $('.js--section-games').waypoints(function(direction) {
        if (direction == down) {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
})