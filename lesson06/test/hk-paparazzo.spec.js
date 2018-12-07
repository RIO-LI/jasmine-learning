const { Paparazzo } = require("hk-paparazzo");
describe("hk-paparazzo.spec.js file test", function () {
    it("hk-paparazzo library test", function () {
        expect(typeof new Paparazzo()).toBe('object');
    });
});