//------------Brute-Force Approach----------------//
// function nextGreaterElementsBrute(nums){
//     const n = nums.length ;
//     const result = new Array(n).fill(-1);
//     for(let i =0 ; i<n ; i++){
//          // Loop to check elements to the right of current element
//          for(let j=i+1 ; j<n ; j++){
//             if(nums[j]>nums[i]){
//                 result[i] = nums[j];
//                 break
//             }
//          }
//          // If no greater element is found to the right, check from the beginning of the array
//          if(result[i] === -1){
//             for(let j =0 ; j<i ; j++){
//                 if(nums[j]>nums[i]){
//                     result[i] = nums[j]
//                     break
//                 }
//             }
//          }
//     }
//     return result
// }
// const nums = [2, 10, 12, 1, 11];
// console.log(nextGreaterElementsBrute(nums));

//----------------Better Appraoch---------------//
// function nextGreaterElementsNaive(nums){
//     const n = nums.length;
//     const result = new Array(n).fill(-1);
//     for(let i = 0 ; i<n ; i++){
//         for(let j=i+1 ; j<i+n-1 ; j++){ // j=1, j<n
//             let ind = j%n; // (i+j)%n
//             if(nums[ind]>nums[i]){
//                 result[i] = nums[ind];
//                 break
//                 // agar hum break nhi lgayenge to ek outer loop k liye inner loop n-1 time run krega , but after the break the inner loop is over and outer loop is run 
//             }
//         }
//     }
//     return result
// }

// const nums = [2, 10, 12, 1, 11];
// console.log(nextGreaterElementsNaive(nums));
/**Dry Run
Let's go through each step of the dry run:

Initialization:

nums = [2, 10, 12, 1, 11]
n = 5
result = [-1, -1, -1, -1, -1]
First Outer Loop (i = 0):

nums[0] = 2
First Inner Loop:
j = 1, ind = (0 + 1) % 5 = 1
nums[1] = 10, 10 > 2, so result[0] = 10
Break inner loop
result = [10, -1, -1, -1, -1]
Second Outer Loop (i = 1):

nums[1] = 10
First Inner Loop:
j = 1, ind = (1 + 1) % 5 = 2
nums[2] = 12, 12 > 10, so result[1] = 12
Break inner loop
result = [10, 12, -1, -1, -1]
Third Outer Loop (i = 2):

nums[2] = 12
First Inner Loop:
j = 1, ind = (2 + 1) % 5 = 3
nums[3] = 1, 1 < 12, continue inner loop
j = 2, ind = (2 + 2) % 5 = 4
nums[4] = 11, 11 < 12, continue inner loop
j = 3, ind = (2 + 3) % 5 = 0
nums[0] = 2, 2 < 12, continue inner loop
j = 4, ind = (2 + 4) % 5 = 1
nums[1] = 10, 10 < 12, continue inner loop
End of inner loop, no greater element found
result = [10, 12, -1, -1, -1]
Fourth Outer Loop (i = 3):

nums[3] = 1
First Inner Loop:
j = 1, ind = (3 + 1) % 5 = 4
nums[4] = 11, 11 > 1, so result[3] = 11
Break inner loop
result = [10, 12, -1, 11, -1]
Fifth Outer Loop (i = 4):

nums[4] = 11
First Inner Loop:
j = 1, ind = (4 + 1) % 5 = 0
nums[0] = 2, 2 < 11, continue inner loop
j = 2, ind = (4 + 2) % 5 = 1
nums[1] = 10, 10 < 11, continue inner loop
j = 3, ind = (4 + 3) % 5 = 2
nums[2] = 12, 12 > 11, so result[4] = 12
Break inner loop
result = [10, 12, -1, 11, 12]
 */

//-----------------Optimal Solution--------------------------//
function nextGreaterElementsCircular(nums){
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = []
    for(let i = 2*n-1 ; i>=0 ; i--){
        // agar aane wala element bda he top of the stack se to pop krenge
        // means agar top chota he< aane wale elemnt se to pop kro or agar top of the stack bda he to push kar denge
        while(stack.length>0 && stack[stack.length-1]<=nums[i%n]){
            stack.pop()
        }
        // it is only for the elements 0 to n 
        if(i<n){
            if(stack.length>0){
                result[i] = stack[stack.length-1]
            }
        }
        stack.push(nums[i%n])
    }
    return result 
}
const nums2 = [2, 10, 12, 1, 11];
console.log(nextGreaterElementsCircular(nums2));