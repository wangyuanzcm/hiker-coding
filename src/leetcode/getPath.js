// 今天上午你的代码引发了一个高级bug，原因是修改公共组件的回归测试有遗漏，结果导致某个看似毫不相关的页面功能异常，影响了客户使用，你很沮丧，于是你打算写一个脚本根据文件依赖关系自动计算得到回归范围。
// 现在你已经通过webpack --profile得到了stats.json，该文件包含了所有模块的依赖信息，经过简单加工处理，你得到了这样的数据结构（一个object）：
// {
// "A": [
// "B",
// ],
// "B": [
// "C",
// "D"
// ],
// }
// 其中，key表示一个模块，value表示所有引用了该模块的其他模块。例如上面的数据表示A模块被B模块引用了，B模块被C、D模块引用了。
// 只关注直接引用关系显然是不够的，你需要得到完整的逆向依赖路径。比如我们想得到A模块的完整逆向路径，就会得到2条：
// A -> B -> C
// A -> B -> D
// 那么以后改动了A模块，只需要顺藤摸瓜检查一下B、C、D这些模块就可以了，回归范围更清楚了！ 

// 第一问
// 现在请你写个函数完成上述过程：
// 测试用例：
// ```
// //依赖的数据结构
// const dependency = {
//   "A": [
//     "B",
//   ],
//   "B": [
//     "C",
//     "D"
//   ],
// }
// // test case
// getPath('A'); // ['A -> B -> C', 'A -> B -> D']
// getPath('B'); // ['B -> C', 'B -> D']
// ```
// 第二问
// 当你满心欢喜地去测试的时候，发现报了个栈溢出错误，经过调查发现原来是存在循环引用的情况，依赖成环导致无限循环了。比如：
// {
// "A": [
// "B",
// ],
// "B": [
// "C",
// "D"
// ],
// "C": [
// "A"
// ]
// }
// 得到的依赖关系变成了A -> B -> C -> A -> B -> C -> A...
// 现在请你修正之前的函数，让其可以检测出这种情况并正常执行下去。
// ```
// //依赖的数据结构
// const dependency = {
//   "A": [
//     "B",
//   ],
//   "B": [
//     "C",
//     "D"
//   ],
//   "C": [
//     "A"
//   ]
// }
// // test case
// getPath('A'); // ['A -> B -> C', 'A -> B -> D']
// getPath('B'); // ['B -> C', 'B -> D']
// ```
/**
 * 获得模块完整的逆向依赖路径
 * @param {string} - moduleName
 * @return {string[]}
 */
 function getPath(moduleName,dependency) {
    let res = [];
    let DFS = (graph,path,node)=>{
        path.push(node);
        if(path.filter(item=>item===node).length>1) {
            res.push(path.join('->'));
            return;
        }//第二问，增加元素循环引用的边界条件处理
        if(graph[node]){
            graph[node].forEach(item=>{
                DFS(graph,path.slice(),item)
            })
            return;
        }else{
            res.push(path.join('->'));
            return;
        }
    }
    DFS(dependency,[],moduleName);
    return res;
}

export default getPath;
