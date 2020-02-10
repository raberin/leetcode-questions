/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function ListNode(val) {
    this.val = val;
     this.next = null;
}

const AddTwo = (list1, list2) => {
    let ll1 = []
    let ll2 = []
    let currentNode1 = list1
    let currentNode2 = list2
    let resultList 
    let headOfResult

    //Push values into arrays in reverse order
    while(currentNode1){
        ll1.unshift(currentNode1.val)
        currentNode1 = currentNode1.next
    }
    while(currentNode2){
        ll2.unshift(currentNode2.val)
        currentNode2 = currentNode2.next
    }

    //Join both arrays and convert to number due to split and sum them for final result
    let sum = Number(ll1.join('')) + Number(ll2.join(''))

    // Convert the sum back to a string and reverse the values due to reverse order LL
    let sumToArr = sum.toString().split('').reverse()

    
    for(let i = 0; i < ll1.length; i++){
        // Convert each string back to a num
        // Add the num into a new LL node
        let convertNum = Number(sumToArr[i]);
        if(resultList === undefined){
            resultList = new ListNode(convertNum)
            headOfResult = resultList
        } else {
            resultList.next = new ListNode(convertNum)
            resultList = resultList.next
        }

    }
    // Head of newly created LL was save to return
    return headOfResult
}

// Testing my function
let llist1 = new ListNode(2)
let llist11 = new ListNode(4)
let llist111 = new ListNode(3)
llist1.next = llist11
llist11.next = llist111
console.log(llist1) // 2 -> 4 -> 3

let llist2 = new ListNode(5)
let llist22 = new ListNode(6)
let llist222 = new ListNode(4)
llist2.next = llist22
llist22.next = llist222
console.log(llist2) // 5 -> 6 -> 4

console.log(AddTwo(llist1, llist2)) // 7 -> 0 -> 8