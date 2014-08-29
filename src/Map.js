var PIXI = require("../lib/pixi.dev.js");

var Map = (function(){

    var Map = function(stage, size, scale){
        this.stage = stage;
        this.scale = scale;
        this.field = new PIXI.Graphics();
        this.size = size;
        this.stage.addChild(this.field);
        this.generateMap();
        this.drawGrid();

        return this;
    }
    var r = Map.prototype;

    r.size = 0;
    r.map = [];
    r.scale = null;
    r.stage = null;
    r.field = null;
    r.pattern = null;


    r.generateMap = function(){
        for(var i = 0; i < this.size; i++) {
            this.map[i] = [];
            for(var k = 0; k < this.size; k++)
                this.map[i][k] = 0xFFFFFF;
        }

        return this.map;
    }

    r.renderField = function(){

        this.field.clear();
        for(var i=0; i<this.size; i++){
            for(var k=0; k< this.size; k++){
                if(this.map[i][k] === 0xFFFFFF) continue;

                this.field.beginFill(this.map[i][k]);
                this.field.drawRect(i*this.scale, k*this.scale, this.scale, this.scale);
                this.field.endFill();
            }
        }
    }

    r.drawGrid = function(){
        var g = new PIXI.Graphics();

        //g.beginFill(0xFFFFFF);
        g.lineStyle(1, 0x000000);

        for(var i = 0; i < this.size; i++) {
            for(var k = 0; k < this.size; k++){


                g.moveTo(i*this.scale, k*this.scale);
                g.lineTo(i*this.scale + this.scale, k*this.scale);
                g.lineTo(i*this.scale + this.scale, k*this.scale + this.scale);
                g.lineTo(i*this.scale, k*this.scale + this.scale);
                g.lineTo(i*this.scale, k*this.scale);

            }
        }
        g.endFill();

        this.stage.addChild(g);

    }

    r.getColor = function(x, y){
        return this.map[x][y];
    }

    r.setColor = function(color, x, y){
        this.map[x][y] = color;
        this.renderField();
    }

    return Map;
})();

module.exports = Map;