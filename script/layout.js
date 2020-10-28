
function headerStuff() {
    var y = window.pageYOffset;
    var pxDown = 130;

    if(y > pxDown && $(window).width() > 768) {
        $('#mainnav').addClass('fixed');
        $('#main').css('margin-top', '39px');
    } else {
        $('#mainnav').removeClass('fixed');
        $('#main').css('margin-top', '0px');
    }
}

$(window).on('scroll', function() {
    headerStuff();
});

$(window).on("resize",function(e){
    headerStuff();
});