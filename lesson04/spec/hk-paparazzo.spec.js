const { Paparazzo } = require("hk-paparazzo");
describe("only hk-paparazzo.spec.js file will be tested", function () {
    it("hk-paparazzo library test", function () {
        expect(typeof new Paparazzo()).toBe('object');
    });
});