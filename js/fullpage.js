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
            // if(index == 4){
            //     for(var i = 0; i < countArray.length; i++){
            //         eval(`count${i}.reset();`)
            //     }
            // }
            if(index == 4){
                var i = 0;
                var countInterval = setInterval(function(){
                    countUpFunc(i);
                    i++;
                    if(i >= countArray.length){
                        clearInterval(countInterval);
                    }
                },500)
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
