// ------Brute . Trapping Water Using Nested Loops-------------//
//    function trap(arr){
//     let n = arr.length;
//     let WaterTrapped = 0;
//     for(let i = 0 ; i<n ; i++){
//         let leftMax = 0 , rightMax = 0 ;
//         for(let j = i ; j>=0 ; j--){
//             leftMax = Math.max(leftMax , arr[j])
//         }
//         for(let j = i ; j<n ; j++){
//             rightMax = Math.max(rightMax,arr[j]);
//         }
//         // minimum isiliye nikal rhe he kyuki pani overflow ho jayega to hmkko choti bulding se hi check krna he
//         WaterTrapped+=Math.min(leftMax,rightMax)-arr[i]
//         // in the first iteration the leftMax is 0 and rightMax is 3 , we can see the array  that the 3 is the greater
//     }
//     return WaterTrapped
//    }
//    let arr1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log("The water that can be trapped is " + trap(arr1));
/**
 * Let's dry run the provided `trap` function step by step with the input array `arr1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]` to understand how it calculates the trapped water.

Here's the code for reference:

```javascript
function trap(arr) {
    let n = arr.length;
    let waterTrapped = 0;
    for (let i = 0; i < n; i++) {
        let leftMax = 0, rightMax = 0;
        for (let j = i; j >= 0; j--) {
            leftMax = Math.max(leftMax, arr[j]);
        }
        for (let j = i; j < n; j++) {
            rightMax = Math.max(rightMax, arr[j]);
        }
        waterTrapped += Math.min(leftMax, rightMax) - arr[i];
    }
    return waterTrapped;
}

let arr1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("The water that can be trapped is " + trap(arr1));
```

### Dry Run

**Initialization:**

- `arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]`
- `n = arr.length = 12`
- `waterTrapped = 0`

**Loop through each element in the array:**

1. **i = 0:**
   - `leftMax = 0`
     - Check elements from index 0 to 0:
       - `leftMax = max(0, arr[0]) = max(0, 0) = 0`
   - `rightMax = 0`
     - Check elements from index 0 to 11:
       - `rightMax = max(0, arr[0]) = max(0, 0) = 0`
       - `rightMax = max(0, arr[1]) = max(0, 1) = 1`
       - `rightMax = max(1, arr[2]) = max(1, 0) = 1`
       - `rightMax = max(1, arr[3]) = max(1, 2) = 2`
       - `rightMax = max(2, arr[7]) = max(2, 3) = 3`
   - `waterTrapped += min(0, 3) - arr[0] = 0`
   - `waterTrapped = 0`

2. **i = 1:**
   - `leftMax = 0`
     - Check elements from index 1 to 0:
       - `leftMax = max(0, arr[1]) = max(0, 1) = 1`
       - `leftMax = max(1, arr[0]) = max(1, 0) = 1`
   - `rightMax = 0`
     - Check elements from index 1 to 11:
       - `rightMax = max(0, arr[1]) = max(0, 1) = 1`
       - `rightMax = max(1, arr[2]) = max(1, 0) = 1`
       - `rightMax = max(1, arr[3]) = max(1, 2) = 2`
       - `rightMax = max(2, arr[7]) = max(2, 3) = 3`
   - `waterTrapped += min(1, 3) - arr[1] = 0`
   - `waterTrapped = 0`

3. **i = 2:**
   - `leftMax = 0`
     - Check elements from index 2 to 0:
       - `leftMax = max(0, arr[2]) = max(0, 0) = 0`
       - `leftMax = max(0, arr[1]) = max(0, 1) = 1`
       - `leftMax = max(1, arr[0]) = max(1, 0) = 1`
   - `rightMax = 0`
     - Check elements from index 2 to 11:
       - `rightMax = max(0, arr[2]) = max(0, 0) = 0`
       - `rightMax = max(0, arr[3]) = max(0, 2) = 2`
       - `rightMax = max(2, arr[7]) = max(2, 3) = 3`
   - `waterTrapped += min(1, 3) - arr[2] = 1`
   - `waterTrapped = 1`

4. **i = 3:**
   - `leftMax = 0`
     - Check elements from index 3 to 0:
       - `leftMax = max(0, arr[3]) = max(0, 2) = 2`
       - `leftMax = max(2, arr[2]) = max(2, 0) = 2`
       - `leftMax = max(2, arr[1]) = max(2, 1) = 2`
       - `leftMax = max(2, arr[0]) = max(2, 0) = 2`
   - `rightMax = 0`
     - Check elements from index 3 to 11:
       - `rightMax = max(0, arr[3]) = max(0, 2) = 2`
       - `rightMax = max(2, arr[7]) = max(2, 3) = 3`
   - `waterTrapped += min(2, 3) - arr[3] = 0`
   - `waterTrapped = 1`

5. **i = 4:**
   - `leftMax = 0`
     - Check elements from index 4 to 0:
       - `leftMax = max(0, arr[4]) = max(0, 1) = 1`
       - `leftMax = max(1, arr[3]) = max(1, 2) = 2`
       - `leftMax = max(2, arr[2]) = max(2, 0) = 2`
       - `leftMax = max(2, arr[1]) = max(2, 1) = 2`
       - `leftMax = max(2, arr[0]) = max(2, 0) = 2`
   - `rightMax = 0`
     - Check elements from index 4 to 11:
       - `rightMax = max(0, arr[4]) = max(0, 1) = 1`
       - `rightMax = max(1, arr[7]) = max(1, 3) = 3`
   - `waterTrapped += min(2, 3) - arr[4] = 1`
   - `waterTrapped = 2`

6. **i = 5:**
   - `leftMax = 0`
     - Check elements from index 5 to 0:
       - `leftMax = max(0, arr[5]) = max(0, 0) = 0`
       - `leftMax = max(0, arr[4]) = max(0, 1) = 1`
       - `leftMax = max(1, arr[3]) = max(1, 2) = 2`
       - `leftMax = max(2, arr[2]) = max(2, 0) = 2`
       - `leftMax = max(2, arr[1]) = max(2, 1) = 2`
       - `leftMax = max(2, arr[0]) = max(2, 0) = 2`
   - `rightMax = 0`
     - Check elements from index 5 to 11:
       - `rightMax = max(0, arr[5]) = max(0, 0) = 0`
       - `rightMax = max(0, arr[7]) = max(0, 3) = 3`
   - `waterTrapped += min(2, 3) - arr[5] = 2`
   - `waterTrapped = 4`

7. **i = 6:**
   - `leftMax = 0`
     - Check elements from index 6 to 0:
       - `leftMax = max(0, arr[6]) = max(0, 1) = 1`
       - `leftMax = max(1, arr[5]) = max(1, 0) = 1`
       - `leftMax = max(1, arr[4]) = max(1, 1) = 1`
       - `leftMax = max(1, arr[3]) = max(1, 2) = 2`
       - `leftMax = max(2, arr[2]) = max(2, 0) = 2`
       - `leftMax = max(2, arr[1]) = max(2, 1)
 */

