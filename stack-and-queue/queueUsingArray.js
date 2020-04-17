/**
 * Queue data structure implementation using array
 *
 * @class Queue
 */
class Queue {
  constructor() {
    this.data = [];
  }

  /**
   * returns the first item in queue
   *
   * @returns
   * @memberof Queue
   */
  peek() {
    return this.data[0] || null;
  }

  /**
   * adds a new item to the end of queue
   *
   * @param {*} value
   * @returns
   * @memberof Queue
   */
  enqueue(value) {
    this.data.push(value);
    return this.data;
  }

  /**
   * removes first item from queue
   *
   * @returns
   * @memberof Queue
   */
  dequeue() {
    if (!this.data || this.data.length === 0) {
      return "Queue empty!!! Cannot remove item...";
    }

    this.data.shift();
    return this.data;
  }
}

const queue = new Queue();
console.log(queue.enqueue("apple"));
console.log(queue.enqueue("grapes"));
console.log(queue.enqueue("orange"));
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
