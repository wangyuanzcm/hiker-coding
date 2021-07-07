/**
 * 979. 在二叉树中分配硬币
 * @link: https://leetcode-cn.com/problems/distribute-coins-in-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */ 
 var distributeCoins = function(root) {
    let path = 0;
    let DFS = (root)=>{
        if(!root) return 0;
        let left = DFS(root.left);
        let right = DFS(root.right);
        path+= Math.abs(left)+Math.abs(right);
        return left+right+root.val-1;
    }
    DFS(root);
    return path;
};

export default distributeCoins;
