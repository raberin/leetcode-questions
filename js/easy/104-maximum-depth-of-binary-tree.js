/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

//Answer
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  //if root is undefined return 0;
  //Base/Stop case for recursion
  if (!root) {
    return 0;
  }
  //Recursively go down left and right binary tree
  //Add plus 1 to include node/root
  let leftRootVal = maxDepth(root.left) + 1;
  let rightRootVal = maxDepth(root.right) + 1;

  //Ternary check if left > right return height of left or right
  return leftRootVal > rightRootVal ? leftRootVal : rightRootVal;
};
