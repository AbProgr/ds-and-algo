# Stack & Queue

## Stack

- Follows LIFO (Last IN First OUT).
- Inserts item at last and removes item from last.
- Most programming languages are modelled around this.
- Sample use case: browser history, undo/redo in text editors.
- This DS is not built-in to JS but can be achieved using linked list or arrays.

### Stack Time complexity

Time complexities for few of primary operations on stack:

| Operation | Big O |
| --------- | ----- |
| push      | O(1)  |
| pop       | O(1)  |
| peek      | O(1)  |
| lookup    | O(n)  |

## Queue

- Follows FIFO (First IN First OUT).
- Inserts item at last and removes item from top.
- Sample use case: waitlisted kind of apps like ticket booking, printer taking multiple print commands, uber, restaurant order.
- This DS is not built-in to JS but can be achieved using linked list or arrays.

### Queue Time complexity

Time complexities for few of primary operations on queue:

| Operation | Big O |
| --------- | ----- |
| enqueue   | O(1)  |
| dequeue   | O(1)  |
| peek      | O(1)  |
| lookup    | O(n)  |
