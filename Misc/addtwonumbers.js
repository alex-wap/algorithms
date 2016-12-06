/*
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
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
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var value = 0;
    while(l1){
        if (!newList){
            var newList = new ListNode((l1.val+l2.val)%10);
            console.log(newList);
            var current = newList;
            l1=l1.next;
            l2=l2.next;
        }
        value = (l1.val+l2.val)%10+carry;
        if (value%10 !== 0){
            carry = 1;
        } else{
            carry = 0;
        }
        current.next = new ListNode(value+carry);
        l1=l1.next;
        l2=l2.next;
        current = current.next;
        console.log(current);
    }
    return newList;
};