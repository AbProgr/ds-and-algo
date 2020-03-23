/**
 * mimic hash table data structure (i.e. JS objects) using JS array
 *
 * @class HashTable
 * @methods get, set and keys
 */
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  /**
   * sample hash function that mimics memory address allocation in form of array index
   *
   * @param {*} key
   * @returns number to use as array index
   * @memberof HashTable
   * @private true
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  /**
   * get a value ffrom hash table based on key i.e. mimics object.key in JS
   *
   * @param {*} key
   * @returns
   * @memberof HashTable
   */
  get(key) {
    const dataAddress = this._hash(key);
    // if the array index is undefined
    if (!this.data[dataAddress]) {
      return undefined;
    }
    // if array index has items with collision
    const dataLengthAtAddress = this.data[dataAddress].length;
    if (dataLengthAtAddress > 1) {
      for (let i = 0; i < dataLengthAtAddress; i++) {
        if (this.data[dataAddress][i][0] === key) {
          return this.data[dataAddress][i][1];
        }
      }
      return undefined;
    }
    // if array index has only one item
    return this.data[dataAddress][0][1] || undefined;
  }

  /**
   * adds new/update existing key/value pair to hash table i.e. mimics object.key = value in JS
   *
   * @param {*} key
   * @param {*} value
   * @returns
   * @memberof HashTable
   */
  set(key, value) {
    const dataAddress = this._hash(key);
    // if the array index is undefined, then set it as []
    if (!this.data[dataAddress]) {
      this.data[dataAddress] = [];
    }
    const dataLengthAtAddress = this.data[dataAddress].length;
    // if already same key exists then update the value
    if (dataLengthAtAddress > 0) {
      for (let i = 0; i < dataLengthAtAddress; i++) {
        if (this.data[dataAddress][i][0] === key) {
          this.data[dataAddress][i][1] = value;
          return this.data;
        }
      }
    }
    // push here helps to replicate collision handling
    this.data[dataAddress].push([key, value]);
    return this.data;
  }

  /**
   * gets all keys in a hash table i.e. mimics Object.keys() in JS
   *
   * @returns array of keys
   * @memberof HashTable
   */
  keys() {
    const keys = [];
    // loop through each sub array inside data
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty array
      if (this.data[i]) {
        // if it's a collision and has multiple items
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keys.push(this.data[i][j][0]);
          }
        } else {
          keys.push(this.data[i][0][0]);
        }
      }
    }
    return keys;
  }
}

const myObject = new HashTable(2);
console.log(myObject.set("apple", 50));
console.log(myObject.set("grape", 10));
console.log(myObject.set("orange", 20));
console.log(myObject.set("orange", 5));
console.log(myObject.get("orange"));
console.log(myObject.keys());
