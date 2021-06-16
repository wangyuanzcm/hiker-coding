/**
 * 剑指 Offer 34. 二叉树中和为某一值的路径
 * @link: https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */ 
 var pathSum = function(root, target) {
    let res = [];
    let path = [];
    const DFS = (root,target)=>{
        if(!root) return;
        path.push(root.val);
        target-=root.val;
        if(target===0&&!root.left&&!root.right){
            res.push(path.slice());
        }
        DFS(root.left,target);
        DFS(root.right,target);
        path.pop();
    }
    DFS(root,target);
    return res;
};

export default pathSum;
