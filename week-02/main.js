// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
// test pop
console.log(`test pop: ${stack.pop()}`); // 8
// test peek
console.log(`test peek: ${stack.peek()}`); // 5
stack.print();
// test isEmpty
console.log(`test isEmpty: ${stack.isEmpty()}`); // false
// test test clear
stack.clear();
console.log(`test isEmpty: ${stack.isEmpty()}`); // true
stack.print();
// test size
console.log(`test size: ${stack.size()}`); // 0
// test boundary
stack.clear();
stack.pop();stack.pop();stack.pop();stack.pop();stack.pop();
stack.peek();
