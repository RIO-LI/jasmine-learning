const { Paparazzo } = require('hk-paparazzo');

/**
 * 在测试脚本运行前会先加载并执行 jasmine配置对象‘helpers’配置项对应的文件
 * global.pzz就来自于 src/helpers/paparazzo-factory.js运行时定义的
 */
describe('test', function () {
    it("it's global.pzz instanceof Paparazzo", function () {
        expect(global.pzz instanceof Paparazzo).toBe(true);
    });
});