var header = $("header");

$(window).scroll(function(){
    var scrollY = $(window).scrollTop();

    if(scrollY < 65){
        header.removeClass("scroll");
    }else{
        header.addClass("scroll");
    }
})