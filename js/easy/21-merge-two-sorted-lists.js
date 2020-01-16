/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  //Create new linkedList
  let l3 = new ListNode(null);
  let currentNode = l3;

  //Loop through comparing both values of linked List, if so append to new list
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      //Make l3 next value whichever is list is less
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  //Once loop is over, maybe we didnt exhaust one of the lists?
  //Append the rest of the sorted list to l3
  if (!l1) {
    currentNode.next = l2;
  }
  if (!l2) {
    currentNode.next = l1;
  }

  //Return l3.next since the head value is null
  return l3.next;
};
