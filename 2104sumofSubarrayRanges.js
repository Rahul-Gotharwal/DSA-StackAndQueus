// -------------Brute Force Appraoch --------------//
// function sumOfSubArrayRanges(arr){
//     let n = arr.length;
//     let sum = 0 ;
//     for(let i =0 ; i<n ; i++){
//         let largest = arr[i] ;
//         let smallest = arr[i]
//         for(let j=i+1 ; j<n ; j++ ) // why i+1 bcz we dont add the sumarray with single value
//         {
//             largest = Math.max(largest , arr[j]);
//             smallest = Math.min(smallest , arr[j])
//             sum = sum+(largest-smallest);
            
//         }
//     }
//     return sum
// }
// let arr = [1,4,3,2];
// let res = sumOfSubArrayRanges(arr);
// console.log(res)

//-----------------Optimal Appraoch -----------------//

    function sumOfSubarrayRanges(arr) {
        const n = arr.length;
    
        function sumOfSubarrayMax(arr) {
            let sum = 0;
            let stack = [];
            let dp = Array(n).fill(0);
    
            for (let i = 0; i < n; i++) {
                while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
                    stack.pop();
                }
                dp[i] = (stack.length === 0 ? (i + 1) : (i - stack[stack.length - 1])) * arr[i] + (stack.length === 0 ? 0 : dp[stack[stack.length - 1]]);
                sum += dp[i];
                stack.push(i);
            }
            return sum;
        }
    
        function sumOfSubarrayMin(arr) {
            let sum = 0;
            let stack = [];
            let dp = Array(n).fill(0);
    
            for (let i = 0; i < n; i++) {
                while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                    stack.pop();
                }
                dp[i] = (stack.length === 0 ? (i + 1) : (i - stack[stack.length - 1])) * arr[i] + (stack.length === 0 ? 0 : dp[stack[stack.length - 1]]);
                sum += dp[i];
                stack.push(i);
            }
            return sum;
        }
    
        let sumMax = sumOfSubarrayMax(arr);
        let sumMin = sumOfSubarrayMin(arr);
    
        return sumMax - sumMin;
    }
    
 // Example usage:
 let arr = [1, 4, 3, 2];
 console.log(sumOfSubarrayRanges(arr)); // Output: 13