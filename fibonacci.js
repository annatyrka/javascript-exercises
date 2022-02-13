function fiboEvenSum(n) {

    let arr = [1,2];
    let i = 2;

    while (i <= n) {
        i = arr[arr.length-1] + arr[arr.length-2];
        arr.push(i)
        if (i==n) break
    }

    console.log(arr)
    let arr2 = arr.filter((item) => item % 2 == 0)
    const reducer = (previousValue, currentValue) => previousValue + currentValue
    let sum = arr2.reduce(reducer);
    console.log(sum)
    return sum;
}
fiboEvenSum(34);