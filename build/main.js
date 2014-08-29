

(function main(){
    var size, rule, speed, la;
    var btn = document.querySelector("#start");
    btn.onclick = function(){

        var canvas = document.querySelector("canvas");
        if(canvas) canvas.remove();
        if(la) {
            clearInterval(la.interval);
            la = null;
        }


        size = document.querySelector("#size");
        rule = document.querySelector("#rule");
        speed = document.querySelector("#speed");
        la = new LangtonsAnt(rule.value, parseInt(size.value));
        la.start(parseInt(speed.value));
    }
    //la = new LangtonsAnt("LRRRL", 64);
    //la.start(10);



    return 0;
})();