xdescribe("Simulation", function(){
    var la, i, ant, map;
    var DIRECTION = {
        NORTH: 1,
        EAST: 2,
        SOUTH: 3,
        WEST: 4
    };

    la = new LangtonsAnt("LRLLR", 32);
    ant = la.ant;
    map = la.map;
    //console.log(la.pattern);
    la.pattern[2]["color"] = 0xFF0000;
    la.pattern[3]["color"] = 0x00FF00;
    la.pattern[4]["color"] = 0x0000FF;
    //la.startInterval(1000);


    beforeEach(function(){
        i++;
    })


    it("start", function(){
        document.body.appendChild(la.renderer.view);

        expect(ant.getPos().x).toBe(16);
        expect(ant.getPos().y).toBe(16);
        expect(la.getFieldColor()).toBe(0xFFFFFF);
        expect(ant.direction).toBe(DIRECTION.NORTH);

        la.main();

        expect(ant.getPos().x).toBe(15);
        expect(ant.getPos().y).toBe(16);
        expect(la.getFieldColor()).toBe(0xFFFFFF);
        expect(ant.direction).toBe(DIRECTION.WEST);
    })

    it("2", function(){

        la.main();

        expect(ant.getPos().x).toBe(15);
        expect(ant.getPos().y).toBe(17);
        expect(la.getFieldColor()).toBe(0xFFFFFF);
        expect(ant.direction).toBe(DIRECTION.SOUTH);

    })

    it("3", function(){

        la.main();

        expect(ant.getPos().x).toBe(16);
        expect(ant.getPos().y).toBe(17);
        expect(ant.direction).toBe(DIRECTION.EAST);

    })
    it("4", function(){
        la.main();
        expect(ant.getPos().x).toBe(16);
        expect(ant.getPos().y).toBe(16);
        expect(ant.direction).toBe(DIRECTION.NORTH);
    })
    it("5", function(){
        la.main();
        expect(ant.getPos().x).toBe(17);
        expect(ant.getPos().y).toBe(16);
        expect(ant.direction).toBe(DIRECTION.EAST);
    })
    it("6", function(){
        la.main();
        expect(ant.getPos().x).toBe(17);
        expect(ant.getPos().y).toBe(15);
        expect(ant.direction).toBe(DIRECTION.NORTH);
    })

    it("23", function(){
        while(la.i < 23){
            la.main();
        }
        expect(map.getColor(16, 16)).toBe(la.pattern[4].color);
        expect(la.i).toBe(23);
        expect(ant.getPos().x).toBe(16);
        expect(ant.getPos().y).toBe(15);
        expect(ant.direction).toBe(DIRECTION.EAST);
    })
    it("24", function(){
        //expect(la.getFieldColor()).toBe(la.pattern[4].color);
        la.main();
        expect(map.getColor(16, 16)).toBe(la.pattern[4].color);
        expect(ant.getPos().x).toBe(16);
        expect(ant.getPos().y).toBe(16);
        expect(ant.direction).toBe(DIRECTION.SOUTH);
    })
    it("25", function(){
        la.main();
        expect(map.getColor(16, 16)).toBe(la.pattern[0].color);
        expect(la.pattern[0].color).toBe(0xFFFFFF);
        expect(ant.getPos().x).toBe(15);
        expect(ant.getPos().y).toBe(16);
        expect(ant.direction).toBe(DIRECTION.WEST);
    })

})