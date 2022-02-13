function longestCollatzSequence(limit) {

    let counter = {};
    let numbers = [];
    let count
    let number

      function sequence(n) {
        count = 0;
        do {
        if (n % 2 == 0) {
          n = n / 2
        } else {
          n = 3*n + 1
        }
        count ++
        } while (n > 1);
      }
    
      for (let i=limit; i >= 1; i--) {
        sequence(i)
        counter[i] = count;
      }


    //   console.log(counter);
      
      numbers = Object.entries(counter);

      numbers.sort((a,b) => {
          return b[1] - a[1]
      })

    number = parseInt(numbers[0][0])
    console.log(number);
      return number 

    }
    
    longestCollatzSequence(1000000);