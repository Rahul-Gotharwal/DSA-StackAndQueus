 //---------------------Brute Force ------------------//
//  function nextGreaterElementBruteForce(arr) {
//     let n = arr.length;
//     let result = new Array(n).fill(-1);
//     for(let i = 0 ; i<n ; i++){
//         for(j=i+1;j<n;j++){
//             if(arr[j]>=arr[i]){
//                 result[i] = arr[j];
//                 break // we use the break bcz we have to find the next greter we not need to treaverse the whole array
               
//             }
//         }
//     }
//     return result
//  }
//  let arr = [6, 0, 8, 1, 3];
// console.log(nextGreaterElementBruteForce(arr));

//----------------Optimized Approach Using Monotonic Stack---------------//
// function nextGreaterElementOptimized(arr) {
// let n = arr.length; // 5 
// let result = new Array(n).fill(-1);
// let stack = []; 
// for(let i =n-1 ; i>=0 ; i--){
//     // stack[stack.length-1] gives us the top of the stack
//     while(stack.length>0 && stack[stack.length-1]<=arr[i]){
//         stack.pop()
//     } 

//     // this if is run when only the stack is not empty
//     if(stack.length>0){
//         // we put the top of the stack
//         result[i] = stack[stack.length-1]; // 3 is added
        
//     }
//     stack.push(arr[i])
   
// }
// return result
// }
// let arr = [6, 0, 8, 1, 3];
// console.log(nextGreaterElementOptimized(arr));

//------------Leetcode solution-----------------//
function nextGreaterElement(nums1, nums2){
    let stack = [];
    let nextGreaterMap = new Map()
   // Traverse nums2 from the end to the start
   for(let i = nums2.length-1 ; i>=0 ; i--){
    let current = nums2[i]
    // Pop elements from the stack until we find the next greater element
    while(stack.length>0 && stack[stack.length-1]<=current){
        stack.pop()
    }
    // If stack is not empty, the top element is the next greater element
    if(stack.length>0){
        nextGreaterMap.set(current,stack[stack.length-1]);
        
    }
    else{
        nextGreaterMap.set(current,-1)
    }
    stack.push(current)
   } 
   let result = nums1.map(num => nextGreaterMap.get(num)); // map returns an array
   return result
}
let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2)); // Output: [-1, 3, -1]

/**Initialization:

stack = []
nextGreaterMap = new Map()
Processing nums2 from end to start:

Iteration 1 (i = 3, current = 2):

Stack: []
while loop: Skipped (stack is empty)
if condition: Skipped (stack is empty)
nextGreaterMap.set(2, -1)
Push 2 onto the stack.
Stack after operation: [2]
nextGreaterMap after operation: {2 => -1}
Iteration 2 (i = 2, current = 4):

Stack: [2]
while loop: stack[stack.length-1] (2) <= current (4) => Pop 2
if condition: Skipped (stack is empty)
nextGreaterMap.set(4, -1)
Push 4 onto the stack.
Stack after operation: [4]
nextGreaterMap after operation: {2 => -1, 4 => -1}
Iteration 3 (i = 1, current = 3):

Stack: [4]
while loop: Skipped (stack[stack.length-1] (4) > current (3))
if condition: stack[stack.length-1] (4) => nextGreaterMap.set(3, 4)
Push 3 onto the stack.
Stack after operation: [4, 3]
nextGreaterMap after operation: {2 => -1, 4 => -1, 3 => 4}
Iteration 4 (i = 0, current = 1):

Stack: [4, 3]
while loop: Skipped (stack[stack.length-1] (3) > current (1))
if condition: stack[stack.length-1] (3) => nextGreaterMap.set(1, 3)
Push 1 onto the stack.
Stack after operation: [4, 3, 1]
nextGreaterMap after operation: {2 => -1, 4 => -1, 3 => 4, 1 => 3}
Building the result for nums1:

nums1 = [4, 1, 2]
Result: [nextGreaterMap.get(4), nextGreaterMap.get(1), nextGreaterMap.get(2)]
Result calculation:
nextGreaterMap.get(4): -1
nextGreaterMap.get(1): 3
nextGreaterMap.get(2): -1
Result: [-1, 3, -1] */