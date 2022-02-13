const getFinalOpenedDoors = (numDoors) => {

    let doors = {}

    for (let i=1; i<=numDoors; i++) {
        doors[i] = "closed"
    }


    for (let j=1; j <= numDoors; j++) {
        for (let n=0; n<=numDoors ; n+=j) {
    
            doors[n] === "closed" ? doors[n] = "open" : doors[n] = "closed"
        }
    }

    let arr = []

    for (item in doors) {
        if (doors[item] === "open") {
            arr.push(parseInt(item))
        }
    }



    console.log(arr)
    console.log(arr.length)
}

function getFinalOpenedDoors2(numDoors) {
    let doors = [];
    let i = 1, ii = i*i;
  
    while (ii <= numDoors) {
      doors.push(ii);
      i++; ii = i*i;
    }
  
    return doors;
  }

getFinalOpenedDoors(30);
console.log(getFinalOpenedDoors2(30))