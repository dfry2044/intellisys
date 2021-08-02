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

    // 각 페이지 섹션의 타이틀 FadeIn 애니메이션
    secTitle.forEach(function(el, index, arr2){
        titleTop = el.getBoundingClientRect().top;
        if(winY / 2 >= titleTop){
            el.classList.add("show");
        }
    })

    // 각 페이지 섹션의 도식화 또는 이미지 FadeIn 애니메이션
    diagramImg.forEach(function(el, index, arr2){
        imgTop = el.getBoundingClientRect().top;

        if(winY / 2.5 >= imgTop){
            el.classList.add("show");
        }
    })

    // 각 페이지 웨이브 있는 섹션의 텍스트 FadeIn 애니메이션
    waveText.forEach(function(el, index, arr2){
        waveTop = el.getBoundingClientRect().top;

        if(winY / 2 >= waveTop){
            el.classList.add("show");
        }
    })
    
    // 각 페이지 섹션의 도식화그룹 또는 이미지그룹 FadeIn 애니메이션
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

    $(".move-btn-group").closest(".sec-move").animate({
        scrollLeft : $(this).offset().left
    },1000)
})