var Map = require("./Map.js");
var Ant = require("./Ant.js");
var Color = require("./Color.js");
var PIXI = require("../lib/pixi.dev.js");

console.log(PIXI);

var LangtonsAnt = (function(){

    var LangtonsAnt = function(pattern, size){

        this.palette = this.createPalette(pattern);
        this.pattern = this.createPattern(pattern, this.palette);

        this.renderer = PIXI.autoDetectRenderer(size * this.scale + 1, size * this.scale + 1);
        this.stage = new PIXI.Stage(0xFFFFFF, true);
        this.map = new Map(this.stage, size, this.scale);
        this.ant = new Ant(this.stage, this.renderer, size, this.scale);


        return this;
    }
    var r = LangtonsAnt.prototype;

    r.ant = null;
    r.map = null;
    r.color = null;
    r.stage = null;
    r.scale = 16;
    r.renderer = null;
    r.pattern = null;
    r.palette = [];
    r.debug = false;
    r.interval = null;
    r.started = false;

    r.i = 0;
    r.logging = false;

    r.render = function(){
        this.renderer.render(this.stage);
    }

    r.main = function(){
        var fieldColor = this.getFieldColor();

        var oldPos = this.ant.getPos();
        var oldColorIndex = null;
        this.i++;

        if(this.logging)
            console.log(this.i);


        var p = this.pattern;

        for(var i = 0; i < p.length; i++) {
            if(p[i].color === fieldColor){
                oldColorIndex = i;
                this.setNewFieldColor(oldColorIndex, oldPos.x, oldPos.y);
                this.ant.move(p[i].turn);
            }
        }

        this.render();
    }

    r.startInterval = function(speed){
        var self = this;
        this.started = true;

        clearInterval(this.interval);
        this.interval = setInterval(function(){
            self.main(speed);
        }, speed);

    }

    r.setNewFieldColor = function(index, x, y){
        index++;
        if(index >= this.palette.length) index = 0;


        this.map.setColor(this.pattern[index].color, x, y);
    }

    r.createPattern = function(pattern, palette){
        var res = [];
        for(var i = 0; i < pattern.length; i++)
            res[i] = {
                "turn": pattern[i],
                "color": palette[i]
            }
        return res;
    }

    r.createPalette = function(pattern){
        return (new Color()).getColor(pattern.length);
    }

    r.start = function(speed){
        document.body.appendChild(this.renderer.view);

        this.render();

        this.startInterval(speed);
    }

    r.getFieldColor = function(){
        return this.map.getColor(this.ant.getPos().x, this.ant.getPos().y);
    }

    return LangtonsAnt;
})();

module.exports = LangtonsAnt;