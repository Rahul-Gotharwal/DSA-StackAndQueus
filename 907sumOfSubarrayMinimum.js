// function sumOfSubarrayMinimums(arr){
//  let n = arr.length ;
//   let sum = 0 ;
//   for(let i = 0 ; i<n ; i++){
//     for(let j = i ; j<n ; j++){
//         let min = arr[i];
//        // console.log(min)
//         for(let k = i ; k<=j ; k++){
//             min= Math.min(min,arr[k])
//         }
//         sum+=min
//     }
//   }
//   return sum
// }
// let arr = [3, 1, 2, 4];
// console.log(sumOfSubarrayMinimums(arr));
/**
 * Certainly! Let's walk through the given code with the detailed steps including the `k` loop for the input array `[3, 1, 2, 4]`.

### Initial State
- `arr = [3, 1, 2, 4]`
- `n = arr.length = 4`
- `sum = 0`

### Iteration Details

#### Outer Loop (`i` from 0 to 3)

1. **First Iteration (`i = 0`):**
   - `j` loop runs from 0 to 3.
   - For each `j`, compute the minimum value in the subarray `arr[i...j]`.

   - `j = 0`:
     - Subarray: `[3]`
     - `min = arr[0] = 3`
     - `k` loop runs from 0 to 0 (1 iteration):
       - `k = 0`: `min = Math.min(3, arr[0]) = 3`
     - `sum += min` → `sum = 3`

   - `j = 1`:
     - Subarray: `[3, 1]`
     - `min = arr[0] = 3`
     - `k` loop runs from 0 to 1 (2 iterations):
       - `k = 0`: `min = Math.min(3, arr[0]) = 3`
       - `k = 1`: `min = Math.min(3, arr[1]) = 1`
     - `sum += min` → `sum = 4`

   - `j = 2`:
     - Subarray: `[3, 1, 2]`
     - `min = arr[0] = 3`
     - `k` loop runs from 0 to 2 (3 iterations):
       - `k = 0`: `min = Math.min(3, arr[0]) = 3`
       - `k = 1`: `min = Math.min(3, arr[1]) = 1`
       - `k = 2`: `min = Math.min(1, arr[2]) = 1`
     - `sum += min` → `sum = 5`

   - `j = 3`:
     - Subarray: `[3, 1, 2, 4]`
     - `min = arr[0] = 3`
     - `k` loop runs from 0 to 3 (4 iterations):
       - `k = 0`: `min = Math.min(3, arr[0]) = 3`
       - `k = 1`: `min = Math.min(3, arr[1]) = 1`
       - `k = 2`: `min = Math.min(1, arr[2]) = 1`
       - `k = 3`: `min = Math.min(1, arr[3]) = 1`
     - `sum += min` → `sum = 6`

2. **Second Iteration (`i = 1`):**
   - `j` loop runs from 1 to 3.
   - For each `j`, compute the minimum value in the subarray `arr[i...j]`.

   - `j = 1`:
     - Subarray: `[1]`
     - `min = arr[1] = 1`
     - `k` loop runs from 1 to 1 (1 iteration):
       - `k = 1`: `min = Math.min(1, arr[1]) = 1`
     - `sum += min` → `sum = 7`

   - `j = 2`:
     - Subarray: `[1, 2]`
     - `min = arr[1] = 1`
     - `k` loop runs from 1 to 2 (2 iterations):
       - `k = 1`: `min = Math.min(1, arr[1]) = 1`
       - `k = 2`: `min = Math.min(1, arr[2]) = 1`
     - `sum += min` → `sum = 8`

   - `j = 3`:
     - Subarray: `[1, 2, 4]`
     - `min = arr[1] = 1`
     - `k` loop runs from 1 to 3 (3 iterations):
       - `k = 1`: `min = Math.min(1, arr[1]) = 1`
       - `k = 2`: `min = Math.min(1, arr[2]) = 1`
       - `k = 3`: `min = Math.min(1, arr[3]) = 1`
     - `sum += min` → `sum = 9`

3. **Third Iteration (`i = 2`):**
   - `j` loop runs from 2 to 3.
   - For each `j`, compute the minimum value in the subarray `arr[i...j]`.

   - `j = 2`:
     - Subarray: `[2]`
     - `min = arr[2] = 2`
     - `k` loop runs from 2 to 2 (1 iteration):
       - `k = 2`: `min = Math.min(2, arr[2]) = 2`
     - `sum += min` → `sum = 11`

   - `j = 3`:
     - Subarray: `[2, 4]`
     - `min = arr[2] = 2`
     - `k` loop runs from 2 to 3 (2 iterations):
       - `k = 2`: `min = Math.min(2, arr[2]) = 2`
       - `k = 3`: `min = Math.min(2, arr[3]) = 2`
     - `sum += min` → `sum = 13`

4. **Fourth Iteration (`i = 3`):**
   - `j` loop runs from 3 to 3.
   - For each `j`, compute the minimum value in the subarray `arr[i...j]`.

   - `j = 3`:
     - Subarray: `[4]`
     - `min = arr[3] = 4`
     - `k` loop runs from 3 to 3 (1 iteration):
       - `k = 3`: `min = Math.min(4, arr[3]) = 4`
     - `sum += min` → `sum = 17`

 */
//------------------Optimized Approach using the NSE  or PSE ------------//\
// NOTE - we should change the both the fundtion because we want to return the indexes 
// instead of  stack.push(arr[i]) we push  stack.push(i) and in the  new Array(n).fill(-1); we fill n insted of -1 
function nextSmallerElementOptimized(arr) {
  let n = arr.length;
  let result = new Array(n).fill(n);
  let stack = [];

  for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
          stack.pop();
      }
      if (stack.length > 0) {
          result[i] = stack[stack.length - 1];
      }
      stack.push(i);
  }

  return result;
}

function previousSmallerElementOptimized(arr) {
  let n = arr.length;
  let result = new Array(n).fill(-1);
  let stack = [];

  for (let i = 0; i < n; i++) {
      while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
          stack.pop();
      }
      if (stack.length > 0) {
          result[i] = stack[stack.length - 1];
      }
      stack.push(i);
  }

  return result;
}

function sumOfSubarrayMinimums(arr) {
  const MOD = 10 ** 9 + 7;
  let n = arr.length;
  let nextSmaller = nextSmallerElementOptimized(arr);
  let prevSmaller = previousSmallerElementOptimized(arr);
  let result = 0;

  for (let i = 0; i < n; i++) {
      let left = i - prevSmaller[i];
      let right = nextSmaller[i] - i;
      result = (result + arr[i] * left * right) % MOD;
  }

  return result;
}

// Example usage:
let arr1 = [3, 1, 2, 4];
console.log(sumOfSubarrayMinimums(arr1)); // Output: 17

let arr2 = [11, 81, 94, 43, 3];
console.log(sumOfSubarrayMinimums(arr2)); // Output: 444
