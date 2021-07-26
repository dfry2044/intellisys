var dropBtn         = $(".prj-drop-wrap");
var dropTitle       = $(".prj-drop-content p");
var dropSub         = $(".prj-drop-sub li button");
var prjSec          = document.querySelectorAll(".prj-list>li");
var winY;
var prjSecTop;

var prjArray        = [
     "인텔리시스 프로젝트"
    ,"서울대학교 지능형 데이터 시스템 연구실 프로젝트"
]

dropBtn.click(function(){
    if($(this).hasClass("show")){
        $(this).removeClass("show");
    }else{
        $(this).addClass("show");
    }
})
dropSub.click(function(){
    var dropClickText = $(this).text();
    
    dropTitle.text(dropClickText);

    switch (dropClickText) {
        case prjArray[0]:
            
            $("html, body").animate({
                scrollTop: $(".prj-wrap > li").eq(0).offset().top - 100
            },'slow');

            break;
    
        case prjArray[1]:
    
            $("html, body").animate({
                scrollTop: $(".prj-wrap > li").eq(1).offset().top - 100
            },'slow');

            break;

        default:
            break;
    }
})

$(window).scroll(function(){
    winY = $(window).scrollTop();

    if(winY >= $(".prj-wrap >li:first-child li").last().offset().top - 100){
        dropTitle.text(prjArray[1]);
    }else{
        dropTitle.text(prjArray[0]);
    }
})