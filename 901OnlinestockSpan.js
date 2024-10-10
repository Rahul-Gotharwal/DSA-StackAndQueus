// class StockSpanner{
//     constructor(){
//         this.prices = [] ; // this is the dynamic in nature
//     }
//     next(price){
//         this.prices.push(price);
//         let span = 1 ;
//         for(let i = this.prices.length-2 ; i>=0  ; i--){
//             // insted of the if or else condtion we can directly write the condion inside the for loop that , i >= 0 && this.prices[i] <= price;  , and increase the span 
//             if(this.prices[i]<=price){
//                 span++
//             }else{
//               break
//             }
         
//         }
//         return span
//     }
// }
// const stockSpanner = new StockSpanner();
// console.log(stockSpanner.next(100)); // 1
// console.log(stockSpanner.next(80));  // 1
// console.log(stockSpanner.next(60));  // 1
// console.log(stockSpanner.next(70));  // 2
// console.log(stockSpanner.next(60));  // 1
// console.log(stockSpanner.next(75));  // 4
// console.log(stockSpanner.next(85));  // 6
/**
 * Sure, let's go through a detailed dry run of the given `StockSpanner` class implementation with the following input sequence: `100, 80, 60, 70, 60, 75, 85`.

### Initial Setup
- The `StockSpanner` object is initialized with an empty `prices` array.

### Function Calls and Dry Run

1. **Function Call**: `stockSpanner.next(100)`
   - `prices`: `[100]`
   - Start with `span = 1`
   - There are no previous elements to compare, so the span remains `1`.
   - **Return**: `1`

2. **Function Call**: `stockSpanner.next(80)`
   - `prices`: `[100, 80]`
   - Start with `span = 1`
   - Compare `80` with `100`:
     - `100` is greater than `80`, so the loop breaks.
   - **Return**: `1`

3. **Function Call**: `stockSpanner.next(60)`
   - `prices`: `[100, 80, 60]`
   - Start with `span = 1`
   - Compare `60` with `80`:
     - `80` is greater than `60`, so the loop breaks.
   - **Return**: `1`

4. **Function Call**: `stockSpanner.next(70)`
   - `prices`: `[100, 80, 60, 70]`
   - Start with `span = 1`
   - Compare `70` with `60`:
     - `60` is less than or equal to `70`, so increment `span` to `2`.
   - Compare `70` with `80`:
     - `80` is greater than `70`, so the loop breaks.
   - **Return**: `2`

5. **Function Call**: `stockSpanner.next(60)`
   - `prices`: `[100, 80, 60, 70, 60]`
   - Start with `span = 1`
   - Compare `60` with `70`:
     - `70` is greater than `60`, so the loop breaks.
   - **Return**: `1`

6. **Function Call**: `stockSpanner.next(75)`
   - `prices`: `[100, 80, 60, 70, 60, 75]`
   - Start with `span = 1`
   - Compare `75` with `60`:
     - `60` is less than or equal to `75`, so increment `span` to `2`.
   - Compare `75` with `70`:
     - `70` is less than or equal to `75`, so increment `span` to `3`.
   - Compare `75` with `60`:
     - `60` is less than or equal to `75`, so increment `span` to `4`.
   - Compare `75` with `80`:
     - `80` is greater than `75`, so the loop breaks.
   - **Return**: `4`

7. **Function Call**: `stockSpanner.next(85)`
   - `prices`: `[100, 80, 60, 70, 60, 75, 85]`
   - Start with `span = 1`
   - Compare `85` with `75`:
     - `75` is less than or equal to `85`, so increment `span` to `2`.
   - Compare `85` with `60`:
     - `60` is less than or equal to `85`, so increment `span` to `3`.
   - Compare `85` with `70`:
     - `70` is less than or equal to `85`, so increment `span` to `4`.
   - Compare `85` with `60`:
     - `60` is less than or equal to `85`, so increment `span` to `5`.
   - Compare `85` with `80`:
     - `80` is less than or equal to `85`, so increment `span` to `6`.
   - Compare `85` with `100`:
     - `100` is greater than `85`, so the loop breaks.
   - **Return**: `6`

### Summary of Results:
- `next(100)` returns `1`
- `next(80)` returns `1`
- `next(60)` returns `1`
- `next(70)` returns `2`
- `next(60)` returns `1`
- `next(75)` returns `4`
- `next(85)` returns `6`

Each function call updates the `prices` array and calculates the span by iterating backward from the current price, counting how many consecutive days have prices less than or equal to the current price. The result of each `next` call is based on the calculated span.
 */

//---------------------Optimized Stack-Based Approach--------------------//
class stockSpanner{
    constructor(){
      this.stack = [];// Stack to store pairs of (price, index)
      this.index = -1; // global index to keep track of the days
    }

