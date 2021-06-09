var yeoman = require('yeoman-environment');
var path = require('path');
var env = yeoman.createEnv();

//generator-XXX模块地址查询
// var generatorPath = require.resolve('generator-XXX','XXX:app');

//如果generator未使用npm link进行连接，需要将其拷贝至工程依赖中按如下方式获取地址
var generatorPath = path.resolve(process.cwd(),'generators','app');

//注册generator
env.register(generatorPath, 'generator:jest');

//调用generator生成项目骨架或组件骨架
env.run('generator:jest', {'skip-install': true}, function (err) {
    console.log('done');
});
