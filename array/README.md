# Array

- Also commonly called as lists.
- Data is stored sequentially i.e. in continuous memory locations.
- Smallest memory footprint.
- Great to use if we need to access data sequentially.

## Syntax

```js
const sampleArr = ["a", "b", "c"];
// items index:     0    1    2
```

## Time complexity

Time complexities for few of inbuilt array operations in JS:

| Operation           | Big O |
| ------------------- | ----- |
| length              | O(1)  |
| lookup i.e. [index] | O(1)  |
| push/pop            | O(1)  |
| unshift/splice      | O(n)  |

- push/pop: they don't have to loop through items but just insert/remove item at the end of an array, so O(1).
- unshift/splice: they insert/remove at an index but also have to re-assign the index for other items in an array, so O(n).
