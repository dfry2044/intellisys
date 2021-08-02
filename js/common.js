// 스크롤 시 헤더 애니메이션
var header = $("header");

$(window).scroll(function(){
    var scrollY = $(window).scrollTop();

    if(scrollY < 65){
        header.removeClass("scroll");
    }else{
        header.addClass("scroll");
    }
})

// 햄버거 메뉴 애니메이션
var menuOpenBtn     = $(".hambuger-open-btn");
var menu            = $(".menu");
var menuTitle       = $(".menu .sec-inner > li ul li.menu-title");
var body            = $("body");

menuOpenBtn.click(function(){
    if(menu.hasClass("show")){
        menu.removeClass("show");
        header.removeClass("menu-open");
        body.removeClass("menu-open");
    }else{
        menu.addClass("show");
        header.addClass("menu-open");
        body.addClass("menu-open");
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

// 각 팝업 별로 클릭 시 해당 팝업 열림/닫힘 코드
var popup               = $(".popup");
var popupOepnBtn        = $(".popup-open-btn");
var popupCloseBtn       = $(".popup-close-btn");

// 팝업이 추가 될 수 있을 상황에 대비해 배열로 팝업 이름 작성
var popupArray = [
     "technology"
    ,"school"
];

popupOepnBtn.click(openPopup);
popupCloseBtn.click(closePopup);

function openPopup(event){
    var target = $(event.target);
    var targetClass = target[0].classList[1];
    
    popupArray.forEach(function(el, index, arr2){
        if(targetClass == el){
            popup.eq(index).addClass("show");
        }else{
            return false;
        }
    })
}

function closePopup(event){
    popup.removeClass("show");
}