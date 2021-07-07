/**
 * 112. 路径总和
 * @link: https://leetcode-cn.com/problems/path-sum/
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */ 
 var hasPathSum = function(root, targetSum) {
    if(!root) return false;
   if(!root.left&&!root.right) return targetSum === root.val;
   return hasPathSum(root.left,targetSum-root.val)||hasPathSum(root.right,targetSum-root.val)

};

export default hasPathSum;
