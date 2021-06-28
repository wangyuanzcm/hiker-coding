/**
 * 102. 二叉树的层序遍历
 * @link: 链接,引用文档等
 * @param {TreeNode} root
 * @return {number[][]} 
 */ 
 var levelOrder = function(root) {
    if(!root) return [];
    let stack = [root];
    let res = [];
    while(stack.length>0){
        let temp = [];
        let len = stack.length;
        for(let i=0;i<len;i++){
            let node = stack.shift();
            temp.push(node.val);
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }
      
        res.push(temp)
    }
    return res;
};
export default levelOrder;
