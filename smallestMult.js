const smallestMult = (n) => {


    let number = n

    for (let i=1; i<= n; i++) {

        // console.log(number, ' % ' ,i, ' = ',number % i)
        if (number % i !== 0) {
            number++
            i=1
        }
    }



    return number
}

console.log(smallestMult(20));