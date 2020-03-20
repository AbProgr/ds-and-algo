const firstArray = [1, 3, 9, 16];
const secondArray = [0, 2, 5, 9, 15];
// expected result = [0, 1, 2, 3, 5, 9, 9, 15, 16];

/**
 * merge using loop and custom comparison logic
 *
 * @param {[number]} arr1
 * @param {number]} arr2
 * @returns
 */
const mergeSortedArray_1 = (arr1, arr2) => {
  if (!arr1 || !arr2 || (arr1.length === 0 && arr2.length === 0)) {
    return "Invalid arrays to merge";
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  const mergedArray = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1[arr1Index] || arr2[arr2Index]) {
    // if array 1 current item is smaller or array 2 current item is 0/undefined
    if (
      arr1[arr1Index] < arr2[arr2Index] ||
      (!arr2[arr2Index] && arr2[arr2Index] !== 0)
    ) {
      mergedArray.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      mergedArray.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  return mergedArray;
};
console.log(mergeSortedArray_1(firstArray, secondArray));

/**
 * merge using array built in sort function and es6 spread
 *
 * @param {[number]} arr1
 * @param {number]} arr2
 */
const mergeSortedArray_2 = (arr1, arr2) =>
  [...arr1, ...arr2].sort((a, b) => a - b);
console.log(mergeSortedArray_2(firstArray, secondArray));

/**
 * merge using built-in JS array functions
 *
 * @param {[number]} arr1
 * @param {number]} arr2
 */
const mergeSortedArray_3 = (arr1, arr2) =>
  arr1.concat(arr2).sort((a, b) => a - b);
console.log(mergeSortedArray_3(firstArray, secondArray));
