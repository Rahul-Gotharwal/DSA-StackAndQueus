// class MinStack {
//     constructor() {
//         this.stack = [];
//     }

//     push(x) {
//         let min;
//         if (this.stack.length === 0) {
//             min = x;
//         } else {
//             // huym check krnge ki stack k andar jo element he vo chota he ya fir x
//             min = Math.min(this.stack[this.stack.length - 1][1], x);
//             //NOTE - like we are storing the elemnet in the from of pair so here we use [1] bcz it gives the value at the index [1] that is min like [10,10] the index for first 10 is 0 and second is 1 so we take 1 and comapre it by x
//         }
//         this.stack.push([x, min]);
//         console.log(`Pushed: ${x}, Stack: ${JSON.stringify(this.stack)}`);
//     }

//     pop() {
//         let poppedElement = this.stack.pop();
//         console.log(`Popped: ${JSON.stringify(poppedElement)}, Stack: ${JSON.stringify(this.stack)}`);
//         return poppedElement;
//     }

//     top() {
//         let topElement = this.stack[this.stack.length - 1][0];
//         console.log(`Top: ${topElement}`);
//         return topElement;
//     }

//     getMin() {
//         let minElement = this.stack[this.stack.length - 1][1]; // without [1] this line gives the 15,12 by using [1] it gives the value at index 1 that is min 12
//         console.log(`Min: ${minElement}`);
//         return minElement;
//     }
// }

// let x = new MinStack();
// x.push(12);
// x.push(15);
// x.push(10);
// console.log("Minimum of the stack is: " + x.getMin());
// console.log("Popped element is: " + JSON.stringify(x.pop()));
// console.log("Top element is: " + x.top());
// console.log("Minimum of the stack after popping an element is: " + x.getMin());


/**
 * Let's break down why [1] and [0] are used:

this.stack[this.stack.length - 1][1]:

this.stack[this.stack.length - 1] gets the top element of the stack (which is a pair).
[1] accesses the second element of this pair, which is the minimum value at that point in the stack.
this.stack[this.stack.length - 1][0]:

this.stack[this.stack.length - 1] gets the top element of the stack (which is a pair).
[0] accesses the first element of this pair, which is the actual value that was pushed onto the stack.
Here is a visual representation of the stack as pairs:

Stack (top to bottom)	Values in Pair
Top element: [10, 10]	[value, min]
Second element: [15, 12]	[value, min]
Third element: [12, 12]	[value, min]
Let's look at how these elements are used in your methods:

push(x): When pushing a new value onto the stack, a pair [x, min] is created and pushed. Here, min is either the new value itself (if the stack is empty) or the minimum of the new value and the current minimum value.

pop(): When popping, the top element of the stack (a pair) is removed and returned.

top(): When accessing the top element, you return the first element of the pair (i.e., the actual value).

getMin(): When accessing the minimum value, you return the second element of the pair (i.e., the minimum value at that point).
 */

//--------------Optimal Approach-------------------//
class MinStack {
    constructor(){
        this.stack = [];
        this.mini = Infinity;
    }

    push(value){
        let val = value;
        if(this.stack.length === 0){
            this.mini = val;
            this.stack.push(val)
        }
        else{
            if(val<this.mini){
                // agar value choti he to update krna pdega
                this.stack.push(2*val - this.mini);
                this.mini = val
            }
            else{
                this.stack.push(val)
            }
        }
    }

     pop() {
        if (this.stack.length === 0) return;
        let el = this.stack.pop();
        console.log(`Popped element: ${el}`);
        if (el < this.mini) {
            this.mini = 2 * this.mini - el;
        }
        console.log(`After pop, Stack: ${JSON.stringify(this.stack)}, Min: ${this.mini}`);
    }
    top(){
        if(this.stack.length === 0) return -1;
        let el = this.stack[this.stack.length-1]; //15
        if(el<this.mini) return this.mini; // 10
        return el
    }
    getMin(){
        return this.mini;
    }
}
let x = new MinStack();
x.push(12);
x.push(15);
x.push(10);
console.log("Minimum of the stack is: " + x.getMin());
console.log("Popped element is: " + JSON.stringify(x.pop()));
console.log("Top element is: " + x.top());
console.log("Minimum of the stack after popping an element is: " + x.getMin());
