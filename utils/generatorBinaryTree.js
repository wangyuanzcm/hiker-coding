/**
 *  [请问 [1, null, 2, 3] 在二叉树测试用例中代表什么](https://support.leetcode-cn.com/hc/kb/article/1194353/)
 *  测试用例按照leetcode的要求用数组串行化表示一个水平顺序遍历的二叉树。
 * [二叉树的序列化与反序列化](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xomr73/)
 * */
function defaultTreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//这里根据leetcode反序列化方法改造而来，用来将题目中输入的数组转化为二叉树结构
const generatorBinaryTree = (list,TreeNode) =>{
    //因为有些二叉树题目在转换过程中val的格式会发生变化，所以这里提供一个修改treeNode的参数
    if(!TreeNode) TreeNode = defaultTreeNode;
    if(!list.length) return null;
    const root= new TreeNode(list[0]);
    let queue = [root];
    let cursor = 1;
    while(cursor<list.length){
        const node =queue.shift();
        const leftValue = list[cursor];
        const rightValue = list[cursor+1];
        if(leftValue){
            const leftNode = new TreeNode(leftValue);
            node.left = leftNode;
            queue.push(node.left);
        }
        if(rightValue){
            const rightNode = new TreeNode(rightValue);
            node.right = rightNode;
            queue.push(node.right);
        }
        cursor+=2;
    }
    return root;
}
// console.log(generatorBinaryTree([1,2]))
export default generatorBinaryTree;