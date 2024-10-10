// //----------------Brute Force-------------//
// function findCelebrityNaive(matrix , n){
//     let KnowMe = new Array(n).fill(0);
//     let iKonw = new Array(n).fill(0);
//     // travese the matrix to fill the arrays
//     for(let i = 0 ; i<n ; i++){
//         for(let j = 0 ; j<n ; j++){
//             if(matrix[i][j]===1){
//                 KnowMe[j]++;
//                 iKonw[i]++
//             }
//         }
//     }
//     // Check if there's a celebrity
//     for(let i = 0 ; i<n ; i++){
//         if(KnowMe[i] === n-1 && iKonw[i]===0 ){
//             return i; // returning the person
//         }
//     }
//     return -1
// }
// const matrix = [
//     [0, 1, 1, 1],
//     [0, 0, 0, 0],
//     [1, 1, 0, 1],
//     [0, 1, 1, 0]
// ];

// const n = matrix.length;

// console.log(findCelebrityNaive(matrix, n)); // Output: 1

//---------------Optimized Approach----------------//

function findCelebrityOptimized(matrix , n ){
    let top = 0 ;
    let down = n-1;
    // Elimination process
    while(top<down){
        if(matrix[top][down] === 1){
            // Top knows down, so top cannot be the celebrity
            top++
        }
        else{
             // Down knows top, so down cannot be the celebrity, 
            down--
        }
    }
    // verify the top
    // puri row ko check krenge ek bar , apart from daiganaol element
    if(top>down) return -1 // koi celebrity nhi he
    for(let i = 0 ; i<n ; i++){
        // checking for the row
      if(i==top) continue // for the diagonal like if i=1 , and top=1 tb
       if(matrix[top][i] ===0 || matrix[i][top]===1){
        return top
       }
       else{
        return -1
       }
    }

  return top
}
const matrix = [
    [0, 1, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];

const n = matrix.length;
console.log(findCelebrityOptimized(matrix, n)); // Output: 1
