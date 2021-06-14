$(function(){
    var cnt0 = 0;
    counterFn();
    function counterFn() {
        id0 = setInterval(counter0Fn, 50);
        function counter0Fn()  {
            cnt0++;
            if(cnt0 > 300) {
                clearInterval(id0);
            }else{
                $(".counter1").text(cnt0);
            }
        }
    }
});
