export const throttle = (function(){
    var firstTime = 0;
    return function(cb,time=1000){
        var lastTime = new Date().getTime();
        if(lastTime - firstTime > time){
            cb();
            firstTime = lastTime;
        }
    }

})()