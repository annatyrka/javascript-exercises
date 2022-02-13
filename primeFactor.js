function largestPrimeFactor(number) {

const primeNumbers = [];
let isPrime = true;

for (let i=2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break
    } else {
        isPrime = true;
        primeNumbers.push(number)
    }
}

let multiple = 1
let n = 0
    
    while( multiple < number) {
        multiple *= primeNumbers[n]
        n++
    }

    console.log(primeNumbers)
    console.log(n)
return primeNumbers[n]

}

console.log(largestPrimeFactor(13195))
