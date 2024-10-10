// function nextSmallerElementOptimized(arr) {
//     let n = arr.length; // length of the array
//     let result = new Array(n).fill(-1); // initialize the result array with -1
//     let stack = []; // stack to keep track of elements

//     // iterate from the end of the array to the beginning
//     for (let i = n - 1; i >= 0; i--) {
//         // while the stack is not empty and the top of the stack is greater than or equal to the current element
//         while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
//             stack.pop(); // pop the top element from the stack
//         }

//         // if the stack is not empty, the top of the stack is the next smaller element for the current element
//         if (stack.length > 0) {
//             result[i] = stack[stack.length - 1]; // update the result array with the top element of the stack
//         }

//         // push the current element to the stack
//         stack.push(arr[i]);
//     }

//     return result; // return the result array
// }

// // Example usage:
// let arr = [4,2,1,5,3];
// console.log(nextSmallerElementOptimized(arr)); // Output: [-1, -1, 1, 0, 1]


//---------------------Geeks For Geeks Solution----------------//
class Solution {
    immediateSmaller(arr, n) {
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1];
            } else {
                arr[i] = -1;
            }
        }
        arr[n - 1] = -1; // The last element has no element to its right
    }
}

// Example usage:
let arr = [4, 2, 1, 5, 3];
let n = arr.length;
let sol = new Solution();
sol.immediateSmaller(arr, n);
console.log(arr); // Output: [2, 1, -1, 3, -1]
