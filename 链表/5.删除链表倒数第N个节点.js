/**
 * Leecode 19
 * 条件只有一个头节点 head ， 以及 n
 * 
 * 思路 用双指针、虚拟头节点
 * 通过快指针遍历链表来帮助慢指针定位到倒数第N个位置
 */

let dummyhead = new ListNode(-1,head) 
let fast = dummyhead , slow = dummyhead
//先让fast走n步 
while(n-- && fast != null) {
    fast = fast.next
}
//假设这里fast走了x步，链表的总长度为X+N，这个时候满指针走了x步，距离末尾也就是N的距离 
while(fast != null) {
    fast = fast.next
    slow = slow.next
}
//删除元素
slow.next = slow.next.next
return dummyhead.next

