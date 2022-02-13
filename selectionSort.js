function selectionSort(array) {

    let index = 0
    while (index < array.length) {

    // find the minimum value at the current index
    let min = array[index]
    let minIndex = index
   for (let i=index; i<array.length; i++) {
       if (array[i] < min) {
           min = array[i]
           minIndex = i
       }
   }
    // console.log('min: ' ,min,'minIndex: ',minIndex,'index: ' ,index)
    for (let j=minIndex; j> index; j--) {
            array[j] = array[j-1]   
    } 
        array[index] = min
        index++  
}
    return array;
  }

  console.log(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))