const countdown = (i) => {

    console.log(i);
    if (i < 1) return
    else {
        countdown(i-1)
    }
}

// countdown(5)

const factorial = (num) => {

    if (num <= 1) return 1
    else {
        return factorial(num -1) * num
    }
}

// factorial(4) * 5
// factorial(3)*4*5
// factorial(2)*3*4*5
// factorial(1)*2*3*4*5
// 1*2*3*4*5

// console.log(factorial(5))

const multiply = (arr,num) => {
    let product = 1;
    let i =0
    while (i<num) {
        product *= arr[i]
        i++
    }
    return product
}


const multiply2 = (arr,num) => {

    if (num <= 0) return 1
    else {
        return multiply2(arr, num-1) * arr[num-1]
    }
}

// multiply(arr,4) * arr[4]
// multiply(arr,3) * arr[3] * arr[4]
// multiply(arr,2) * arr[2] * arr[3] * arr[4]
// multiply(arr,1) * arr[1] * arr[2] * arr[3] * arr[4]
// multiply(arr,0) * arr[0] * arr[1] * arr[2] * arr[3] * arr[4]
// 1 * arr[0] * arr[1] * arr[2] * arr[3] * arr[4]

console.log(multiply2([1,2,3,4,5,6,7],5))