//----------Trapping Water Using Prefix and Suffix Arrays------------//
// function trap(arr) {
//   let n = arr.length;
//   if (n === 0) return 0;
//   let prefix = new Array(n).fill(0); //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   let suffix = new Array(n).fill(0); //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   prefix[0] = arr[0];
//   for (let i = 1; i < n; i++) {
//     prefix[i] = Math.max(prefix[i - 1], arr[i]);
//     //prefix = [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]
//   }
//   suffix[n - 1] = arr[n - 1];
//   for (let i = n - 2; i >= 0; i--) {
//     suffix[i] = Math.max(suffix[i + 1], arr[i]);
//     //suffix = [3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1]
//   }
//   let waterTrapped = 0;
//   for (let i = 0; i < n; i++) {
//     waterTrapped += Math.min(prefix[i], suffix[i]) - arr[i];
//     /**i = 0
//    waterTrapped += min(prefix[0], suffix[0]) - arr[0] = min(0, 3) - 0 = 0 */
//   }
//   return waterTrapped;
// }

// let arr2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log("The water that can be trapped is " + trap(arr2));


//---------------Trapping Water Using Two-Pointer Technique------------//
function trap(arr){
    let n = arr.length;
    if(n===0) return 0;
    let left = 0 ,right = n-1;
    let res = 0 ;
    let maxLeft = 0 , maxRight = 0 ;
    while(left<=right){
        if (arr[left] <= arr[right]) {
            if (arr[left] >= maxLeft) {
              // maxleft ko update krte jeyange jese jese aage bda milta jayega
                maxLeft = arr[left];
            } else {
                res += maxLeft - arr[left];
            }
            left++;
        } else{
            if(arr[right]>=maxRight){
                maxRight = arr[right];
            }else{
                res+=maxRight- arr[right]
            }
            right--
        }
    }
    return res
}
let arr3 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("The water that can be trapped is " + trap(arr3));
/**Let's dry run the `trap` function step by step with the input array `arr3 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]` to understand how it calculates the trapped water.

Here is the code for reference:

```javascript
function trap(arr) {
    let n = arr.length;
    if (n === 0) return 0;
    
    let left = 0, right = n - 1;
    let res = 0;
    let maxLeft = 0, maxRight = 0;
    
    while (left <= right) {
        if (arr[left] <= arr[right]) {
            if (arr[left] >= maxLeft) {
                maxLeft = arr[left];
            } else {
                res += maxLeft - arr[left];
            }
            left++;
        } else {
            if (arr[right] >= maxRight) {
                maxRight = arr[right];
            } else {
                res += maxRight - arr[right];
            }
            right--;
        }
    }
    
    return res;
}

let arr3 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("The water that can be trapped is " + trap(arr3));
```

### Dry Run

**Initialization:**

- `arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]`
- `n = arr.length = 12`
- `left = 0`
- `right = n - 1 = 11`
- `res = 0`
- `maxLeft = 0`
- `maxRight = 0`

**Step-by-Step Execution:**

1. **Iteration 1:**
   - `left = 0`, `right = 11`
   - `arr[left] = 0`, `arr[right] = 1`
   - Since `arr[left] <= arr[right]`:
     - `arr[left] >= maxLeft` -> `0 >= 0` is true.
     - Update `maxLeft = arr[left] = 0`
     - Increment `left = 1`

2. **Iteration 2:**
   - `left = 1`, `right = 11`
   - `arr[left] = 1`, `arr[right] = 1`
   - Since `arr[left] <= arr[right]`:
     - `arr[left] >= maxLeft` -> `1 >= 0` is true.
     - Update `maxLeft = arr[left] = 1`
     - Increment `left = 2`

3. **Iteration 3:**
   - `left = 2`, `right = 11`
   - `arr[left] = 0`, `arr[right] = 1`
   - Since `arr[left] <= arr[right]`:
     - `arr[left] >= maxLeft` -> `0 >= 1` is false.
     - `res += maxLeft - arr[left] = 1 - 0 = 1`
     - Increment `left = 3`
   - `res = 1`

4. **Iteration 4:**
   - `left = 3`, `right = 11`
   - `arr[left] = 2`, `arr[right] = 1`
   - Since `arr[left] > arr[right]`:
     - `arr[right] >= maxRight` -> `1 >= 0` is true.
     - Update `maxRight = arr[right] = 1`
     - Decrement `right = 10`

5. **Iteration 5:**
   - `left = 3`, `right = 10`
   - `arr[left] = 2`, `arr[right] = 2`
   - Since `arr[left] <= arr[right]`:
     - `arr[left] >= maxLeft` -> `2 >= 1` is true.
     - Update `maxLeft = arr[left] = 2`
     - Increment `left = 4`

6. **Iteration 6:**
   - `left = 4`, `right = 10`
   - `arr[left] = 1`, `arr[right] = 2`
   - Since `arr[left] <= arr[right]`:
     - `arr[left] >= maxLeft` -> `1 >= 2` is false.
     - `res += maxLeft - arr[left] = 2 - 1 = 1`
     - Increment `left = 5`
   - `res = 2`

7. **Iteration 7:**
   - `left = 5`, `right = 10`
   - `arr[left] = 0`, `arr[right] = 2`
   - Since `arr[left] <= arr[right]`:
     - `arr[left] >= maxLeft` -> `0 >= 2` is false.
     - `res += maxLeft - arr[left] = 2 - 0 = 2`
     - Increment `left = 6`
   - `res = 4`

8. **Iteration 8:**
   - `left = 6`, `right = 10`
   - `arr[left] = 1`, `arr[right] = 2`
   - Since `arr[left] <= arr[right]`:
     - `arr[left] >= maxLeft` -> `1 >= 2` is false.
     - `res += maxLeft - arr[left] = 2 - 1 = 1`
     - Increment `left = 7`
   - `res = 5`

9. **Iteration 9:**
   - `left = 7`, `right = 10`
   - `arr[left] = 3`, `arr[right] = 2`
   - Since `arr[left] > arr[right]`:
     - `arr[right] >= maxRight` -> `2 >= 1` is true.
     - Update `maxRight = arr[right] = 2`
     - Decrement `right = 9`

10. **Iteration 10:**
    - `left = 7`, `right = 9`
    - `arr[left] = 3`, `arr[right] = 1`
    - Since `arr[left] > arr[right]`:
      - `arr[right] >= maxRight` -> `1 >= 2` is false.
      - `res += maxRight - arr[right] = 2 - 1 = 1`
      - Decrement `right = 8`
    - `res = 6`

11. **Iteration 11:**
    - `left = 7`, `right = 8`
    - `arr[left] = 3`, `arr[right] = 2`
    - Since `arr[left] > arr[right]`:
      - `arr[right] >= maxRight` -> `2 >= 2` is true.
      - Update `maxRight = arr[right] = 2`
      - Decrement `right = 7`

12. **Iteration 12:**
    - `left = 7`, `right = 7`
    - `arr[left] = 3`, `arr[right] = 3`
    - Since `arr[left] <= arr[right]`:
      - `arr[left] >= maxLeft` -> `3 >= 2` is true.
      - Update `maxLeft = arr[left] = 3`
      - Increment `left = 8`

**Final Result:**

- The water that can be trapped is `6`.

Output:
```javascript
console.log("The water that can be trapped is " + trap(arr3)); // Output: 6
``` */