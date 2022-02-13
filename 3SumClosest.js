const threeSumClosest = (nums, target) => {
    
    const result = [];

    for (let i=0; i <nums.length -2; i++) {
        for (let j=i + 1; j <nums.length -1; j++) {
            for (let k=j +1; k <nums.length; k++) {

                result.push(nums[i] + nums[j] + nums[k])
            }
        }
    }

   var closest = result.reduce((accumulator, currentValue) => {

  return  (Math.abs(accumulator - target) < Math.abs(accumulator - currentValue)) ? accumulator : currentValue

   })
   

return closest
    
};

console.log(threeSumClosest([-1,2,1,-4],1))