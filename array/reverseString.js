/**
 * validates the input to be a valid string
 *
 * @param {string} input
 * @returns string with both leading and trailing spaces trimmed
 */
const validateAndTrim = input => {
  if (
    !input ||
    typeof input !== "string" ||
    input.length < 2 ||
    input.trim() === ""
  ) {
    throw new Error(
      `Expected string parameter. Invalid input recieved: ${input}`
    );
  } else {
    return input.trim();
  }
};

/**
 * reverse a string using for loop
 *
 * @param {string} input
 * @returns
 */
const reverseString_1 = input => {
  // required variables to store our data
  const trimmedInput = validateAndTrim(input);
  const reversedString = [];
  // loop over from last to first and push to new array
  for (let i = trimmedInput.length - 1; i >= 0; i--) {
    reversedString.push(trimmedInput[i]);
  }
  // join the string array and return the value
  return reversedString.join("");
};

console.log(reverseString_1("1 an  apple a day   "));
// console.log(reverseString_1("    "));
// console.log(reverseString_1());
// console.log(reverseString_1(true));

/**
 * reverse a string using array functions
 *
 * @param {string} input
 */
const reverseString_2 = input =>
  validateAndTrim(input)
    .trim()
    .split("")
    .reverse()
    .join("");

console.log(reverseString_2("2 an  apple a day   "));

/**
 * reverse a string using es6 spread
 *
 * @param {string} input
 */
const reverseString_3 = input => [...validateAndTrim(input)].reverse().join("");

console.log(reverseString_3("3 an  apple a day   "));
