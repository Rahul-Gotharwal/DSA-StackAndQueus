// // stack implementation
// class StackNode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.size = 0;
//     }
//  // Function to push an element into the stack
//    stackPush(x){
//      let element = new StackNode(x);
//      element.next = this.top;
//      this.top = element;
//      console.log(`Pushed element is ${this.top.data }`);
//      this.size++
//    }
//    // function to pop
//    stackPop(){
//     if(this.top===null) return -1;
//     let topdata = this.top.data;
//     let temp= this.top;
//     this.top = this.top.next;
//     this.size--;
//     return topdata
//    }
//    // get the size
//    stackSize(){
//     return this.size;
//    }
//     // Function to check if the stack is empty
//     stackIsEmpty(){
//         return this.top === null
//     }

//     // get the  top element
//     stackPeek(){
//         if(this.top === null) return -1;
//         return this.top.data
//     }
//     printStack(){
//         let current = this.top;
//         while(current!==null){
//             console.log(current.data + "");
//             current = current.next
//         }
//     }
// }
// let s = new Stack();
// s.stackPush(10);
// //s.stackPush(20)
// console.log("Element popped: " + s.stackPop());
// console.log("Stack size: " + s.stackSize());
// console.log("Stack empty or not? " + s.stackIsEmpty());
// console.log("Stack's top element: " + s.stackPeek());

//----------------------Implement the queue ------------------//
class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  empty() {
    return this.front === null;
  }
  // Function to get the front element of the queue
  peek() {
    if (this.empty()) {
      console.log("queue is empty");
      return -1;
    } else {
      return this.front.data;
    }
  }
  //Function to add an element to the queue
  enqueue(value) {
    let temp = new QueueNode(value);
    if (temp === null) {
      // When heap exhausted , koi value hi nhi di he
      console.log("Queue is Full");
    } else {
      // we are going to create the first node's front and rear
      if (this.front === null) {
        this.front = temp;
        this.rear = temp;
      } else {
        this.rear.next = temp;
        this.rear = temp;
      }
      console.log(value + " Inserted into Queue");
      this.size++;
    }
  }
  dequeue() {
    if (this.front === null) {
      console.log("Queue is Empty");
    } else {
      console.log(this.front.data  +  " Removed From Queue ");
     // let temp = this.front;
      this.front = this.front.next;
      this.size--;
    }
  }
}
let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.dequeue();
q.dequeue();
console.log("The size of the Queue is " + q.size);
console.log("The Peek element of the Queue is " + q.peek());
