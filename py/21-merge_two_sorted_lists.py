"""
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
"""


class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        # Create variables to store return and handle loop
        # Create a dummy node to handle all future next nodes
        root_merged = current = ListNode(0)

        # While loop if both lists are valid
        while l1 and l2:
            # If l1's value is less than...
            if l1.val <= l2.val:
                # Set next node to l1
                current.next = l1
                # Move linked lists over one
                current = current.next
                l1 = l1.next
            else:
                current.next = l2
                current = current.next
                l2 = l2.next

        # Handle if one of the lists are exhausted
        if l1 == None:
            current.next = l2
        if l2 == None:
            current.next = l1

        # return the node after dummy node
        return root_merged.next
