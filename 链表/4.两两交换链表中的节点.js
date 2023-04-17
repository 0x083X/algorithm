/**
 * Leecode 24 
 * 条件只有head头节点这一个
 */

//因为这道题涉及到头部元素的变动，所以我们引入虚拟头节点dummyhead

let dummyhead = new ListNode(-1,head)
let cur = dummyhead
//当链表只剩下一个节点的时候或者0个节点就不需要继续交换
while(cur.next != null && cur.next.next != null) {
    //假设head指向的是[1,2,3,4],dummyhead可以操作1，2值的对调，对调后的值是[2,1,3,4],然后指针移到 1 节点的位置对 3，4进行交换
    

    let temp = cur.next
    let temp1 = cur.next.next.next
    /**
     * 直接指向2节点，但是这样指向了后会导致1节点与其他节点的联系被切断，因为原本的1靠cur来指向的，现在cur直接指向2，导致1节点联系被切断，所以前面应该创建中间量来保存1节点,也可以保存一下3节点，让1节点指向3节点方便一点
     */
    //直接指向2节点
    cur.next = cur.next.next
    //2指向1
    cur.next.next = temp
    //1指向3
    cur.next.next.next = temp1
    //将cur从dummyhead换到1,继续3，4的交换工作
    cur = cur.next.next
}
//返回新的链表头节点
return dummyhead.next
