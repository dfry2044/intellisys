var header = $("header");

$(window).scroll(function(){
    var scrollY = $(window).scrollTop();

    if(scrollY < 65){
        header.removeClass("scroll");
    }else{
        header.addClass("scroll");
    }
})

var menuOpenBtn     = $(".hambuger-open-btn");
var menu            = $(".menu");
var menuTitle       = $(".menu .sec-inner > li ul li.menu-title");

menuOpenBtn.click(function(){
    if(menu.hasClass("show")){
        menu.removeClass("show");
        header.removeClass("menu-open");
    }else{
        menu.addClass("show");
        header.addClass("menu-open");
    }
})

menu.on('scroll touchmove mousewheel', function(e){

    e.preventDefault();
    
    e.stopPropagation(); 
    
    return false;
})

menuTitle.click(function(){
    if($(this).hasClass("show")){
        $(this).removeClass("show");
    }else{
        $(this).addClass("show")
    }
})