/**
 * Sample stack implementation using array
 *
 * @class Stack
 */
class Stack {
  constructor() {
    this.data = [];
  }

  /**
   * value from the top item in stack
   *
   * @returns
   * @memberof Stack
   */
  peek() {
    return this.data[this.data.length - 1] || null;
  }

  /**
   * add new item on top of stack
   *
   * @param {*} value
   * @returns
   * @memberof Stack
   */
  push(value) {
    this.data.push(value);
    return this.data;
  }

  /**
   * remove from top of stack
   *
   * @returns
   * @memberof Stack
   */
  pop() {
    this.data.pop();
    return this.data;
  }
}

const stack = new Stack();
console.log(stack.peek());
console.log(stack.push("apple"));
console.log(stack.push("grapes"));
console.log(stack.push("orange"));
console.log(stack.pop());
console.log(stack.peek());
