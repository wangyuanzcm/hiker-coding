/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 寻找二叉树上从根结点到给定结点的路径
 * @param {TreeNode} root
 * @param {TreeNode} node
 * @return {number[][]}
 */
const searchNode = (root, target) => {
    const path = [];
    let res = [];
    const DFS = (root, target) => {
        if (!root) return;
        path.push(root.val);
        if (target === root.val) {
            res = path.slice();
        }
        if (root.left) DFS(root.left, target);
        if (root.right) DFS(root.right, target);
        path.pop();
    }
    DFS(root, target);
    return res;
};

export default searchNode;
