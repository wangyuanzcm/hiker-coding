/**
 * 104. 二叉树的最大深度
 * @link: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */ 
 var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left,right)+1;
};

export default maxDepth;