    next(price){
        this.index+=1;
        return this.calculateSpan(price) // everytime the counstructor is called when new price is comes 
    }
    calculateSpan(price){
       // Pop elements from the stack if they are less than or equal to the current price
       while(this.stack.length>0 && this.stack[this.stack.length-1][0]<=price){
        //console.log(this.stack[this.stack.length-1]) [ 60, 2 ]
        //console.log(this.stack[this.stack.length-1][0]) 60 (it is the value at index 0)
        this.stack.pop()
       }
       // calculate the span
       let span = this.stack.length === 0 ? this.index+1 : this.index-this.stack[this.stack.length-1][1]; // [1] by it we having the index stored in the stack value and minus it with the current index
       this.stack.push([price , this.index]);
       return span
    }
}
const stockSpannerOptimized = new stockSpanner();
console.log(stockSpannerOptimized.next(100)); // 1
console.log(stockSpannerOptimized.next(80));  // 1
console.log(stockSpannerOptimized.next(60));  // 1
console.log(stockSpannerOptimized.next(70));  // 2
console.log(stockSpannerOptimized.next(60));  // 1
console.log(stockSpannerOptimized.next(75));  // 4
console.log(stockSpannerOptimized.next(85));  // 6

/**
 * ### Dry Run and Explanation

Let's dry run the code with the inputs provided and explain how the class and its methods work:

#### Code Structure and Explanation

1. **Class Definition (`StockSpannerOptimized`)**:
   - The `StockSpannerOptimized` class is defined with a constructor and two methods: `next` and `calculateSpan`.
   - The constructor initializes two properties:
     - `this.stack`: An empty array used as a stack to store pairs of `(price, index)`. The stack helps in tracking the previous prices and their indices.
     - `this.index`: A counter to keep track of the current day (index).

2. **Method: `next(price)`**:
   - This method increments the `index` by 1 each time a new price is processed. It then calls the `calculateSpan` method to compute the span for the given price and returns it.

3. **Method: `calculateSpan(price)`**:
   - The `calculateSpan` method is where the span is calculated.
   - It first checks if there are elements in the stack and removes any elements where the stored price is less than or equal to the current price. This is because such prices are no longer relevant for determining the span of the current price.
   - The span is then calculated as:
     - If the stack is empty after popping elements, it means all previous days had prices less than or equal to the current price. Hence, the span is `this.index + 1`.
     - If the stack is not empty, the span is the difference between the current day (`this.index`) and the day of the last higher price stored in the stack (`this.stack[this.stack.length - 1][1]`).
   - Finally, the current price and index are pushed onto the stack.

### Dry Run

#### Input: `100`
- `index = 0`
- `stack = []`
- Span: Since the stack is empty, span is `0 + 1 = 1`.
- Stack after operation: `[[100, 0]]`
- **Output**: `1`

#### Input: `80`
- `index = 1`
- `stack = [[100, 0]]`
- Span: Stack top price is `100` (greater than `80`), so span is `1 - 0 = 1`.
- Stack after operation: `[[100, 0], [80, 1]]`
- **Output**: `1`

#### Input: `60`
- `index = 2`
- `stack = [[100, 0], [80, 1]]`
- Span: Stack top price is `80` (greater than `60`), so span is `2 - 1 = 1`.
- Stack after operation: `[[100, 0], [80, 1], [60, 2]]`
- **Output**: `1`

#### Input: `70`
- `index = 3`
- `stack = [[100, 0], [80, 1], [60, 2]]`
- Span: Stack top price is `60` (less than `70`), pop `60`.
- Span: Stack top price is `80` (greater than `70`), so span is `3 - 1 = 2`.
- Stack after operation: `[[100, 0], [80, 1], [70, 3]]`
- **Output**: `2`

#### Input: `60`
- `index = 4`
- `stack = [[100, 0], [80, 1], [70, 3]]`
- Span: Stack top price is `70` (greater than `60`), so span is `4 - 3 = 1`.
- Stack after operation: `[[100, 0], [80, 1], [70, 3], [60, 4]]`
- **Output**: `1`

#### Input: `75`
- `index = 5`
- `stack = [[100, 0], [80, 1], [70, 3], [60, 4]]`
- Span: Stack top price is `60` (less than `75`), pop `60`.
- Span: Stack top price is `70` (less than `75`), pop `70`.
- Span: Stack top price is `80` (greater than `75`), so span is `5 - 1 = 4`.
- Stack after operation: `[[100, 0], [80, 1], [75, 5]]`
- **Output**: `4`

#### Input: `85`
- `index = 6`
- `stack = [[100, 0], [80, 1], [75, 5]]`
- Span: Stack top price is `75` (less than `85`), pop `75`.
- Span: Stack top price is `80` (less than `85`), pop `80`.
- Span: Stack top price is `100` (greater than `85`), so span is `6 - 0 = 6`.
- Stack after operation: `[[100, 0], [85, 6]]`
- **Output**: `6`

### Constructor and Class Behavior
- When you create an object using `new StockSpannerOptimized()`, the constructor is called, initializing the `stack` and `index`.
- Each call to `next(price)` updates the `index`, calculates the span using `calculateSpan`, and returns the span.
 */