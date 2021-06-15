@kobakazu0429/jest-lite
在浏览器端运行jest


利用github的v3 API获取文件目录和文件内容

https://docs.github.com/en/rest/reference/git#get-a-tree  获取git tree

https://api.github.com/repos/wangyuanzcm/hiker-coding/git/trees/e5357e891002a8e8501ba5e072deeaee59a334fa


https://api.github.com/repos/wangyuanzcm/hiker-coding/contents/tests?ref=main

遍历文件夹，当遇到type为file的时候，路径到底

github提供了 GraphQL的接口，所以可以无缝接入这个平台https://docs.github.com/en/graphql

todos:
1. 改造页面，
    * jest-lite实现浏览器端运行测试用例，测试的代码为当前显示的代码
    * 浏览器端编辑代码，并且将代码与仓库中的代码进行对比，可以直接使用react-diff库,界面上显示编辑的代码/仓库中的代码/两者对比，三个页面可以相互切换
    * 在线运行代码参考mdn的代码用例，https://interactive-examples.mdn.mozilla.net/pages/js/array-some.html
2. 服务端改造，使用本地server使用node读取本地文件来提供接口API，部署到github上到时候可以使用github到GraphQL的接口来获取github仓库的接口数据


## 该项目暂停改造，优先补充代码内容，保证所有涉及到的手写代码都没有问题