const findPrimeNumbers = (number) => {

    const primeNumbers = [];

    for (let i = 2; i<=number; i++) {
        let flag = 0
        for (let j = 2; j < i; j++) {
      
            if (i % j === 0) {
                flag = 1
                break;
            }
       
        }
        if (flag === 0) {
            primeNumbers.push(i)
    }
    }
    return primeNumbers
}

console.log(findPrimeNumbers(11))