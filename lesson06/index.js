const Jasmine = require('jasmine');

// 创建一个Jasmine实例对象
const jm = new Jasmine();

// 进行配置
jm.loadConfig({
    spec_dir: 'test',
    spec_files: [
        "**/*[sS]pec.js"
    ]
});

// 测试完成时的回调
jm.onComplete(function (passed) {
    if (passed) {
        console.log('所有单元通过测试');
    } else {
        console.log('存在单元不通过测试');
    }
});

// 根据配置对象进行测试
jm.execute();