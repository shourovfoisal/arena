// Object.entries() only converts the top level object to an array
// Nested objects are not converted

export const loopOverObject = () => {
  const shourov = {
    name: "Shourov Foisal",
    roll: 100,
    age: {
      count: 30,
      midAge: false,
    },
  };

  console.log(Object.entries(shourov));
  console.log("-----------");

  for (const [key, value] of Object.entries(shourov)) {
    console.log(key + ": " + value);
  }
};
