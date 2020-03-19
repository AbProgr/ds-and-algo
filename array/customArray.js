/**
 * Quick implementation of array using objects in JS.
 * 
 * @class CustomArray
 * @methods getAllItems, getItemAtPosition, count, push, pop, insertItemAt, removeAtPosition
 */
class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * get all items in the array
   *
   * @returns all item in array
   * @memberof CustomArray
   */
  getAllItems() {
    return this.data;
  }

  /**
   * mimics the inbuilt JS [index] notation to get the item at the specified index in an array
   *
   * @param {number} index
   * @returns array item at the index
   * @memberof CustomArray
   */
  getItemAtPosition(index) {
    if (this.length === 0 || !this.data[this.length - 1]) {
      throw new Error(`Invalid operation on an empty array: ${index}`);
    }
    return this.data[this.length - 1];
  }

  /**
   * mimics the inbuilt JS method to return length of array
   *
   * @returns number
   * @memberof CustomArray
   */
  count() {
    return this.length;
  }

  /**
   * mimics the inbuilt JS method to insert an item at the end of an array
   *
   * @param {*} item to insert
   * @memberof CustomArray
   */
  push(item) {
    this.addItemAndUpdateLength(this.length, item);
  }

  /**
   * mimics the inbuilt JS method to remove last item from an array
   *
   * @memberof CustomArray
   */
  pop() {
    if (this.length === 0) {
      throw new Error("Invalid operation on an empty array.");
    }
    this.deleteItemAndUpdateLength(this.length - 1);
  }

  /**
   * inserts item in the array at a given index
   *
   * @param {*} item
   * @param {number} index
   * @returns
   * @memberof CustomArray
   */
  insertItemAt(item, index) {
    if (index < 0 || index > this.length) {
      throw new Error(`Invalid index to insert the element: ${index}`);
    }
    if (index === this.length) {
      this.push(item);
      return;
    }
    // re-assign other indexes
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    // insert the given item at given index
    this.addItemAndUpdateLength(index, item);
  }

  /**
   * removes item from the array at a given index
   *
   * @param {*} index
   * @returns
   * @memberof CustomArray
   */
  removeItemAt(index) {
    if (index < 0 || index > this.length) {
      throw new Error(`Invalid index to remove the element: ${index}`);
    }
    if (index === this.length) {
      this.pop();
      return;
    }
    // re-assign other indexes
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    // remove the last item as that would have a duplicate value
    this.deleteItemAndUpdateLength(this.length - 1);
  }

  /**
   * helper function to delete item and update length count
   *
   * @param {number} index
   * @memberof CustomArray
   */
  deleteItemAndUpdateLength(index) {
    delete this.data[this.length - 1];
    this.length--;
  }

  /**
   * helper function to add item and update length count
   *
   * @param {number} index
   * @param {*} item
   * @memberof CustomArray
   */
  addItemAndUpdateLength(index, item) {
    this.data[index] = item;
    this.length++;
  }
}

// sample executions
const myArray = new CustomArray();
myArray.push("a");
myArray.push("b");
console.log(myArray.count());
console.log(myArray);
console.log(myArray.getItemAtPosition(2));
myArray.insertItemAt("c", 2);
console.log(myArray);
myArray.removeItemAt(0);
console.log(myArray.getAllItems());
myArray.push("d");
console.log(myArray.getAllItems());
myArray.pop();
console.log(myArray.getAllItems());
