// function nextSmallerElementOptimized(arr) {
//   let n = arr.length; // length of the array
//   let result = new Array(n).fill(n);// NOTE  - fill with n instead of -1
//   let stack = [];
//   for (let i = n - 1; i >= 0; i--) {
//     // we change the stack => stack[stack.length - 1]
//     while (stack.length > 0 && arr[ stack[stack.length - 1]] >= arr[i]) {
//       stack.pop();
//     }
//     if (stack.length > 0) {
//       result[i] = stack[stack.length - 1];
//     }

//     stack.push(i);// we push the indexes not the value at the index stack.push(arr[i]);
//   }
//   return result;
// }
// function previousSmallerElementOptimized(arr) {
//   let n = arr.length;
//   let result = new Array(n).fill(n); // NOTE  - fill with n instead of -1
//   let stack = [];

//   for (let i = 0; i < n; i++) {
//     while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
//       stack.pop();
//     }
//     if (stack.length > 0) {
//       result[i] = stack[stack.length - 1];
//     }
//     stack.push(i); // we push the indexes not the value at the index stack.push(arr[i]);
//   }

//   return result;
// }
// var largestRectangleArea = function (arr) {
//   let nextSmaller = nextSmallerElementOptimized(arr);
//   let preSmaller = previousSmallerElementOptimized(arr);
//   let maxArea = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let height = arr[i];
//     let width = nextSmaller[i] - preSmaller[i]-1;
//     let area = height * width;
//     if (area > maxArea) {
//       maxArea = area;
//     }
//   }

//   return maxArea;
// };

// let heights = [2, 1, 5, 6, 2, 3];
// let res = largestRectangleArea(heights);
// console.log(res);

//----------------Optimal Code ------------------//
var largestRectangleArea = function(heights){
let stack = [];
let maxArea = 0;
let index = 0;
while(index<heights.length){
/// If the stack is empty or the current bar is higher than the bar at the top of the stack
// hum tb tk hi elemnt ko push krenge tb tk hme bde elemnts milemnge
if(stack.length === 0 || heights[index]>=heights[stack[stack.length-1]]){
    stack.push(index);
    index++
}else{
    //pop the top
    let topOfStack = stack.pop(); 
    // Calculate the area with heights[topOfStack] as the smallest bar
    let area = heights[topOfStack]*(stack.length===0?index:index-stack[stack.length-1]-1);
    // update the maxArea , if needed
    maxArea = Math.max(maxArea,area)
}
}
 // Now, pop the remaining bars from stack and calculate the area with every popped bar
while(stack.length>0){
let topOfStack = stack.pop();
let area = heights[topOfStack]*(stack.length===0?index:index-stack[stack.length-1]-1);
maxArea = Math.max(maxArea , area)
}
return maxArea
}
let heights = [2, 1, 5, 6, 2, 3];
let res = largestRectangleArea(heights);
console.log(res); // Outputs: 10
/**
 * Let's do a detailed dry run of the stack-based method to find the largest rectangle in a histogram. We'll use the example array [2, 1, 5, 6, 2, 3].

Initial State:
heights = [2, 1, 5, 6, 2, 3]
stack = []
maxArea = 0
index = 0
Step-by-Step Dry Run:
Iteration 1 (index = 0):

Current height: 2
Stack is empty, so we push the index 0.
stack = [0]
Increment index to 1.
Iteration 2 (index = 1):

Current height: 1
Stack's top height (heights[0] = 2) is greater than current height 1.
Pop from stack: topOfStack = 0
Calculate area: area = heights[0] * (index - 0) = 2 * 1 = 2
Update maxArea = 2
Stack is empty, so we push the index 1.
stack = [1]
Increment index to 2.
Iteration 3 (index = 2):

Current height: 5
Stack's top height (heights[1] = 1) is less than current height 5.
Push the index 2.
stack = [1, 2]
Increment index to 3.
Iteration 4 (index = 3):

Current height: 6
Stack's top height (heights[2] = 5) is less than current height 6.
Push the index 3.
stack = [1, 2, 3]
Increment index to 4.
Iteration 5 (index = 4):

Current height: 2
Stack's top height (heights[3] = 6) is greater than current height 2.
Pop from stack: topOfStack = 3
Calculate area: area = heights[3] * (index - 2) = 6 * 1 = 6
Update maxArea = 6
Stack's top height (heights[2] = 5) is still greater than current height 2.
Pop from stack: topOfStack = 2
Calculate area: area = heights[2] * (index - 1) = 5 * 2 = 10
Update maxArea = 10
Stack's top height (heights[1] = 1) is less than current height 2.
Push the index 4.
stack = [1, 4]
Increment index to 5.
Iteration 6 (index = 5):

Current height: 3
Stack's top height (heights[4] = 2) is less than current height 3.
Push the index 5.
stack = [1, 4, 5]
Increment index to 6.
After the main loop (final processing):
index = 6 which is the length of heights.
Final Processing:
Pop from stack: topOfStack = 5

Calculate area: area = heights[5] * (index - 4 - 1) = 3 * 1 = 3

maxArea remains 10

stack = [1, 4]

Pop from stack: topOfStack = 4

Calculate area: area = heights[4] * (index - 1 - 1) = 2 * 4 = 8

maxArea remains 10

stack = [1]

Pop from stack: topOfStack = 1

Calculate area: area = heights[1] * (index - 0) = 1 * 6 = 6

maxArea remains 10

stack = []

Final Output:
maxArea = 10
Conclusion:
The largest rectangle area in the histogram [2, 1, 5, 6, 2, 3] is 10.
 */