



var Color = (function(){
    var _palette = [];

    var Color = function(){

        return this;
    }
    var r = Color.prototype;

    r.getColor = function(n){
        --n;
        if(n < 0) throw "n must be greater than 1";

        if(n >= 2) {
            //random
            var c = this.calcColor();
            if(this.isColorAlreadyInUse(c))
                return this.getColor(++n);
            _palette[n] = this.calcColor();

        }
        else if(n === 1) {
            //black
            _palette[n] = 0x191919;
        }

        else if(n === 0){
            //white
            _palette[n] = 0xFFFFFF;
            if(typeof _palette[0] === "number" && typeof _palette[1] === "number")
                return _palette;
            throw "n must be greater than 1";
        }

        return this.getColor(n);
    }

    r.calcColor = function(){
        var i = (Math.random()*0xFFFFFF) | 0;
        if(i >= 0x333333 && i <= 0xCCCCCC) return i;
        return this.calcColor();
    }

    r.isColorAlreadyInUse = function(color){
        for(var i=0; i< _palette.length; i++){
            if(_palette[i] === color) return true;
        }
        return false;
    }


    return Color;
})();

module.exports = Color;