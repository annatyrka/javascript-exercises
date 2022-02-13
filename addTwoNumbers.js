var addTwoNumbers = function(l1, l2) {
    
    console.log(typeof l1)
    var numl1 = parseInt(l1.reverse().join(""));
    var numl2 = parseInt(l2.reverse().join("")) ;
        console.log(numl1, numl2)
    return ((numl1) + (numl2)).toString().split("").reverse();
        
    };


    console.log(addTwoNumbers([0], [0]))