const largestPrimeFactor = (number) => {

    const primeNumbers = [];

    for (let i=2; i <= number; i++) {
        flag = 0;

        for (let j=2; j < i; j++) {
            if (i % j === 0) {
                flag = 1;
                break
            }
        }

        if (flag === 0) {
            primeNumbers.push(i)
        }
    }
//  console.log(primeNumbers)

 let multiple = 1;
 let index = 0
 let i=index


 
}

largestPrimeFactor(13195)