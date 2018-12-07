const { Paparazzo } = require('hk-paparazzo');

/**
 * lesson02/spec/support/jasmine.json文件中
 * spec_dir 选项配置为 /  , 表示测试lesson02根目录下的测试文件
 */
describe('custom jasmine spec_dir', function () {
    it('hk-paparazzo library test', function () {
        expect(typeof Paparazzo).toBe('function');
    });
});