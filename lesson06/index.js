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

// 根据配置对象进行测试
jm.execute();