var secTitle            = document.querySelectorAll(".sec-title");
var diagramImg          = document.querySelectorAll(".sec-diagram");
var sideNav             = document.querySelectorAll(".page-side");
var visualSec           = document.querySelectorAll(".page-visual");
var waveText            = document.querySelectorAll(".sec-wave-content");
var arrSection          = document.querySelectorAll("section.moveDiagram");
var moveBtn             = document.querySelectorAll(".move-btn-group button");
var winY;
var titleTop;
var imgTop;
var waveTop;
var arrSectionTop;

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
    arrSection.forEach(function(el, index, arr2){
        arrSectionTop = el.getBoundingClientRect().top;

        if(winY / 2 >= arrSectionTop){
            for(var i = 0; i < moveBtn.length; i++){
                moveBtn[i].classList.remove("active");
            }

            moveBtn[index].classList.add("active");
        }
    })
})

$(".move-btn-group button").click(function(){
    // arrSectionTop   = el.getBoundingClientRect().top;
    var moveIdx     = $(this).index();

    $("html, body").animate({
        scrollTop: $("section.moveDiagram").eq(moveIdx).offset().top - 50
    },'slow')

    var _scrollX = $(".move-btn-group").closest(".sec-move").scrollLeft();

    $(".move-btn-group").closest(".sec-move").animate({
        scrollLeft : $(this).offset().left
    },1000)
})