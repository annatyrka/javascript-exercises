const isPrime = (number) => {

    let isPrime = true;
    if (number < 2) {
        prompt('Insert correct number')
    }
    for (let i=2; i<number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break
        }
    }

    return isPrime
}

console.log(isPrime(47))