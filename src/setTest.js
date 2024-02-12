export const setTest = () => {
  const mySet = new Set([1, 2]);
  const anotherSet = new Set(mySet); // clones the existing set

  console.log(mySet);
  console.log(anotherSet);

  mySet.delete(2);
  console.log("-----after deleting----");

  console.log(mySet);
  console.log(anotherSet);
};

/**
 * Testing the set to array
 */
export const setToArrayTest = () => {
  const mySet = new Set();
  mySet.add("a");
  mySet.add("b");
  mySet.add("c");
  mySet.add("c"); // duplicate is not inserted
  console.log("original set");
  console.log(mySet);

  console.log("");
  console.log("entries iterable");
  const iterable = mySet.entries();
  console.log(iterable);

  console.log("");
  console.log("keys iterable");
  const keysIterable = mySet.keys();
  console.log(keysIterable);
  console.log("keys array");
  console.log(Array.from(keysIterable));

  console.log("");
  console.log("values iterable");
  const valuesIterable = mySet.values();
  console.log(valuesIterable);
  console.log("values array");
  console.log([...valuesIterable]);

  console.log("");
  console.log("looping over the set");
  for (const item of mySet) {
    console.log(item);
  }
};
