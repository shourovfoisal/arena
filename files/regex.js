/**
 * Source: https://www.youtube.com/watch?v=ZfQFUJhPqMM
 * Last viewed till -> 7:15
 */

/**
 *
 * @param {"literal_string"|"literal_string_with_possibilities" | "ignore_capital_or_small_case" | "extract_result" | "extract_all_results"} type type of the regex implementation
 */
export const regex = (type) => {
  switch (type) {
    case "literal_string":
      {
        let str = "Hello, World!";
        let reg = /Hello/;
        console.log(reg.test(str));
      }
      break;
    case "literal_string_with_possibilities":
      {
        let str = "James has a pet cat.";
        let reg = /dog|cat|bird|fish/;
        console.log(reg.test(str));
      }
      break;
    case "ignore_capital_or_small_case":
      {
        let str = "freeCodeCamp";
        let reg = /freecodecamp/i; // flag i helps to ignore capital/small case
        console.log(reg.test(str));
      }
      break;
    case "extract_result":
      {
        let str =
          "Extract the word 'coding' from this string. Here is yet another 'coding'.";
        let reg = /coding/;
        console.log(str.match(reg)); // method match() extracts the results
      }
      break;
    case "extract_all_results":
      {
        let str =
          "Extract the word 'coding' from this string. Here is yet another 'Coding'.";
        let reg = /coding/gi; // the flag g matches all the results. flag i matches all cases - both capital and small.
        console.log(str.match(reg));
      }
      break;
  }
};
