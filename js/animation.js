var secTitle            = document.querySelectorAll(".sec-title");
var diagramImg          = document.querySelectorAll(".sec-diagram");
var sideNav             = document.querySelector(".page-side");
var visualSec           = document.querySelector(".page-visual");
var winY; 
var titleTop;
var imgTop;

$(window).scroll(function(){
    winY = $(window).scrollTop();

    secTitle.forEach(function(el, index, arr2){
        titleTop = el.getBoundingClientRect().top;
        if(winY / 2 >= titleTop){
            el.classList.add("show");
        }
    })
    diagramImg.forEach(function(el, index, arr2){
        imgTop = el.getBoundingClientRect().top;

        if(winY / 2 >= imgTop){
            el.classList.add("show");
        }
    })
})