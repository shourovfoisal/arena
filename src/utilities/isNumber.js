/**
 * This function checks if a supplied value is truly a number or not
 * @param {(Number | String)} number - a value, can be in Number or String data type
 * @returns {Boolean} - true for a number, false for a non-number
 */
export function isNumber(value) {
  if (typeof value === "number") {
    return !Number.isNaN(value); // if it's a valid number, then this will return true
  }

  if (typeof value === "string") {
    if (value === "") {
      return false;
    }
    const parsedValue = Number(value); // Number(number) will return NaN for strings containing characters other than numbers
    return !Number.isNaN(parsedValue); // if it's NaN, then this will return false, otherwise this will return true for true numbers
  }

  return false; // for all other cases like undefined or null etc.
}

/*

  Tests

  console.log("10 --> " + isNumber(10));
  console.log("-10 --> " + isNumber(-10));
  console.log("10.12 --> " + isNumber(10.12));
  console.log("'10' --> " + isNumber("10"));
  console.log("'-10' --> " + isNumber("-10"));
  console.log("'10.12' --> " + isNumber("10.12"));
  console.log("'10.12.13' --> " + isNumber("10.12.13"));
  console.log("'-10.12.13' --> " + isNumber("-10.12.13"));
  console.log("'' --> " + isNumber(""));
  console.log("null --> " + isNumber(null));
  console.log("undefined --> " + isNumber(undefined));
 */
