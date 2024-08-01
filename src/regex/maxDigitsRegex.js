export function max18DigitsRegex() {
  const maxNumberOfDigitsRegex = /^\d{0,18}(\.\d{1,2})?$/;
  console.log("123456789123456789.126");
  console.log(maxNumberOfDigitsRegex.test("123456789123456789.126"));
}
