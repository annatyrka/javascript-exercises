const symDiff = (...args) => {

    const arguments = [...args]

    const reducer = (arrayOne, arrayTwo) => {
        let result = [];
        arrayOne.forEach((item) => {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });
        arrayTwo.forEach((item) => {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }
    
    return arguments.reduce(reducer);
 
}

symDiff([1,2,5], [2,3,5], [3,4,5]);
