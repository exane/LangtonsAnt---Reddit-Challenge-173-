describe("Map", function(){
    var stage, map, renderer, size, scale, la;

    beforeEach(function(){
        la = new LangtonsAnt("LRLLR", 32);
        map = la.map;
        map.generateMap();
    })

    it("generateMap should be 2d matrix", function(){
        expect(Array.isArray(map.generateMap())).toBeTruthy();
        expect(Array.isArray(map.map)).toBeTruthy();

        for(var i = 0; i < map.map.length; i++)
            expect(Array.isArray(map.map[i])).toBeTruthy();
    })
    it("generateMap should contain only 0xFFFFFF", function(){
        for(var i = 0; i < map.map.length; i++)
            for(var k = 0; k < map.map.length; k++)
            expect(map.map[i][k]).toBe(0xFFFFFF);
    })

    it("setColor", function(){
        map.setColor(0x876598, 1, 1);
        expect(map.map[1][1]).toBe(0x876598);
    })


})