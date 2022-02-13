function numberLetterCounts(limit) {

    const units = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
      ];
      const tens = [
          '',
          '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
      ];
      const shortscale = [
        '',
        'thousand',
        'million',
        'billion',
        'trillion',
        'quadrillion',
        'quintillion',
        'sextillion',
        'septillion',
        'octillion',
        'nonillion'
      ];


      let resultArr = [];

    

      if (limit < 20) {

        for (let i = 1; i<= limit; i++) {
            resultArr.push(units[i])
        }
      }

      else if (limit < 100) {

        for (let i = 1; i< 20 ; i++) {
            resultArr.push(units[i])
        }
        
        for (let i = 20; i < limit; i++) {
            let ten = parseInt(String(i)[0]);
            let unit = parseInt(String(i)[1]);
            resultArr.push(tens[ten],units[unit])

        }

      }

      else if (limit < 1000) {
        
        for (let i = 1; i< 20; i++) {
            resultArr.push(units[i])
        }

            console.log(resultArr.length)
        for (let i = 20; i < 100; i++) {
            let ten = parseInt(String(i)[0]);
            let unit = parseInt(String(i)[1]);
            resultArr.push(tens[ten],units[unit])

        }
        console.log(resultArr.join('').length)
        for (let i = 100; i <= limit; i++) {
            let hundred = parseInt(String(i)[0]);
            let ten = parseInt(String(i)[1]);
            let unit = parseInt(String(i)[2]);

            ten == 0 && unit == 0 ?
            resultArr.push(units[hundred], 'hundred')
            : ten == 1 ? resultArr.push(units[hundred], 'hundred','and', units[10 + unit])
            :
            resultArr.push(units[hundred], 'hundred','and', tens[ten],units[unit] )
    

        }
        console.log('length: ', resultArr.length)
        console.log(resultArr.slice(200,300))
        console.log(resultArr.join('').length)

      }
      else if (limit == 1000)

      return resultArr.join('').length

  }



  
  console.log(numberLetterCounts(150));