/*Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?*/

//Recursive Solution
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/*
pre-order: visit the parent, then all the left children, and then all the right children.

in-order: visit the left child, then the parent, and then the right child. This approach is useful for BSTs as it traverses the nodes in sorted order.

post-order: visit the left child, then the right child, and then the parent.
*/
var inorderTraversal = function(root) {
  //Base case if root is not true, return empty arr
  if (!root) {
    return [];
  }
  //Recursively go down left => parent => right
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right)
  ];
};

//iterative solution
let inorderTraversal = root => {
  let stack = [];
  let result = [];

  while (root || stack.length) {
    if (root) {
      //if root is available/defined
      stack.push(root);
      root = root.left; //Go down a root left
    } else {
      root = stack.pop(); //pop returns the last value in the stack
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
};
