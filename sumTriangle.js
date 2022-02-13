const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];


const maximumPathSumI = (triangle) => {

let sum=triangle[0][0];
let index = 0;
for (let i=1; i<triangle.length; i++) {
    if(triangle[i][index] >= triangle[i][index +1] ) {
        sum += triangle[i][index]
    } else {
        sum += triangle[i][index +1]
    }

}

return sum;

}
maximumPathSumI(testTriangle);