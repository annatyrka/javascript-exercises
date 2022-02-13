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


      let resultArr = [];

    
      // below 20
      const belowTwenty = (num) => {

        for (let i = 1; i<= num; i++) {
            resultArr.push(units[i])
        }
      }

      // below 100
      const belowHundred = (num) => {
        belowTwenty(19);

        for (let i = 20; i <= num; i++) {
            let ten = parseInt(String(i)[0]);
            let unit = parseInt(String(i)[1]);
            resultArr.push(tens[ten],units[unit])

        }

      }
      // below 1000
      const belowThousand = (num) => {
        belowHundred(100);
        for (let i = 100; i <= num; i++) {
            let hundred = parseInt(String(i)[0]);
            let ten = parseInt(String(i)[1]);
            let unit = parseInt(String(i)[2]);

            ten == 0 && unit == 0 ?
            resultArr.push(units[hundred], 'hundred')
            : ten == 1 ? resultArr.push(units[hundred], 'hundred','and', units[10 + unit])
            :
            resultArr.push(units[hundred], 'hundred','and', tens[ten],units[unit] )
    
        }
      }
      const thousand = () => {
        belowThousand(999)
        resultArr.push('thousand')
      }



     limit == 1000 ? thousand() : limit >= 100 ? belowThousand(limit) : limit >= 20 ? belowHundred(limit) : belowTwenty(limit)
      
        console.log(resultArr.slice(0,100))

      

      return resultArr.join('').length

  }

  
  console.log(numberLetterCounts(1000));