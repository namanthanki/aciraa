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
});
