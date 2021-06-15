$(document).ready(function(){
    
    var cnt = 0;
    var counterNum = 1;
    var counterLen = $(".counter").length;
    function countUp(number){
        counterFn(number);
        if(counterNum != counterLen){
            counterNum++;
        }else{
            counterNum = 0;
        }
    };
    function counterFn(number) {
        var id = setInterval(function(){
            if(cnt > number) {
                clearInterval(id);
            }else{
                console.log("================")
                console.log(counterNum);
                console.log(number);
                console.log(cnt);
                console.log("================")
                $(".counter").eq(counterNum).text(cnt);
            }
            cnt++;
        }, 20);
    }

    $("#fullpage").fullpage({
        navigation: true,
        navigationPosition: 'right', 
        scrollingSpeed: 1000,
        scrollOverflow: true,
        onLeave:function(index){
            if(index == 4){
                setTimeout(function(){
                    countUp(300);
                },0)
                setTimeout(function(){
                    countUp(18);
                },1500)
                // setTimeout(function(){
                //     countUp(12);
                // },25000000000)
                // setTimeout(function(){
                //     countUp(90);
                // },25000000000)
            }
        }
    })
})
