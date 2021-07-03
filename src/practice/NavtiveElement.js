/**
 * 写一个函数实现把虚拟dom转化为真实dom，（虚拟dom：{tag:'', attr:[],children:[]}）
 * @param {*} params
 */ 
class NavtiveElement{
    static createElement(props){
        return new NavtiveElement(props)
    }
    constructor(options){
        this.tagName = options.tagName;
        this.props = options.props;
        this.children = options.children;
    }
    render(){
        let ele = document.createElement(this.tagName);
        let props = this.props;
        let children = this.children||[];
        for(let propsName in props){
            const propsValue = props[propsName];
            ele.setAttribute(propsName, propsValue);
        }
        children.forEach(child => {
            const childElem = child instanceof NavtiveElement ? child.render():document.createTextNode(child);
            ele.appendChild(childElem);
        })
        return ele;
    }
}
export default NavtiveElement;

// const child1 = NavtiveElement.createElement({tagName:'button',props:{class:'cancel'},children:['取消']});
// const div = NavtiveElement.createElement({tagName:'div',props:{class:'test'},children:[child1,'测试文本']});