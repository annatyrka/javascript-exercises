function merge (leftArr, rightArr) {
  
const output = [];
let leftIndex = 0;
let rightIndex = 0;

while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex]
    const rightEl = rightArr[rightIndex]

    if (leftEl < rightEl) {
        output.push(leftEl)
        leftIndex ++
    } else {
        output.push(rightEl)
        rightIndex ++
    }
}
return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
};

function mergeSort(array) {

    if (array.length <= 1) {
        return array
    }
    const middle = Math.floor(array.length/2)
    const leftArray = array.slice(0, middle)
    const rightArray = array.splice(middle)
   
    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    )
    
};

console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))