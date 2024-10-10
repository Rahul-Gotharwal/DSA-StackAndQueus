// function asteroidCollision(asteroids) {
//     let stack = [];
    
//     for (let i = 0; i < asteroids.length; i++) {
//         let asteroid = asteroids[i];
        
//         if (asteroid > 0) {
//             // Positive asteroid, just push to the stack
//             stack.push(asteroid);
//         } else {
//             // Negative asteroid
//             while (stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroid)) {
//                 // Destroy the positive asteroid in the stack
//                 stack.pop();
//             }
            
//             if (stack.length === 0 || stack[stack.length - 1] < 0) {
//                 // Either stack is empty or the top of the stack is a negative asteroid
//                 stack.push(asteroid);
//             } else if (stack[stack.length - 1] === Math.abs(asteroid)) {
//                 // Both asteroids are destroyed if they are of equal size
//                 stack.pop();
//             }
//         }
//     }
    
//     return stack;
// }

// // Example usage:
// let asteroids = [4, 7, 1, 1, 2, -3, -7, 17, 15, -16];
// console.log(asteroidCollision(asteroids)); // Output: [4, 17]


//---------------Leetcode Solutions (Read in Revisiion)-----------//
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const res = []
    
    for (let i = 0; i < asteroids.length; i++) {
        const last = res[res.length - 1]
        const cur = asteroids[i]
        
        if (!res.length || last < 0 || cur > 0) {
            res.push(cur)
        } else if (-cur == last) {
            res.pop()
        } else if (-cur > last) {
            res.pop()
            i--
        }
    }
    
    return res  
};
let asteroids = [4, 7, 1, 1, 2, -3, -7, 17, 15, -16];
console.log(asteroidCollision(asteroids)); // Output: [4, 17]