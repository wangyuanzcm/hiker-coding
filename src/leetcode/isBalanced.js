/**
 * 输入一棵二叉树的根节点，判断该树是不是平衡二叉树
 * @link: https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/
 * @param {TreeNode} root
 * @return {boolean}
 **/ 
 var isBalanced = function(root) {
    let flag = true;
    let DFS = (root)=>{
        if(!root||!flag){
            return 0;
        }
        let left = DFS(root.left);
        let right = DFS(root.right);
        if(Math.abs(left-right)>1){
            flag = false;
            return 0
        }
        return Math.max(left,right)+1;
        
    }
    DFS(root);
    return flag;
};
export default isBalanced;
