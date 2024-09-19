export function mapDataStructureTest() {
  const newMap = new Map([
    ["name", "Shourov"],
    ["profession", "Engineer"],
    ["hairColor", "Black"],
  ]);

  console.log(`Map Size: ${newMap.size}`);
  console.log(`name = ${newMap.get("name")}`);
  console.log(`Map has the 'name' key = ${newMap.has("name")}`);
  console.log(`Map has the 'age' key = ${newMap.has("age")}`);
  console.log();

  console.log("------------------------keys------------------------");
  console.log(newMap.keys());
  console.log("Keys array:");
  console.log(Array.from(newMap.keys()));
  console.log();

  console.log("-----------------------values-----------------------");
  console.log(newMap.values());
  console.log("Values array:");
  console.log(Array.from(newMap.values()));
  console.log();

  console.log("-----------------------entries-----------------------");
  console.log(newMap.entries());
  console.log("Entries array:");
  const entriesArray = Array.from(newMap.entries());
  console.log(entriesArray);
  console.log("Looping method es5 (2009):");
  entriesArray.forEach(([key, value]) => {
    console.log("key:", key);
    console.log("value:", value);
  });
  console.log();
  console.log("Looping method es6 (2015):");
  for (const [key, value] of newMap.entries()) {
    console.log("key:", key);
    console.log("value:", value);
  }
  console.log();
  console.log(
    "Looping method (producess 'error newMap.forEach is not a function' sometimes):"
  );
  newMap.forEach((value, key, map) => {
    console.log("value:", value);
    console.log("key:", key);
    console.log("map:", map);
  });
  console.log();

  console.log("-----------------------set a value-----------------------");
  newMap.set("hobby", "programming");
  console.log(`Testing new value 'hobby' = ${newMap.get("hobby")}`);
  console.log();

  console.log("-----------------------delete a value-----------------------");
  newMap.delete("hobby");
  console.log(`Testing deleted value 'hobby' = ${newMap.get("hobby")}`);
  console.log();

  console.log("-----------------------clear all values-----------------------");
  newMap.clear();
  console.log(`Testing to check if any entries are left`);
  console.log(newMap.entries());
  console.log();
}
