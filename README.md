@kobakazu0429/jest-lite
在浏览器端运行jest


利用github的v3 API获取文件目录和文件内容

https://docs.github.com/en/rest/reference/git#get-a-tree  获取git tree

https://api.github.com/repos/wangyuanzcm/hiker-coding/git/trees/e5357e891002a8e8501ba5e072deeaee59a334fa


https://api.github.com/repos/wangyuanzcm/hiker-coding/contents/tests?ref=main

遍历文件夹，当遇到type为file的时候，路径到底

github提供了 GraphQL的接口，所以可以无缝接入这个平台https://docs.github.com/en/graphql

v4 :
query content {
  repository(name: "hiker-coding", owner: "wangyuanzcm") {
    object(expression: "HEAD:tests") {
      ... on Tree {
        entries {
          name
          extension
          path
        }
      }
    }
  }
}



todos:
1. 改造页面，
    * jest-lite实现浏览器端运行测试用例，测试的代码为当前显示的代码
    * 浏览器端编辑代码，并且将代码与仓库中的代码进行对比，可以直接使用react-diff库,界面上显示编辑的代码/仓库中的代码/两者对比，三个页面可以相互切换
    * 在线运行代码参考mdn的代码用例，https://interactive-examples.mdn.mozilla.net/pages/js/array-some.html
2. 服务端改造，使用本地server使用node读取本地文件来提供接口API，部署到github上到时候可以使用github到GraphQL的接口来获取github仓库的接口数据


## 该项目暂停改造，优先补充代码内容，保证所有涉及到的手写代码都没有问题


### 项目启动
npm install
npm run server
npm start

### 增加例子
npm run generate

### 文件命名格式

一般情况下文件以函数名来命名，但是在特殊情况下，比如答案需要两个函数或者函数名冲突，那么使用描述语句的拼音来命名

### 特性

1. 支持文件夹，只需要以地址形式输入链接即可，比如"LinkedList/design-linked-list"



TODO：
1. ui页面
2. 性能监控及优化



主要可选的是一键换肤，即切换主题

快捷键保存代码，前进和后退，格式化

本地mock使用node服务

所有代码使用ts书写

单个运行代码页面可以分离开来，单独运行

将代码答案存在issue里面，保存所有人的答题记录，在首页展示答题进度和历史

可以在页面上去新建题目和测试用例

默认登录即关注项目



该项目需要您使用github进行第三方登录认证，原因是：
1. 非认证用户每小时只能发起60次接口请求，认证用户每天可以发起5000次接口请求
2. 认证用户可以将答案保存在该题目的issue里面，便于保存历史答题记录
3. 认证之后可以避免垃圾输入和一些不良的言论出现。

与github账号绑定仅仅是用于在项目中保存issue需要，不存在其他的用途