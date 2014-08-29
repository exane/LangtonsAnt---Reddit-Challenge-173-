describe("LangtonsAnt", function(){
    var stage, ant, map, renderer, size, scale, la,
        pattern, palette;

    beforeEach(function(){
        la = new LangtonsAnt("LRLLR", 32);
        ant = la.ant;
        map = la.map;

        ant.pos.x = 10;
        ant.pos.y = 10;

        palette = [0xFFFFFF, 0x191919, 0x123456, 0xAB4325, 0xFF0000];
        pattern = "LRLLR";
        //la.pattern[2]["color"] = 0xFF0000;
        //la.pattern[3]["color"] = 0x00FF00;
        //la.pattern[4]["color"] = 0x0000FF;


        //la.palette = palette;
        //console.log(la.pattern);

        map.map[2][2] = 0x123456;
    })

    it("getFieldColor", function(){
        expect(la.getFieldColor()).toBe(0xFFFFFF);

        ant.pos.x = 2;
        ant.pos.y = 2;
        expect(la.getFieldColor()).toBe(0x123456);
    })
    it("setNewFieldColor", function(){
        expect(map.map[1][1]).toBe(la.palette[0]); //palette index 0

    })
    it("setNewFieldColor index 0", function(){
        la.setNewFieldColor(0, 1, 1);
        expect(map.map[1][1]).toBe(la.palette[1]);
    })
    it("setNewFieldColor index 1", function(){
        la.setNewFieldColor(1, 1, 1);
        expect(map.map[1][1]).toBe(la.palette[2]);
    })
    it("setNewFieldColor index 2", function(){
        la.setNewFieldColor(2, 1, 1);
        expect(map.map[1][1]).toBe(la.palette[3]);
    })
    it("setNewFieldColor index 3", function(){
        la.setNewFieldColor(3, 1, 1);
        expect(map.map[1][1]).toBe(la.palette[4]);
    })
    it("setNewFieldColor index 4", function(){
        la.setNewFieldColor(4, 1, 1);
        expect(map.map[1][1]).toBe(la.palette[0]);
    })
    it("setNewFieldColor index 5", function(){
        la.setNewFieldColor(5, 1, 1);
        expect(map.map[1][1]).toBe(la.palette[0]);
    })
    it("createPalette", function(){
        var res = la.createPalette(pattern);

        expect(Array.isArray(res)).toBeTruthy();
        expect(res[0]).toBe(0xFFFFFF);
        expect(res[1]).toBe(0x191919);
        expect(typeof res[2]).toBe("number");
        expect(typeof res[3]).toBe("number");
        expect(typeof res[4]).toBe("number");

        expect(typeof res[5]).toBe("undefined");
    })
    it("createPattern", function(){
        var res = la.createPattern(pattern, palette);

        expect(res[0].turn).toBe("L")
        expect(res[0].color).toBe(0xFFFFFF);
        expect(res[1].turn).toBe("R")
        expect(res[1].color).toBe(0x191919);
        expect(res[2].turn).toBe("L")
        expect(res[2].color).toBe(0x123456);
        expect(res[3].turn).toBe("L")
        expect(res[3].color).toBe(0xAB4325);
        expect(res[4].turn).toBe("R")
        expect(res[4].color).toBe(0xFF0000);
    })

    it("have the same color twice", function(){
        
    })

})