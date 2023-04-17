/**
 * leecode 142
 * 条件只有一个头节点 head
 * 考察数学、逻辑
 */

/**
 * 设计两个指针，fast一次走两步，slow一次走一步，如果存在环，它们肯定会在环中相遇
 * 相遇的时候慢指针在环中没走到1圈，假设此时快指针走了n圈，
 * 假设head到环开始地方的距离为x(我们要求的)，指针相遇的地方，慢指针在环中走了y，满指针距离环出口为z，慢指针速度为i,我们可以得到式子
 * 1. 慢指针走了 x+y 快指针走了 2(x+y)
 * 2. 快指针走了 x+y+n(y+z)
 *  x+y+ny+nz = 2x + 2y
 *          x = (n-1)(y+z) + z (n>=1)
 * x就是头节点到环入口的距离，y+z就是环的一圈,这个时候我们发现 如果此时有一个节点从头节点开始走，它和慢指针(或者快指针)相遇的时候就是环的入口!(因为此时慢指针、快指针距离走完这一圈就差了z)
 */

let fast = head , slow = head
//一直走的循环,fast一次走两步
while(fast != null && fast.next != null){
    fast = fast.next.next
    slow = slow.next
    //如果在环中相遇了
    if(fast == slow) {
        //这个时候头节点在走出来一个
        let n = head
        while(1){
            //如果碰到了就代表是环的入口
            if(n == slow) {return slow}
            n = n.next
            slow = slow.next
        }
    }
}
//如果没找到返回null
return null