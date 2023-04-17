/**
 * Leecode 860
 * 要求
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

注意，一开始你手头没有任何零钱。

给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

思路
碰到5块直接收钱，10块直接找5块，20块有10有5就这样找(5块最有用)，如果没有看有没有三张5块，有的话也可以直接找

 */
export function lemonadeChange(bills: number[]): boolean { //92ms,50.2MB
    //暴力解法
    let fives:number = 0 
    let tenes:number = 0
    let twes:number = 0
    for(const bill of bills) {
        if(bill == 5) {
            fives++
        }
        else if(bill == 10) {
            if(fives > 0){
                fives--
                tenes++
            }
            else return false
        }
        else if(bill == 20) {
            if(fives > 0) { //找15块一定要有5块的，没有5块的不行
                if(tenes > 0) { //如果有10块的
                    tenes--
                    fives--
                    twes++
                }
                else { //如果没有10块的看下有没有三张5块
                    if(fives >= 3) {
                        fives -= 3
                    }
                    else return false
                }
            }
            else return false //没有5块直接return false
        }
    }
    return true
};

//优化
function lemonadeChange1(bills: number[]): boolean { //80ms,50.1MB
    //暴力解法
    let fives:number = 0 
    let tenes:number = 0
    for(const bill of bills) {
        if(bill == 5) {
            fives++
        }
        else if(bill == 10) {
            tenes++
            if(fives > 0){
                fives--
            }
            else {return false}
        }
        else if(bill == 20) {
           if(fives > 0 && tenes > 0){
            fives--
            tenes--
           }
           else if(fives >= 3){
            fives -= 3
           }
           else {return false}
        }
    }
    return true
};