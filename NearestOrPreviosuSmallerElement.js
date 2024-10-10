// function nearestSmallerElementBruteForce(arr) {
//     let n = arr.length;
//     let result = new Array(n).fill(-1);

//     for (let i = 0; i < n; i++) {
//         for (let j = i - 1; j >= 0; j--) {
//             if (arr[j] < arr[i]) {
//                 result[i] = arr[j];
//                 break;
//             }
//         }
//     }

//     return result;
// }

// // Example usage
// let arr = [4, 5, 2, 10, 8];
// console.log(nearestSmallerElementBruteForce(arr)); // Output: [-1, 4, -1, 2, 2]

//-----------------Optimal Appraoch--------------------//
function nearestSmallerElementOptimized(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }

    return result;
}

// Example usage
let arr2 = [4, 5, 2, 10, 8];
console.log(nearestSmallerElementOptimized(arr2)); // Output: [-1, 4, -1, 2, 2]

