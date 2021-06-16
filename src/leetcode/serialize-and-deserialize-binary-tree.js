/**
 * 二叉树的序列化与反序列化
 * @link: https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 * 这个方法可以用来构建二叉树的树结构，做测试用例用
 */ 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    if (!root) return '';
   const queue = [root];
   let res = [];
   while (queue.length) {
       const node = queue.shift();
       if(node){
           res.push(node.val);
           queue.push(node.left);
           queue.push(node.right);
       }else{
           res.push('X');
       }
   }
   return res.join(',');
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
   if(!data) return null;
   const list = data.split(',');
   const root= new TreeNode(list[0]);
   let queue = [root];
   let cursor = 1;
   while(cursor<list.length){
       const node =queue.shift();
       const leftValue = list[cursor];
       const rightValue = list[cursor+1];
       if(leftValue != 'X'){
           const leftNode = new TreeNode(leftValue);
           node.left = leftNode;
           queue.push(node.left);
       }
       if(rightValue != 'X'){
           const rightNode = new TreeNode(rightValue);
           node.right = rightNode;
           queue.push(node.right);
       }
       cursor+=2;
   }
   return root;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
export {
    serialize,
    deserialize
} ;
