//----------------Using Class Stack Implementation-------------//
// class Stack {
//   constructor() {
//     this.size = 10;
//     this.arr = new Array(this.size);
//     this.top = -1;
//   }
//   push(x) {
//     this.top++;
//     this.arr[this.top] = x;
//   }
//   pop() {
//     const x = this.arr[this.top];
//     this.top--;
//     return x;
//   }
//   Top() {
//     return this.arr[this.top];
//   }
//   Size() {
//     return this.top + 1;
//   }
// }
// // testing the stack class
// const s = new Stack();
// s.push(6);
// s.push(4);
// s.push(5);
// console.log("Top of stack is before deleting any element: " + s.Top());
// console.log("Size of stack before deleting any element: " + s.Size());
// console.log("The element deleted is: " + s.pop());
// console.log("Size of stack after deleting an element: " + s.Size());
// console.log("Top of stack after deleting an element: " + s.Top());

//------------------Implement Queue Using The arrray ------------------//
// class Queue {
//   constructor(maxSize = 16) {
//     this.maxSize = maxSize;
//     this.arr = new Array(maxSize);
//     this.start = -1;
//     this.end = -1;
//     this.currSize = 0;
//   }

//   push(newElement) {
//     if (this.currSize === this.maxSize) {
//       console.log("Queue is full...");
//       return;
//     }
//     if(this.end === -1 || this.start === -1){
//         this.start = 0 ;
//         this.end = 0;
//     }
//     else{
//         // end move from last of the array to the front ,when limit is exceeds
//         // limit exceeds hone se phle bhi ye method kaam krega , end ko increase krne k liye , kyuki suppose end is at 1 or maxSize is 16 than modulo of them is 1%16 => 1
//         this.end = (this.end + 1)%this.maxSize
//     }
//     this.arr[this.end] = newElement;
//     console.log("The Element Pushed is :" + newElement);
//     this.currSize++
//   }
//   pop(){
//     if(this.start === -1){
//         console.log("Queue Is Empty...");
//         return 
//     }
//     const popped = this.arr[this.start];
//     if(this.currSize===1){
//         this.start = -1;
//         this.end = -1
//     } //start ko aage bdhayenge kyuki pop me start ko aage bdhate he
//     else{
//         this.start = (this.start+1)%this.maxSize;
//     }
//     this.currSize--;
//     return popped
//   }

//   top(){
//     if(this.start === -1){
//         console.log("Queue Is Empty");
//         return
//     }
//     return this.arr[this.start]
//   }
//   size(){
//     return this.currSize
//   }
// }
// // Testing the Queue class
// const q = new Queue(6);
// q.push(4);
// q.push(14);
// q.push(24);
// q.push(34);
// console.log("The peek of the queue before deleting any element: " + q.top());
// console.log("The size of the queue before deletion: " + q.size());
// console.log("The first element to be deleted: " + q.pop());
// console.log("The peek of the queue after deleting an element: " + q.top());
// console.log("The size of the queue after deleting an element: " + q.size());

//-----------------------------Using The funtions----------------------//
function Stack() {
  let size = 1000;
  let arr = new Array(size);
  let top = -1;

  this.push = function(x) {
      top++;
      arr[top] = x;
  };

  this.pop = function() {
      if (top === -1) {
          console.log("Stack is empty");
          return;
      }
      let x = arr[top];
      top--;
      return x;
  };

  this.Top = function() {
      if (top === -1) {
          console.log("Stack is empty");
          return;
      }
      return arr[top];
  };

  this.Size = function() {
      return top + 1;
  };
}

// Testing the Stack
let s = new Stack();
s.push(6);
s.push(3);
s.push(7);
console.log("Top of stack is before deleting any element: " + s.Top());
console.log("Size of stack before deleting any element: " + s.Size());
console.log("The element deleted is: " + s.pop());
console.log("Size of stack after deleting an element: " + s.Size());
console.log("Top of stack after deleting an element: " + s.Top());


//----------------Queue Using the Functions----------------//
function Queue(maxSize = 16) {
  let arr = new Array(maxSize);
  let start = -1;
  let end = -1;
  let currSize = 0;

  this.push = function(newElement) {
      if (currSize === maxSize) {
          console.log("Queue is full\nExiting...");
          return;
      }
      if (end === -1) {
          start = 0;
          end = 0;
      } else {
          end = (end + 1) % maxSize;
      }
      arr[end] = newElement;
      console.log("The element pushed is: " + newElement);
      currSize++;
  };

  this.pop = function() {
      if (start === -1) {
          console.log("Queue Empty\nExiting...");
          return;
      }
      let popped = arr[start];
      if (currSize === 1) {
          start = -1;
          end = -1;
      } else {
          start = (start + 1) % maxSize;
      }
      currSize--;
      return popped;
  };

  this.top = function() {
      if (start === -1) {
          console.log("Queue is Empty");
          return;
      }
      return arr[start];
  };

  this.size = function() {
      return currSize;
  };
}

// Testing the Queue
let q = new Queue(6);
q.push(4);
q.push(14);
q.push(24);
q.push(34);
console.log("The peek of the queue before deleting any element: " + q.top());
console.log("The size of the queue before deletion: " + q.size());
console.log("The first element to be deleted: " + q.pop());
console.log("The peek of the queue after deleting an element: " + q.top());
console.log("The size of the queue after deleting an element: " + q.size());
