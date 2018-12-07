# jasmine-learning
jasmine学习demo教程

# NPM Script

> 在本课程中的每个单元都已经配置好对应的npm scripts，以供学习调用

`npm run test`: 启动`jasmine`测试

`npm run jasmine`: 直接调用单元中`node_modules`的`jasmine`

可以采用`--`来进行`jasmine`配置信息的追加，例如我们要指定一个`jasmine`的配置文件:
```bash
npm run test -- --config=jasmine.json
```