function checkCashRegister(price, cash, cid) {
    

    let change  = (cash - price)*100

    let cidTotal = 0;

    // total in the drawer
    for (let i = 0 ; i< cid.length; i++) {
        cidTotal += cid[i][1] * 100;
    }
   
    // if change > cash in drawer
    if (change > cidTotal) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    // if change === cash in drawer
    else if (change === cidTotal) {
        return {status: "CLOSED", change: cid}
    }

    else {

        // reverse the array
        cid.reverse();

        // money units to compare to
        let moneyUnits =   [['HUNDRED', 10000],
        ['TWENTY', 2000],
        ['TEN', 1000],
        ['FIVE', 500],
        ['ONE', 100],
        ['QUARTER', 25],
        ['DIME', 10],
        ['NIKEL', 5],
        ['PENNY', 1],
    ]

    // chnage due
    let changeDue =
    [['HUNDRED', 0],
    ['TWENTY', 0],
    ['TEN', 0],
    ['FIVE', 0],
    ['ONE', 0],
    ['QUARTER', 0],
    ['DIME', 0],
    ['NIKEL', 0],
    ['PENNY', 0],
]

        
        for (let i=0; i<cid.length; i++) {

            // converting to integers
            cid[i][1] = cid[i][1]*100

                // starting from the top of array from notes to coins
            while (change >= moneyUnits[i][1] && cid[i][1] > 0) {
           
                // updating the array with change due
                changeDue[i][1] = changeDue[i][1] +moneyUnits[i][1]

                // decreasing the amount in cash in drawer
                cid[i][1] = cid[i][1] - moneyUnits[i][1]

                // decreasing change variable
                change -= moneyUnits[i][1]
                    
            }
            
        }

        // when the loops finished but the changed !== 0
        if (change !== 0) {
            return {status: "INSUFFICIENT_FUNDS", change: []}
        }
        // copnvert back to decimals
let result = changeDue.map((item) => ([item[0],item[1]/100]))

        // remove items[1] === 0
 let   result1 = result.filter((item) =>item[1] >0)
return {status: "OPEN", change: result1}
    
    }
    }
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));