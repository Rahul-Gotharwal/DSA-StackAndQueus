// --------------Implementing the stack using the queue-------------//
// ----------queue should be behave like the stack----------//
// class Stack{
//     constructor(){
//         this.q = [];
//     }
//     push(x){
//         const s = this.q.length;
//        // console.log(s)
//         this.q.push(x);
//         for(let i = 0 ; i<s; i++){
//             this.q.push(this.q.shift())  
//            // console.log(this.q) NOTE imaportant console
//         }
//     }
//     pop(){
//         if(this.q.length===0){
//             console.log("Stack Is Empty");
//             return null;
//         }
//         //console.log(this.q.shift()) => 1
//         return this.q.shift() //Removes the first element from an array and returns it.
//     }
//     top(){
//         if(this.q.length === 0){
//             console.log("Stack is empty");
//             return null
//         }
//         return this.q[0]
//     }
//     size(){
//         return this.q.length
//     }
// }

// const s = new Stack();
// s.push(3);
// s.push(2);
// s.push(4);
// s.push(1);
// console.log(`Top of the stack: ${s.top()}`);
// console.log(`Size of the stack before removing element: ${s.size()}`);
// console.log(`The deleted element is: ${s.pop()}`);
// console.log(`Top of the stack after removing element: ${s.top()}`);
// console.log(`Size of the stack after removing element: ${s.size()}`);

/**
 * nitial State
q = []
Step 1: Push(3)
Initial Queue Length:

s = this.q.length = 0
Push Element 3:

this.q.push(3) => q = [3]
Reorder Elements:

Since s is 0, the for loop does not run.
q remains [3]
State After Push(3):

q = [3]
Step 2: Push(2)
Initial Queue Length:

s = this.q.length = 1
Push Element 2:

this.q.push(2) => q = [3, 2]
Reorder Elements:

For i = 0 (only one iteration since s = 1):
this.q.push(this.q.shift()) => this.q.push(3) => q = [2, 3]
State After Push(2):

q = [2, 3]
Step 3: Push(4)
Initial Queue Length:

s = this.q.length = 2
Push Element 4:

this.q.push(4) => q = [2, 3, 4]
Reorder Elements:

For i = 0:
this.q.push(this.q.shift()) => this.q.push(2) => q = [3, 4, 2]
For i = 1:
this.q.push(this.q.shift()) => this.q.push(3) => q = [4, 2, 3]
State After Push(4):

q = [4, 2, 3]
Step 4: Push(1)
Initial Queue Length:

s = this.q.length = 3
Push Element 1:

this.q.push(1) => q = [4, 2, 3, 1]
Reorder Elements:

For i = 0:
this.q.push(this.q.shift()) => this.q.push(4) => q = [2, 3, 1, 4]
For i = 1:
this.q.push(this.q.shift()) => this.q.push(2) => q = [3, 1, 4, 2]
For i = 2:
this.q.push(this.q.shift()) => this.q.push(3) => q = [1, 4, 2, 3]
State After Push(1):

q = [1, 4, 2, 3]
 */

//----- implementing the queue using the stack---------------//
class Queue{
    constructor(){
        this.input = [];// these are the stacks
        this.output = []
    }

    push(data){
        while(this.input.length!==0){
            this.output.push(this.input.pop())
        }
        console.log(`the elements pushed is ${data}`);
        this.input.push(data);
        // Pop out elements from the output stack and push them into the input stack
        while(this.output.length!==0){
            this.input.push(this.output.pop())
        }
    }
    pop(){
        if(this.input.length === 0){
            console.log("Queue is empty");
            return null
        }
        return this.input.pop()
    }
    top(){
      if(this.input.length === 0){
        console.log("Queue is empty");
            return null
      }
      return this.input[this.input.length-1];
    }
    size(){
        return this.input.length
    }

}
const q = new Queue();
q.push(3);
q.push(4);
console.log(`The element popped is ${q.pop()}`);
q.push(5);
console.log(`The top of the queue is ${q.top()}`);
console.log(`The size of the queue is ${q.size()}`);