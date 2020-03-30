class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * conosle logs the values in each node in the list as an array
   *
   * @memberof LinkedList
   */
  printList() {
    const arr = [];
    let currentNode = this.head;
    // while loops are handy when we don't know the length of iterable
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  /**
   * adds a node at the end of list
   *
   * @param {*} value
   * @returns
   * @memberof LinkedList
   */
  append(value) {
    // create a new node object
    const newNode = new Node(value);
    // point prev of new node as the current tail
    newNode.prev = this.tail;
    // update existing tail's next as this new object
    this.tail.next = newNode;
    // update tail object to point to this new object
    this.tail = newNode;
    // increment the length of list
    this.length++;
    return this.printList();
  }

  /**
   * adds a new node at the start of list
   *
   * @param {*} value
   * @returns
   * @memberof LinkedList
   */
  prepend(value) {
    // create a new node object
    const newNode = new Node(value);
    // point new node's next to existing head
    newNode.next = this.head;
    // point current heads's prev to new node as new node will be before that
    this.head.prev = newNode;
    // overwrite current head with the new node object
    this.head = newNode;
    // increment the length of list
    this.length++;
    return this.printList();
  }

  /**
   * returns the node at given index
   *
   * @param {*} index
   * @returns linked list node
   * @memberof LinkedList
   */
  traverseNodeForAction(index) {
    let counter = 0;
    let nodeForAction = this.head;
    while (counter !== index) {
      nodeForAction = nodeForAction.next;
      counter++;
    }
    return nodeForAction;
  }

  /**
   * validates given index value
   *
   * @param {*} index
   * @memberof LinkedList
   */
  validateIndex(index) {
    if (!index || typeof index !== "number") {
      throw new Error("Invalid index for linked list");
    }
  }

  /**
   * inserts a value at a given index
   *
   * @param {number} index
   * @param {*} value
   * @returns
   * @memberof LinkedList
   */
  insert(index, value) {
    // validate index
    this.validateIndex(index);
    // if index greater or equal to length then append value at end
    if (index >= this.length) {
      this.append(value);
    }
    // if index greater or equal to 0 then prepend value at start
    if (index <= 0) {
      this.prepend(value);
    }
    // the target node where the insert will happen
    const nodeToInsertAfter = this.traverseNodeForAction(index - 1);
    // save a ref of the displaced node
    const nodeToInsertBefore = nodeToInsertAfter.next;
    // create a new node with the value
    const newNode = new Node(value);
    // point new node's next to the displaced node's ref
    newNode.next = nodeToInsertBefore;
    // point new node's prev as the node after which we need to insert
    newNode.prev = nodeToInsertAfter;
    // point the new node as next for the insert target node
    nodeToInsertAfter.next = newNode;
    // increment length
    this.length++;
    return this.printList();
  }

  /**
   * removes the node at the given index
   *
   * @param {number} index
   * @returns
   * @memberof LinkedList
   */
  remove(index) {
    // validate index
    this.validateIndex(index);
    // the target node after which the remove will happen
    const nodeBeforeRemove = this.traverseNodeForAction(index - 1);
    // node to remove
    const nodeToRemove = nodeBeforeRemove.next;
    // the next pointer of the node that will be removed
    const nextOfNodeToRemove = nodeToRemove.next;
    // link pointers of after and before of the node that is removed
    nextOfNodeToRemove.prev = nodeBeforeRemove;
    // point next of node before the removed index to node after the removed index
    nodeBeforeRemove.next = nextOfNodeToRemove;
    // deceremt the length
    this.length--;
    return this.printList();
  }
}

const linkedList = new LinkedList(5);
linkedList.append(10);
linkedList.append(19);
linkedList.prepend(25);
linkedList.prepend(2);
linkedList.insert(2, 105);
linkedList.remove(4);
console.log(linkedList);
