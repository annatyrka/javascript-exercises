function largeSum(arr) {

    let num = []
    for (let i=0; i < arr.length; i++) {
        num.push(parseInt(arr[i]))
    }

    const reducer = (prevValue, curValue) => prevValue + curValue;
    const sum = num.reduce(reducer);
    console.log(sum)

    let singleNum = String(sum)
    console.log(singleNum)
    let first10
    if (singleNum[1] == '.') {
        first10 = singleNum.slice(0,1).concat(singleNum.slice(2,11))
    }
    
    return parseInt(first10)
  }
  
  // Only change code above this line
  
  const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
  ];
  
  largeSum(testNums);