const { Paparazzo } = require("hk-paparazzo");
// 指定jasmine配置文件
describe("specify path to jasmine configuration file", function () {
    it("hk-paparazzo library test", function () {
        expect(typeof new Paparazzo()).toBe('object');
    });
});