$(document).ready(function(){
    var countArray = [300, 18, 12, 90];
    var countObject = {
        countUp : function(i,count0, count1, count2, count3){
            eval(`count${i}.start();`)
        }
    };
    for(var i = 0; i < countArray.length; i++){
        eval(`var count${i} = new countUp.CountUp("count${i}",${countArray[i]},{startVal:0})`);
    }
    $("#fullpage").fullpage({
        navigation: true,
        navigationPosition: 'right', 
        scrollingSpeed: 1000,
        scrollOverflow: true,
        onLeave:function(index){
            if(index == 4){
                var i = 0;
                var countInterval = setInterval(function(){
                    countUpFunc(i);
                    i++;
                    if(i >= countArray.length){
                        clearInterval(countInterval);
                    }
                },500)
                $(".section").eq(4).on('mousewheel',function(e){
                    var wheel = e.originalEvent.wheelDelta;
                    var data = $(".fp-scroller").eq(1).css("transform");
                    var text = $(".section").eq(4).find(".sec-inner").find(".sec-text.left");
                    //스크롤값을 가져온다.
                    if(wheel>0){
                        //스크롤 올릴때
                        data = data.split(',')[5].split(')')[0];
                        text.css({
                            transform:`matrix(1,0,0,1,0,${Math.abs(data)})`
                        })
                    } else {
                        //스크롤 내릴때
                        data = data.split(',')[5].split(')')[0];
                        text.css({
                            transform:`matrix(1,0,0,1,0,${Math.abs(data)})`
                        })
                    }
                });
            }
            if(index == 5){
                var i = 0;
                var countInterval = setInterval(function(){
                    countUpFunc(i);
                    i++;
                    if(i >= countArray.length){
                        clearInterval(countInterval);
                    }
                },500)
            }
        }
    })
    function countUpFunc(i){
        countObject.countUp(i, count0, count1, count2, count3)
    }
})
