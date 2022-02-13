const findMinValue = (array) => {

    let minValue = array[0]
    
    for (let i=0; i< array.length -1; i++) {
        if (array[i] < minValue) {
            minValue = array[i]
        }
    }
return minValue
}


console.log(findMinValue([4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))