var secTitle            = document.querySelectorAll(".sec-title");
var diagramImg          = document.querySelectorAll(".sec-diagram");
var sideNav             = document.querySelectorAll(".page-side");
var visualSec           = document.querySelectorAll(".page-visual");
var waveText            = document.querySelectorAll(".sec-wave-content");
var winY; 
var titleTop;
var imgTop;
var waveTop;

$(window).scroll(function(){
    winY = $(window).scrollTop();

    secTitle.forEach(function(el, index, arr2){
        titleTop = el.getBoundingClientRect().top;
        if(winY / 1.5 >= titleTop){
            el.classList.add("show");
        }
    })
    diagramImg.forEach(function(el, index, arr2){
        imgTop = el.getBoundingClientRect().top;

        if(winY / 1.5 >= imgTop){
            el.classList.add("show");
        }
    })
    waveText.forEach(function(el, index, arr2){
        waveTop = el.getBoundingClientRect().top;

        if(winY / 1.5 >= waveTop){
            el.classList.add("show");
        }
    })
})