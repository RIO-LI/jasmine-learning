const { Paparazzo } = require("hk-paparazzo");
describe('jasmine base use', function () {
    it('hk-paparazzo library test', function () {
        expect(typeof Paparazzo).toBe('function');
    });
});