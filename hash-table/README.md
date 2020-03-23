# Hash Table

- Different languages have a different term for it, with a slight difference in its implementation (dictionaries -> python, maps -> java, hash tables -> ruby and objects -> JS).
- They use key/value pair to store and locate data.
- Data is stored in unordered/random memory locations.
- The provided key is passed through hash function to generate a identifier for memory location where data will be stored.
- In JS, objects can have a key as any data type (internally all of them gets converted to a string).
- ES6 added map type, they accept any data type as key and maintain insertion order of keys.

## Syntax

```js
let user = {
  age: 25,
  name: "some name",
  isActive: true,
  sayHello: function() {
    console.log("Hello");
  }
};
```

## Time complexity

Time complexities for few of inbuilt array operations in JS:

| Operation | Big O |
| --------- | ----- |
| insert    | O(1)  |
| lookup\*  | O(1)  |
| delete    | O(1)  |
| search    | O(1)  |
| list-keys | O(n)  |

- As data is not ordered, so every operation is based on keys.
- Lookup is almost always O(1) until there is a collision. In case of collision, O(n).
- _For...in_ loop is costly in JS as to get all keys it has to loop through all memory locations holding the unordered data.

### Hash Function

- Implemented by the language/framework.
- Generates a random value (mostly one way hashed) of a fixed length for every input (eg: md5).
- Given a same input, it will always produce the same hash.
- Very optimal with O(1) complexity.
- The keys in hash table pass-through this hash function for every get/set/delete operation. The values are internally accessed by the language based on the output of this hash function.
- Assigns random memory locations to store the data.
- _Collision_ is a state when the hash value of two inputs are the same. This is taken care of by the language internally.
