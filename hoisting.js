// Variable hoisting

// console.log(definedLater);
let definedLater;
definedLater = "I am defined later";
// console.log(definedLater);

// Function hoisting

doSomethingElse();
function doSomethingElse(){
    console.log('I did something else')
};

// doSomethingDifferent();

const doSomethingDifferent = () => {
    console.log("I did someething different")
};


console.log(a);
let a = "Hello";