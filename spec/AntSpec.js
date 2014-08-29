describe("Ant", function(){
    var stage, ant, renderer, size, scale, la;
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

    beforeEach(function(){
        la = new LangtonsAnt("LRLLR", 32);
        ant = la.ant;
        ant.setAntTo(10, 10);

        //ant.img.position.x = 100;
        //ant.img.position.y = 100;

    })

    it("spawn", function(){
        ant.spawnAnt();
        expect(ant.img.position.x).toBe(168);
        expect(ant.img.position.y).toBe(168);
    })

    it("move looking north move left", function(){
        ant.direction = DIRECTION.NORTH;
        ant.move("L");
        expect(ant.direction).toBe(DIRECTION.WEST);
        expect(ant.pos.x).toBe(9);
        expect(ant.pos.y).toBe(10);
    })
    it("move looking north move right", function(){
        ant.direction = DIRECTION.NORTH;
        ant.move("R");
        expect(ant.direction).toBe(DIRECTION.EAST);
        expect(ant.pos.x).toBe(11);
        expect(ant.pos.y).toBe(10);
    })
    it("move looking east move left", function(){
        ant.direction = DIRECTION.EAST;
        ant.move("L");
        expect(ant.direction).toBe(DIRECTION.NORTH);
        expect(ant.pos.x).toBe(10);
        expect(ant.pos.y).toBe(9);
    })
    it("move looking east move right", function(){
        ant.direction = DIRECTION.EAST;
        ant.move("R");
        expect(ant.direction).toBe(DIRECTION.SOUTH);
        expect(ant.pos.x).toBe(10);
        expect(ant.pos.y).toBe(11);
    })
    it("move looking south move left", function(){
        ant.direction = DIRECTION.SOUTH;
        ant.move("L");
        expect(ant.direction).toBe(DIRECTION.EAST);
        expect(ant.pos.x).toBe(11);
        expect(ant.pos.y).toBe(10);
    })
    it("move looking south move right", function(){
        ant.direction = DIRECTION.SOUTH;
        ant.move("R");
        expect(ant.direction).toBe(DIRECTION.WEST);
        expect(ant.pos.x).toBe(9);
        expect(ant.pos.y).toBe(10);
    })
    it("move looking WEST move left", function(){
        ant.direction = DIRECTION.WEST;
        ant.move("L");
        expect(ant.direction).toBe(DIRECTION.SOUTH);
        expect(ant.pos.x).toBe(10);
        expect(ant.pos.y).toBe(11);
    })
    it("move looking WEST move right", function(){
        ant.direction = DIRECTION.WEST;
        ant.move("R");
        expect(ant.direction).toBe(DIRECTION.NORTH);
        expect(ant.pos.x).toBe(10);
        expect(ant.pos.y).toBe(9);
    })
    it("moveTo NORTH", function(){
        ant.moveTo(DIRECTION.NORTH);

        expect(ant.getPos().x).toBe(10);
        expect(ant.getPos().y).toBe(9);
        expect(ant.getImagePos().x).toBe(10);
        expect(ant.getImagePos().y).toBe(9);
    })
    it("moveTo SOUTH", function(){
        ant.moveTo(DIRECTION.SOUTH);

        expect(ant.pos.x).toBe(10);
        expect(ant.pos.y).toBe(11);
        expect(ant.getImagePos().x).toBe(10);
        expect(ant.getImagePos().y).toBe(11);
    })
    it("moveTo WEST", function(){
        ant.moveTo(DIRECTION.WEST);

        expect(ant.pos.x).toBe(9);
        expect(ant.pos.y).toBe(10);
        expect(ant.getImagePos().x).toBe(9);
        expect(ant.getImagePos().y).toBe(10);
    })
    it("moveTo EAST", function(){
        ant.moveTo(DIRECTION.EAST);

        expect(ant.pos.x).toBe(11);
        expect(ant.pos.y).toBe(10);
        expect(ant.getImagePos().x).toBe(11);
        expect(ant.getImagePos().y).toBe(10);
    })
    it("changePosBy(1,0)", function(){
        ant.changePosBy(1, 0);

        expect(ant.getPos().x).toBe(11);
        expect(ant.getPos().y).toBe(10);
    })
    it("changePosBy(1,0) imagePos", function(){
        ant.changePosBy(1, 0);
        expect(ant.getImagePos().x).toBe(11);
        expect(ant.getImagePos().y).toBe(10);
    })
    it("changePosBy(0,1)", function(){
        ant.changePosBy(0, 1);

        expect(ant.getPos().x).toBe(10);
        expect(ant.getPos().y).toBe(11);

        expect(ant.getImagePos().x).toBe(10);
        expect(ant.getImagePos().y).toBe(11);
    })
    it("changePosBy(-1, 0)", function(){
        ant.changePosBy(-1, 0);

        expect(ant.pos.x).toBe(9);
        expect(ant.pos.y).toBe(10);

        expect(ant.getImagePos().x).toBe(9);
        expect(ant.getImagePos().y).toBe(10);
    })
    it("changePosBy(0,-1)", function(){
        ant.changePosBy(0, -1);

        expect(ant.pos.x).toBe(10);
        expect(ant.pos.y).toBe(9);

        expect(ant.getImagePos().x).toBe(10);
        expect(ant.getImagePos().y).toBe(9);
    })


    it("changePosBy(1,0) at end", function(){
        la = new LangtonsAnt("LRLLR", 4);
        ant = la.ant;
        ant.setAntTo(3, 0);
        ant.changePosBy(1, 0);


        expect(ant.pos.x).toBe(0);
        expect(ant.pos.y).toBe(0);

        expect(ant.getImagePos().x).toBe(0);
        expect(ant.getImagePos().y).toBe(0);
    })
    it("changePosBy(0,1) at end", function(){
        la = new LangtonsAnt("LRLLR", 4);
        ant = la.ant;
        ant.setAntTo(3, 3);
        ant.changePosBy(0, 1);


        expect(ant.pos.x).toBe(3);
        expect(ant.pos.y).toBe(0);

        expect(ant.getImagePos().x).toBe(3);
        expect(ant.getImagePos().y).toBe(0);
    })
    it("changePosBy(1,1) at end", function(){
        la = new LangtonsAnt("LRLLR", 4);
        ant = la.ant;
        ant.setAntTo(3, 3);
        ant.changePosBy(1, 1);


        expect(ant.pos.x).toBe(0);
        expect(ant.pos.y).toBe(0);

        expect(ant.getImagePos().x).toBe(0);
        expect(ant.getImagePos().y).toBe(0);
    })
    it("changePosBy(-1, 0) at end", function(){
        la = new LangtonsAnt("LRLLR", 4);
        ant = la.ant;
        ant.setAntTo(0, 0);
        ant.changePosBy(-1, 0);


        expect(ant.pos.x).toBe(3);
        expect(ant.pos.y).toBe(0);

        expect(ant.getImagePos().x).toBe(3);
        expect(ant.getImagePos().y).toBe(0);
    })
    it("changePosBy(0, -1) at end", function(){
        la = new LangtonsAnt("LRLLR", 4);
        ant = la.ant;
        ant.setAntTo(0, 0);
        ant.changePosBy(0, -1);


        expect(ant.pos.x).toBe(0);
        expect(ant.pos.y).toBe(3);

        expect(ant.getImagePos().x).toBe(0);
        expect(ant.getImagePos().y).toBe(3);
    })


    it("switchDirection turn from NORTH left", function(){
        ant.direction = DIRECTION.NORTH;
        ant.switchDirection("L")
        expect(ant.direction).toBe(DIRECTION.WEST);
    })
    it("switchDirection turn from NORTH right", function(){
        ant.direction = DIRECTION.NORTH;
        ant.switchDirection("R")
        expect(ant.direction).toBe(DIRECTION.EAST);
    })
    it("switchDirection turn from WEST right", function(){
        ant.direction = DIRECTION.WEST;
        ant.switchDirection("R")
        expect(ant.direction).toBe(DIRECTION.NORTH);
    })
    it("switchDirection turn from WEST left", function(){
        ant.direction = DIRECTION.WEST;
        ant.switchDirection("L")
        expect(ant.direction).toBe(DIRECTION.SOUTH);
    })
    it("switchDirection turn from SOUTH left", function(){
        ant.direction = DIRECTION.SOUTH;
        ant.switchDirection("L")
        expect(ant.direction).toBe(DIRECTION.EAST);
    })
    it("switchDirection turn from SOUTH right", function(){
        ant.direction = DIRECTION.SOUTH;
        ant.switchDirection("R")
        expect(ant.direction).toBe(DIRECTION.WEST);
    })
    it("switchDirection turn from EAST right", function(){
        ant.direction = DIRECTION.EAST;
        ant.switchDirection("R")
        expect(ant.direction).toBe(DIRECTION.SOUTH);
    })
    it("switchDirection turn from EAST left", function(){
        ant.direction = DIRECTION.EAST;
        ant.switchDirection("L")
        expect(ant.direction).toBe(DIRECTION.NORTH);
    })

    it("calculateAngle", function(){
        expect(ant.calculateAngle("L")).toBe(Math.PI / -2);
        expect(ant.calculateAngle("R")).toBe(Math.PI / 2);
    })

    it("setImagePos (11,11)", function(){
        ant.setImagePos(11, 11);

        expect(ant.getImagePos().x).toBe(11);
        expect(ant.getImagePos().y).toBe(11);
    })
    it("setImagePos (20,null)", function(){
        ant.setImagePos(20, null);

        expect(ant.getImagePos().x).toBe(20);
        expect(ant.getImagePos().y).toBe(10);
    })
    it("setImagePos (null,20)", function(){
        ant.setImagePos(null, 20);

        expect(ant.getImagePos().x).toBe(10);
        expect(ant.getImagePos().y).toBe(20);
    })

    it("setAntTo (3,3)", function(){
        ant.setAntTo(3, 3);

        expect(ant.getPos().x).toBe(3);
        expect(ant.getPos().y).toBe(3);
        expect(ant.getImagePos().x).toBe(3);
        expect(ant.getImagePos().y).toBe(3);
    })
    it("setAntTo (3,null)", function(){
        ant.setAntTo(3, null);

        expect(ant.getPos().x).toBe(3);
        expect(ant.getPos().y).toBe(10);
        expect(ant.getImagePos().x).toBe(3);
        expect(ant.getImagePos().y).toBe(10);
    })
    it("setAntTo (null,3)", function(){
        ant.setAntTo(null, 3);

        expect(ant.getPos().x).toBe(10);
        expect(ant.getPos().y).toBe(3);
        expect(ant.getImagePos().x).toBe(10);
        expect(ant.getImagePos().y).toBe(3);
    })


})

