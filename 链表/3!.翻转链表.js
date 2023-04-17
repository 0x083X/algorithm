/**
 * Leecode 206 有两种写法 1.双指针 2.递归
 * 条件只有一个头节点 head.
 */

/**
 * 1.双指针写法
 * 首先 有两个指针一个 cur、一个pre，pre指向cur前面的链表元素，然后用 cur->next = pre 的写法来让链表反转
 */

let cur = head , pre = null
//最后到cur = null的时候就代表链表到最后一位了就不用继续反转 
while(cur ){
    //存储 cur中的next值
    let temp = cur.next 
    //让cur指向pre
    cur.next = pre
    //用temp过渡到下一个元素
    pre = cur 
    cur = temp
}
//最后返回新的链表的头节点(cur为null，pre正好在cur前一个是链表最后一个元素)
return pre


/**
 * 2.递归写法(递归写法的思路是按照双指针的来的)
 */

//自定义递归函数,接收两个参数 pre , cur
let recursion = function(pre,cur){
    //递归函数第一步写返回条件和返回值(返回值是反转链表后的头指针)
    if(cur == null) {return pre}
    //存储 temp
    let temp = cur.next
    //让cur指向pre
    cur.next = pre
    //进入下面一层关系
    return recursion(cur,temp)
}

var reverseList = function(head) {
    //直接返回反转后的头节点
    return recursion(null,head)
};