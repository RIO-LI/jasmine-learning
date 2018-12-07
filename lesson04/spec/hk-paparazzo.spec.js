const { Paparazzo } = require("hk-paparazzo");
/**
 * 只有这个测试单元会被jasmine调用，因为在npm script中配置了
 * --filter='only hk-paparazzo.spec.js file will be tested'
 * 与 filter 指定的字符串不同的测试单元都不会被调用
 */
describe("only hk-paparazzo.spec.js file will be tested", function () {
    it("hk-paparazzo library test", function () {
        expect(typeof new Paparazzo()).toBe('object');
    });
});