var PIXI = require("../lib/pixi.dev.js");

var Ant = (function(){
    var DIRECTION = {
        NORTH: 1,
        EAST: 2,
        SOUTH: 3,
        WEST: 4
    };
    var TURN = {
        "L": -1,
        "R": 1
    }

    var Ant = function(stage, renderer, size, scale){
        this.stage = stage;
        this.size = size;
        this.scale = scale;
        this.renderer = renderer;

        this.pos.x = this.size >> 1 | 0;
        this.pos.y = this.size >> 1 | 0;

        this.loadTexture();
        this.spawnAnt();


        return this;
    }
    var r = Ant.prototype;

    r.pos = {
        x: 16,
        y: 16
    }
    r.direction = DIRECTION.NORTH;
    r.stage = null;
    r.img = null;
    r.size = null;
    r.scale = null;
    r.renderer = null;


    r.loadTexture = function(){
        var t = PIXI.Texture.fromImage("asserts/ant.png");
        this.img = new PIXI.Sprite(t)
    }

    r.spawnAnt = function(){
        this.setImagePos(this.getPos().x, this.getPos().y);
        this.img.width = this.img.height = this.scale;
        this.img.anchor.x = this.img.anchor.y = 0.5;

        this.stage.addChild(this.img);
    }

    r.move = function(turn){
        this.switchDirection(turn);
        this.moveTo(this.direction);
    }

    r.render = function(){
        this.renderer.render(this.stage);
    }

    r.moveTo = function(direction){
        switch(direction) {
            case DIRECTION.NORTH:
                this.changePosBy(0, -1);
                break;
            case DIRECTION.SOUTH:
                this.changePosBy(0, 1);
                break;
            case DIRECTION.WEST:
                this.changePosBy(-1, 0);
                break;
            case DIRECTION.EAST:
                this.changePosBy(1, 0);
                break;

        }
    }

    r.changePosBy = function(x, y){
        this.pos.x += x;
        if(this.pos.x >= this.size)
            this.setAntTo(0, null);

        if(this.pos.x < 0)
            this.setAntTo(this.size - 1, null);

        this.setImagePos(this.getPos().x, null);


        this.pos.y += y;
        if(this.pos.y >= this.size)
            this.setAntTo(null, 0);

        if(this.pos.y < 0)
            this.setAntTo(null, this.size - 1);

        this.setImagePos(null, this.getPos().y);
    }

    r.switchDirection = function(turn){
        this.direction += TURN[turn];
        if(this.direction < 1) this.direction = 4;
        if(this.direction > 4) this.direction = 1;

        this.img.rotation += this.calculateAngle(turn);
    }

    r.calculateAngle = function(d){
        //Math.PI * 0/2 = NORTH, Math.PI * 1/2 = EAST, Math.PI * 2/2 = SOUTH, Math.PI * 3/2 = WEST usw
        return TURN[d] > 0 ? Math.PI / 2 : -Math.PI / 2;
    }

    r.getPos = function(){
        return this.pos;
    }

    r.setAntTo = function(x, y){
        if(x !== null)
            this.pos.x = x;
        if(y !== null)
            this.pos.y = y;
        this.setImagePos(x, y);
    }

    r.getImagePos = function(){
        return {
            x: (this.img.position.x - (this.scale / 2)) / this.scale,
            y: (this.img.position.y - (this.scale / 2)) / this.scale
        }
    }

    r.setImagePos = function(x, y){
        if(x !== null)
            this.img.position.x = x * this.scale + this.scale / 2;
        if(y !== null)
            this.img.position.y = y * this.scale + this.scale / 2;

    }


    return Ant;
})();

module.exports = Ant;