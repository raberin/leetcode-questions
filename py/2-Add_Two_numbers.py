"""
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
"""


class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


def addTwoNumbers(l1, l2):
    # Create arr variables for both
    l1_arr = []
    l2_arr = []
    # Iterate through both lists
    # append to front of list
    currentL1 = l1
    currentL2 = l2
    while currentL1:
        l1_arr.insert(0, str(currentL1.val))
        currentL1 = currentL1.next
    while currentL2:
        l2_arr.insert(0, str(currentL2.val))
        currentL2 = currentL2.next

    # Convert to integer and join list of nums together
    l1arrjoin = int("".join(l1_arr))
    l2arrjoin = int("".join(l2_arr))
    # Sum the two number and convert to str
    sum_of_lists = str(l1arrjoin + l2arrjoin)
    # Convert the str by list casting
    # Seperates them into individual characters --> still strings
    sum_of_lists = list(sum_of_lists)
    # Convert list of stringed integers to int
    sum_of_lists_int = [int(str_int) for str_int in sum_of_lists]
    # Recreate linked list
    # Instantiate linked list with the last number of sum_of_lists_int
    summed_list = ListNode(sum_of_lists_int[len(sum_of_lists_int) - 1])
    # Create current for looping
    current = summed_list
    # Loop through sum_of_lists_int backwards (start(inclusive), stop(exclusive), step)
    # Subtract len with 2 since we already instantiated first node
    for i in range(len(sum_of_lists_int) - 2, -1, -1):
        node = ListNode(sum_of_lists_int[i])
        current.next = node
        current = current.next
        print(current)
    # Return newly formed list
    return summed_list


mylist1 = ListNode(2)
mylist1.next = ListNode(4)
mylist1.next.next = ListNode(3)

mylist2 = ListNode(5)
mylist2.next = ListNode(6)
mylist2.next.next = ListNode(4)

mynums = addTwoNumbers(mylist1, mylist2)
# Answer is [7,0,8]
