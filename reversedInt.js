var reverse = function(x) {
    var reversedNum = x.toString().split("").reverse().join("");

    
    var result = reversedNum[reversedNum.length -1] === '-' ? -parseInt(reversedNum) : parseInt(reversedNum)    
    
    return result > 0x7FFFFFFF || result < -0x7FFFFFFF ? 0 : result
    
};

console.log(reverse(83648))