function pairwise(arr, arg) {

    const used = []
    let sum = 0
    
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] + arr[j] === arg && !used.includes(j) && !used.includes(i)) {
                let total =0
                used.push(i)
                used.push(j)
                total = i + j
                sum += total
            }
        }                    
     }     
        
        return sum  
    }
   
   

    //4 7
  console.log(pairwise([1,4,2,3,0,5], 7));
//   console.log(pairwise([1, 3, 2, 4], 4))
//   console.log(pairwise([0, 0, 0, 0, 1, 1], 1))
//   console.log(pairwise([], 100))