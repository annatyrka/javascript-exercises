const testTriangle = [[3, 0, 0, 0],
                        [7, 4, 0, 0],
                        [2, 4, 6, 0],
                        [8, 5, 9, 3]];
  

const testTriangle2 = [
[75,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[95, 64,0,0,0,0,0,0,0,0,0,0,0,0,0],
[17, 47, 82,0,0,0,0,0,0,0,0,0,0,0,0],
[18, 35, 87, 10,0,0,0,0,0,0,0,0,0,0,0],
[20, 04, 82, 47, 65,0,0,0,0,0,0,0,0,0,0],
[19, 01, 23, 75, 03, 34,0,0,0,0,0,0,0,0,0],
[88, 02, 77, 73, 07, 63, 6,0,0,0,0,0,0,0,0],
[99, 65, 04, 28, 06, 16, 70, 92,0,0,0,0,0,0,0],
[41, 41, 26, 56, 83, 40, 80, 70, 33,0,0,0,0,0,0],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29,0,0,0,0,0],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14,0,0,0,0],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57,0,0,0],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48,0,0],
[63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31,0],
[04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]
]

  function maximumPathSumI(triangle) {

    let sum = triangle[0][0];
    let index = 0;
    for (let i=1; i<triangle.length; i++) {
        //index = 0
        if (index === 0 ) {
            if (triangle[i][0] >= triangle[i][1]) {
                sum += triangle[i][0]
                console.log(triangle[i][index])
                // console.log(triangle[i][index])
            }
             else if (triangle[i][0] < triangle[i][1]) {
                 console.log(triangle[i][1] )

                sum += triangle[i][1]
                
              
                index =1
            }
            //index > 0



        } else if (index > 0) {
            // console.log('iteration: ',i,', index: ', index)
            if (triangle[i][index] >= triangle[i][index-1] && triangle[i][index] >= triangle[i][index+1]) {
                sum += triangle[i][index]
                console.log(triangle[i][index])
            } else if (triangle[i][index -1] >= triangle[i][index] && triangle[i][index -1] >= triangle[i][index+1]) {
                sum += triangle[i][index -1]

                console.log(triangle[i][index-1])
                index -=1


            }  else if (triangle[i][index +1] >= triangle[i][index] && triangle[i][index +1] >= triangle[i][index+1]) {
                sum += triangle[i][index +1]
                console.log(triangle[i][index+1])
                index +=1

            }
        }
        console.log('sum: ',sum)
    }

    return sum;
  }

  console.log(maximumPathSumI(testTriangle2));