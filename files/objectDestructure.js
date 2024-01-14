export const objectDestructure = () => {
  const employee = {
    name: "Shourov",
    age: 29,
    employment: {
      position: "Jr. Software Engineer",
      company: "Technonext",
    },
  };

  const {
    name,
    height,
    employment: { company, location }, // "location" does not exist in "employment"

    // two level non-existent destructuring crashes the program
    type: { isRegular }, // "type" does not exist in the "employee" object. So "isRegular" is also non-existent.
  } = employee;

  console.log("📢[objectDestructure.js:8]: name: ", name);
  console.log("📢[objectDestructure.js:9]: height: ", height); // destructuring a non-existing key won't crash the program

  console.log("");
  console.log("📢[objectDestructure.js:12]: employment.company: ", company);
  console.log("📢[objectDestructure.js:12]: employment.location: ", location);

  console.log("");
  console.log("📢[objectDestructure.js:12]: type.isRegular: ", isRegular);
};
