
describe("Color", function(){
    var color, calcColor, palette, n;

    beforeEach(function(){
        n = 5;
        color = new Color();
        calcColor = color.calcColor();
        palette = color.getColor(n);
    })

    it("should generate number between 0xEEEEEE and 0x111111", function(){
        expect(calcColor).toBeGreaterThan(0x111111);
        expect(calcColor).toBeLessThan(0xEEEEEE);
    })

    it("should give palette as array", function(){
        expect(Array.isArray(palette)).toEqual(true);
    })

    it("first color should be white", function(){
        expect(palette[0]).toEqual(0xFFFFFF);
    })

    it("second color should be black", function(){
        expect(palette[1]).toEqual(0x000000);
    })

    it("should contain only digits", function(){
        for(var i=0; i<n; i++){
            expect(typeof palette[i]).toEqual("number");
        }
    })

})


describe("Map", function(){
    var map, size, generateMap, getMap, createMap;
    var height, width, scale;

    beforeEach(function(){
        size = 100;


        map = new Map(size);
        scale = map._scale;
        height = width = scale * size;
        generateMap = map.generateMap(size);
        getMap = map.getMap();
        map.createCanvas(height, width);

    })

    it("should return 2d array", function(){
        expect(Array.isArray(generateMap)).toEqual(true);
        for(var i=0; i<size; i++)
            expect(Array.isArray(generateMap[i])).toEqual(true);

        expect(Array.isArray(getMap)).toEqual(true);
        for(var i=0; i<size; i++)
            expect(Array.isArray(getMap[i])).toEqual(true);

    })

    it("should contain only numbers", function(){
        for(var i=0; i<size; i++){
            for(var k=0; k<size; k++)
                expect(typeof generateMap[i][k]).toEqual("number");

        }
    })

    it("should return map size", function(){
        expect(map.getSize()).toBe(size);
    })

    it("should be a number", function(){
        expect(typeof map.getSize()).toBe("number");
    })

    it("should create canvas dom object", function(){
        var c = document.querySelector("#langtonsAnt");
        expect(c).not.toBe(null);
        expect(c.id).toBe("langtonsAnt");
        expect(c.height).toBe(height);
        expect(c.width).toBe(width);
    })

    it("should draw map", function(){

    })


})












