export const throttle = function(cb,time=300){
    var firstTime = 0;
    return function(){
        var lastTime = new Date().getTime();
        if(lastTime - firstTime > time){
            cb();
            firstTime = lastTime;
        }
    }

}