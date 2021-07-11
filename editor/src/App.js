import "./App.css";
import { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.js";
import "codemirror/lib/codemirror.css";
// 主题风格
import "codemirror/theme/solarized.css";
// 代码模式，clike是包含java,c++等模式的
import "codemirror/mode/clike/clike";
import 'codemirror/mode/javascript/javascript';
import "codemirror/mode/css/css";
//ctrl+空格代码提示补全
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/anyword-hint.js";
//代码高亮
import "codemirror/addon/selection/active-line";
//折叠代码
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/edit/closebrackets";
// import 'codemirror/addon/edit/matchBrackets';
import { constructResultsHTML } from "./utils/prettify";
import { parse, stringify } from 'comment-parser/lib'

let initCode = `   /**
* 编写一个算法来判断一个数 n 是不是快乐数。
* @link: https://leetcode-cn.com/problems/happy-number/
* @param {number} n
* @return {boolean}
* @export isHappy
*/ 
let getNext = function (n) {
 return n.toString().split('').map(i => i ** 2).reduce((a, b) => a + b);
}
let isHappy = function (n) {
 let slow = n;
 let fast = getNext(n);
 while(fast !== 1 && fast !== slow){
     slow = getNext(slow); 
     fast = getNext(getNext(fast));
 }
 return fast === 1;
};

`;

const testCode = `
describe("isHappy:编写一个算法来判断一个数 n 是不是快乐数。", () => {
  const cases = [
    {
      inputs: [11],
      result: false,
    },
    {
      inputs: [19],
      result: true,
    },
    {
      inputs: [2],
      result: false,
    },
  ];
  cases.forEach(({ inputs, result }) => {
    it("isHappy:inputs is "+inputs+",result should be "+result, () => {
      expect(isHappy(...inputs)).toEqual(result);
    });
  });
});
`

let createInitCode = (typeInfo, fnName, parameters) => {
  let renderComments = typeInfo.map(item => {
    return item[0].source
  });
  return `/**\n` + renderComments.join('\n') + `\n**/\n` + fnName.map(item => {
    return `let ` + item + `= (` + (parameters.toString()) + `)=>{\n\n\n}`;
  })

}
let templateCode = (parsed) => {
  let { description, tags } = parsed[0];
  let res = {};//这里解析的结果是一个对象
  let fnName = [];
  let parameters = [];
  res.description = description;
  const stringified = parsed.map((block) => stringify(block));
  res.answer = initCode.replace(stringified, "");//参考答案
  let typeInfo = tags.reduce((pre, cur) => {
    if (cur.tag === "export") {
      fnName.push(cur.name);
      return pre;
    }
    if (cur.tag === "param") {
      parameters.push(cur.name);
    }
    pre.push(cur.source);
    return pre;
  }, []);
  res.initCode = createInitCode(typeInfo, fnName, parameters);
  return res;
}
function App() {
  const parsed = parse(initCode);
  // const stringified = parsed.map((block) => stringify(block));
  // initCode = initCode.replace(stringified, "");//参考答案
  const Demo = templateCode(parsed);
  const [code, setCode] = useState(Demo.initCode);
  const [testHtml, setTestHtml] = useState('')
  const handleRun = () => {
    const worker = new Worker('http://localhost:3000/worker.js');
    worker.postMessage({ codeBlock: code + testCode })
    worker.onmessage = function (res) {
      let resHtml = constructResultsHTML(res.data);
      setTestHtml(resHtml)
      worker.terminate()
    }
    worker.onerror = function (error) {
      setTestHtml(error.message)
      worker.terminate()
    }
  }
  const handleReset = () => {
    window.location.reload()
  }
  return (
    <div className="App">
      <section className="live">
        <header>
          <h4>{Demo.description}</h4>
        </header>
        <div className="editor shorter">
          <CodeMirror
            value={code}
            options={{
              mode: { 
                name: "text/javascript" 
            },
              theme: "solarized write",
              autofocus: true, //自动获取焦点
              styleActiveLine: true, //光标代码高亮
              lineNumbers: true, //显示行号
              smartIndent: true, //自动缩进
              //start-设置支持代码折叠
              lineWrapping: true,
              foldGutter: true,
              gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"], //end
              extraKeys: {
                "Command": "autocomplete",
                "Command-S": function (editor) {
                  // that.codeSave(editor)
                },
                "Command-Z": function (editor) {
                  editor.undo();
                },//undo
                "F8": function (editor) {
                  editor.redo();
                },//Redo
              },
              // matchBrackets: true,  //括号匹配，光标旁边的括号都高亮显示
              autoCloseBrackets: true, //键入时将自动关闭()[]{}''""
            }}
            onCursorActivity={(editor, data, value) => {
              // //获取用户当前的编辑器中的编写的代码
              // var words = editor.getValue() + "";
              // //利用正则取出用户输入的所有的英文的字母
              // words = words.replace(/[a-z]+[\-|\']+[a-z]+/ig, '').match(/([a-z]+)/ig);
              // //将获取到的用户的单词传入CodeMirror,并在javascript-hint中做匹配
              // CodeMirror.ukeys = words;
              // //调用显示提示
              // editor.showHint();
            }}
            onBeforeChange={(editor, data, value) => {
              // setCode(value);
            }}
            onChange={(editor, data, value) => {
              // setCode(value);
            }}
          />
        </div>
        <div className="output-container">
          <div className="buttons-container">
            <button className="button run" type="button" onClick={handleRun}>
              Run ›
            </button>
            <button type="button" className="button" onClick={handleReset}>
              Reset
            </button>
          </div>
          <div className="output">
            <code dangerouslySetInnerHTML={{ __html: testHtml }} className="testHtml"></code>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
