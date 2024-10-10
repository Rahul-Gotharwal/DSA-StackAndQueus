// Function to find the maximal rectangle in a binary matrix
function maximalRectangle(matrix){
    if(matrix.length===0) return 0;
    const n = matrix.length; // rows
    const m = matrix[0].length; // coloumns
    let maxArea = 0 ;
    // Initialize the prefix sum array
    const prefixSum = Array.from({ length: n }, () => Array(m).fill(0))
     // Compute the prefix sum array
      // we traverse the coloun wise and number of rows are increases
      // coloumn wise traversal
    for(let j = 0 ; j<m ; j++){
        // j is constant  means coloumn are cosntnat and for every cloumn means for every j the i is increases , means for every j the i run multitime
        let sum = 0 ;
        for(let i = 0 ; i<n ; i++){
            // rows traversal
            if(matrix[i][j] === '1'){ // i j values are like 0,0 then 0,1 then 0,2 here col is 0 and row is 1,2,3 like increses
                sum+=1;
            }else{
                sum=0
            }
            prefixSum[i][j] = sum;
        }
    }// Function to compute the largest rectangle in a histogram
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
        // Calculate the maximum rectangle for each row's histogram
        // phle wale question me ek hi row thi yha pe prefixsum me multiple rows he to unke liye loop chalaya or rectangle calclaute kar liya
    for(let i = 0 ; i<n ; i++){
        maxArea = Math.max(maxArea,largestRectangleArea(prefixSum[i]))
    }
    return maxArea

}

const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
];
const result = maximalRectangle(matrix);
console.log(result); // Outputs: 6