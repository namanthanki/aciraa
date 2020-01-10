$ (document).ready(function(){
    $('.js--section-games').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    $('.js--section-gamespage').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '-120px'
    });
    $('.js--sect-blogpage-blog').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '-1px'
    });
    $('.js--sect-team').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '-1px'
    });
});

/* Mobile-Burger-Nav */

$('.js--burger-nav').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('js--nav-icon-i');

    nav.slideToggle(200);
    if(icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    }
    else {
        icon.addClass('ion-navicon-round')
    }
    
});

