const largestPalindromeProduct = (n) => {

let number1 = []
let number2 = []
let i = 0;

while (i < n) {
    number1.push(9)
    number2.push(9)
    i++
}

number1 = parseInt(number1.join(""))
number2 = parseInt(number2.join(""))
let min = (number1 + 1) / 10;
const palindroms = [];

for (let j=number1; j>=min; j--) {
    for (let k= number2; k>=min; k--) {
        let multiple = j * k
        let numReverse = parseInt([...String(multiple)].reverse().join(""));

        if (multiple === numReverse) {
            palindroms.push(multiple)
        }
    }
}

return Math.max(...palindroms)

}


console.log(largestPalindromeProduct(3));