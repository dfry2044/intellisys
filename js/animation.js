var secTitle            = document.querySelectorAll(".sec-title");
var diagramImg          = document.querySelectorAll(".sec-diagram");
var winY; 
var titleTop;
var imgTop;

$(window).scroll(function(){
    winY = $(window).scrollTop();

    secTitle.forEach(function(el, index, arr2){
        titleTop = el.getBoundingClientRect().top;
        console.log(winY / 1.5);
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
})