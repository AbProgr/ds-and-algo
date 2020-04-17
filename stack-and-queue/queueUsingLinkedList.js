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
 * Queue data structure implementation using linked list
 *
 * @class Queue
 */
class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * returns the first item in queue
   *
   * @returns
   * @memberof Queue
   */
  peek() {
    return this.top.value || null;
  }

  /**
   * adds a new item to the end of queue
   *
   * @param {*} value
   * @returns
   * @memberof Queue
   */
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      this.bottom.next = newNode;
      this.bottom = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * removes first item from queue
   *
   * @returns
   * @memberof Queue
   */
  dequeue() {
    if (!this.top) {
      return "Queue empty!!! Cannot remove item...";
    }

    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      const nextPointer = this.top.next;
      this.top = nextPointer;
    }
    this.length--;
    return this;
  }
}

const queue = new Queue();
console.log(queue.enqueue("apple"));
console.log(queue.enqueue("grapes"));
console.log(queue.enqueue("orange"));
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
