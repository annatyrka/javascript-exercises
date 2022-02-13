function multiplesOf3and5(number) {
    let num = [];
    for (let i=1; i < number; i++) {
      if ((i % 3 == 0 || i % 5 == 0) && !num.includes(i) ) {
        num.push(i)
      }
    }


  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return num.reduce(reducer);
}

console.log(multiplesOf3and5(49));