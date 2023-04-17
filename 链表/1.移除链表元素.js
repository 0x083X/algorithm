/**
 * leecode 203
 * 给你一个链表的头节点head和一个整数val，请你删除链表中所有满足Node.val == val 的节点，并返回新的头节点
 */


/**
 * 1.普通解法
 * -单纯遍历链表，删除元素
 * -注意头节点删除操作和非头节点的不一样
 */

//先处理头节点(用while循环处理，不要用if，用if处理不干净)
while(head != null && head.val == target) {
    //head直接指向头节点的下一个节点
    head = head.next
}

//删除非头节点的情况
//定义一个临时指针代替头节点遍历链表
let cur = head 
while(cur != null && cur.next != null) {
    if(cur.next.val == target) {
        cur.next=cur.next.next
    }
    else{
        cur = cur.next
    }
}
//返回头节点
// return head

/**
 * 2.用虚拟头节点的写法，不需要在细分 头节点非头节点的写法
 * 虚拟头节点就是用来统一逻辑的
 */

//dummyhead是虚拟头节点 , 头节点里面的next是head
let dummyhead = new ListNode(-1,head)

/**
 * 因为不可能删除虚拟头节点，所以只有删除非虚拟头节点这一种写法
 */
//删除非虚拟头节点
//同样用cur代替dummyhead移动
let cur1 = dummyhead
while(cur1 != null && cur1.next != null) {
    if(cur1.next.val == target) {
        cur1.next = cur1.next.next
    }
    else{
        cur1 = cur1.next
    }
}
//返回头节点
return dummyhead.next