/**
 * returns the first recurring character in a array of chars or a string
 *
 * @param {[string]} input
 * @returns
 */
const firstRecurringChar = input => {
  if (
    !input ||
    (typeof input !== "string" && !Array.isArray(input)) ||
    input.length === 0
  ) {
    return "Invalid input";
  }

  const inputObject = {};
  for (let i = 0; i < input.length; i++) {
    if (inputObject[input[i]]) {
      return input[i];
    }
    inputObject[input[i]] = true;
  }
  return undefined;
};

console.log(firstRecurringChar("apple"));
console.log(firstRecurringChar(["a", "b", "e", "a", "d", "d"]));
