const Generator = require('yeoman-generator');
const camelcase = require('camelcase');

// @api: 提供给第三方使用的接口
// @author: 标明作者
// @param: 参数
// @return: 返回值
// @todo: 待办
// @version: 版本号
// @inheritdoc: 文档继承
// @property: 类属性
// @property-read: 只读属性
// @property-write: 只写属性
// @const: 常量
// @deprecated: 过期方法
// @example: 示例
// @final: 标识类是终态, 禁止派生
// @global: 指明引用的全局变量
// @static: 标识类、方法、属性是静态的
// @ignore: 忽略
// @internal: 限内部使用
// @license: 协议
// @link: 链接,引用文档等
// @see: 与 link 类似, 可以访问内部方法或类
// @method: 方法
// @package: 命名空间
// @since: 从指定版本开始的变动
// @throws: 抛出异常
// @uses: 使用
// @var: 变量
// @copyright: 版权声明
module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: "list",
        choices: ["Typescript", "Javascript"],
        name: "language",
        default: "Javascript"
      },
      {
        type: "list",
        choices: [{name:"React Hooks",value:"hooks"},{name:"Practice Function",value:"practice"},{name:"leetcode",value:"leetcode"}],
        name: "type",
        default: "leetcode"
      },
      {
        type: "input",
        name: "name",
        message: "Leetcode problem name - copy from url prompt",
      },
      {
        type: "input",
        name: "description",
        message: "Leetcode problem simple description",
      },
      {
        type: "checkbox",
        choices: [{ name: "@link: 链接,引用文档等", value: "@link: 链接,引用文档等" },
        { name: "@example: 示例", value: "@example: 示例" },
        { name: "@global: 指明引用的全局变量", value: "@global: 指明引用的全局变量" },
        { name: "@param {*} params", value: "@param {*} params",checked: true },
        { name: "@return {*} result", value: "@return {*} result" }],
        name: "informations",
        message: "Leetcode problem details",
      }
    ]);

    this.leetcodeName = answers.name;
    // this.language = answers.language;
    this.description = answers.description;
    this.informations = answers.informations;
    this.type = answers.type;
  }

  writing() {
    const extension = this.language === "Typescript" ? 'ts' : 'js';

    this.fs.copyTpl(
      this.templatePath(`${this.type}.case.${extension}`),
      this.destinationPath(`src/${this.type}/${this.leetcodeName}.${extension}`),
      {
        informations:this.informations,
        description: this.description,
        funcName: camelcase(this.leetcodeName),
        caseName: this.leetcodeName,
      }
    );
    this.fs.copyTpl(
      this.templatePath(`${this.type}.testcase.${extension}`),
      this.destinationPath(`tests/${this.type}/${this.leetcodeName}.spec.${extension}`),
      {
        description: this.description,
        funcName: camelcase(this.leetcodeName),
        caseName: this.leetcodeName,
      }
    );
  }
};
