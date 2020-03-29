# Linked List

- Each data in this DS is known as node.
- Each node is stored in onordered memory locations and contains pointer for next node or even previous node.
- First element is termed as _head_ and last element as _tail_.
- Linked lists are null terminated DS i.e. last element is null.
- JS has no built-in linked list DS but we can built our own using existing DS like objects (hash table). Java has a built-in linked list DS.
- Low time complexity in terms of insert/delete at specific positions when compared to arrays.
- Traversal is costly as data is unordered.

## Structure

```js
const linkedList = {
  head: {
    value: 5,
    next: {
      value: 8,
      next: {
        value: 99,
        next: null
      }
    }
  },
  tail: {
    value: 99,
    next: null
  },
  length: 3
};
```

## Time complexity

Time complexities for few of inbuilt array operations in JS:

| Operation | Big O |
| --------- | ----- |
| prepend   | O(1)  |
| append    | O(1)  |
| lookup    | O(n)  |
| insert    | O(n)  |
| delete    | O(n)  |

- Lookup/insert/delete is O(n) in worst case scenarios i.e. when it has to loop till end to find the correct node to perform the action.
- Prepend/append is O(1) as it has to just update the head/tail and just update next/prev pointer of one node. No loops are involved.

### Variations

- Singly linked list:

  - stores pointer for _next node only_
  - can traverse only forward
  - great to use when memory is limited orjust insert/delete is required
  - simple to implement

- Doubly linked list:
  - stores pointers for _both prev and next nodes_
  - can traverse in both direction i.e. forward and backwards
  - requires more memory space
  - To be used only when memory space is not an issue or bi-directional search is required.
  - complex to implement

#### Pointers

- These are refernce to a memory location

```js
const obj1 = { a: true };
const obj2 = obj1;
// both the objects are just pointers -> pointing to same memory location
```
