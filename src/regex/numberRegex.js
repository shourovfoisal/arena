export function onlyDigitsDotAndMinus() {
  const regex = /^-?\d*(\.\d+)?$/;

  console.log("123 ", regex.test("123"));
  console.log("123.456 ", regex.test("123.456"));
  console.log("-123 ", regex.test("-123"));
  console.log("-123.456 ", regex.test("-123.456"));
  console.log(".456 ", regex.test(".456"));
  console.log("-.456 ", regex.test("-.456"));
  console.log("");
  console.log("123. ", regex.test("123."));
  console.log("123.45.6 ", regex.test("123.45.6"));
  console.log("abc ", regex.test("abc"));
  console.log("123abc ", regex.test("123abc"));
  console.log("-123. ", regex.test("-123."));
  console.log("-. ", regex.test("-."));
  console.log(". ", regex.test("."));
}
