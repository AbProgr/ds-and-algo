/**
 * Class to generate new linked list node
 *
 * @class Node
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Sample stack implementation using linked list
 *
 * @class Stack
 */
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * value from the top item in stack
   *
   * @returns
   * @memberof Stack
   */
  peek() {
    return this.top.value;
  }

  /**
   * add new item on top of stack
   *
   * @param {*} value
   * @returns
   * @memberof Stack
   */
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * remove from top of stack
   *
   * @returns
   * @memberof Stack
   */
  pop() {
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      const node = this.top.next;
      this.top = node;
    }
    this.length--;
    return this;
  }
}

const stack = new Stack();
console.log(stack.push("apple"));
console.log(stack.push("grapes"));
console.log(stack.push("orange"));
console.log(stack.pop());
console.log(stack.peek());
