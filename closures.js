function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable)
        console.log('Inner Variable: ' + innerVariable)
    }
}

const newFunction = outerFunction('outside');
// console.log(newFunction)
newFunction('inner');


const x = 5; // global variable

function someThing(y) {
    let z = y + x;
    console.log(z)
    console.log(x)
}

someThing(4);
// console.log(z); -  reference error - z not defined