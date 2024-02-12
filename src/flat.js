/**
 * Source: https://www.youtube.com/watch?v=hZ9WUyn2bvI
 * Array flatMap() method in JavaScript! - New in Chrome Update 69
 * This video shows map(), flat(), and flatMap()
 */

export const flat = () => {
  const pairs = [1, 2, , [], [5], [10, 20], [30, 40, [50, 60]]];

  console.log("original");
  console.log(pairs);
  console.log("");

  // flat(0) only removes empty values
  console.log("flat(0)");
  console.log(pairs.flat(0));
  console.log("");

  // flat() without any arguments equals to flat(1)
  console.log("flat()");
  console.log(pairs.flat());
  console.log("");

  // flat(1) merges level 1 arrays
  console.log("flat(1)");
  console.log(pairs.flat(1));
  console.log("");

  // flat(2) and higher merges level 2 and later nested arrays
  console.log("flat(2)");
  console.log(pairs.flat(2));
  console.log("");

  // flat(-1) and lower acts as flat(0)
  console.log("flat(-1)");
  console.log(pairs.flat(-1));
  console.log("");
};
