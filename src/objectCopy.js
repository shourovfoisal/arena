// Performs deep copy by combining three object copy methods

export const objectCopy = () => {
  const shourov = {
    name: "Shourov Foisal",
    address: {
      city: "Pabna",
      state: "Rajshahi",
    },
    eat: () => "Eat",
  };

  // const yeasir = { ...shourov };											// shallow copy
  // const yeasir = Object.assign({}, shourov);					// shallow copy
  const yeasir = Object.assign(
    { ...shourov },
    JSON.parse(JSON.stringify(shourov))
  ); // deep copy
  yeasir.name = "Yeasir Arafat";
  yeasir.address.city = "Dhaka";
  yeasir.address.state = "Dhaka";

  console.log("shourov", shourov);
  console.log("");
  console.log("yeasir", yeasir);
};

// Just copies the reference
export const variableAssignCopyTest = () => {
  const person = {
    name: "Shourov",
    age: 10,
    address: {
      country: "USA",
      city: "NY",
    },
  };

  const anotherPerson = person;

  anotherPerson.name = "Foisal"; // Direct items are mutated
  anotherPerson.address.country = "Australia"; // Nested items are also mutated

  console.log("🚀 ~ assignCopyTest ~ person:", person);
  console.log("🚀 ~ assignCopyTest ~ anotherPerson:", anotherPerson);
};

// Shallow - just like spread operator
export const objectAssignCopyTest = () => {
  const person = {
    name: "Shourov",
    age: 10,
    address: {
      country: "USA",
      city: "NY",
    },
  };

  const anotherPerson = Object.assign({}, person);

  anotherPerson.name = "Foisal"; // Direct items are not mutated
  anotherPerson.address.country = "Australia"; // Nested item is mutated

  console.log("🚀 ~ assignCopyTest ~ person:", person);
  console.log("🚀 ~ assignCopyTest ~ anotherPerson:", anotherPerson);
};

// Shallow - just like the Object.assign() method
export const spreadOperatorCopyTest = () => {
  const person = {
    name: "Shourov",
    age: 10,
    address: {
      country: "USA",
      city: "NY",
    },
  };

  const anotherPerson = { ...person };

  anotherPerson.name = "Foisal"; // Direct items are not mutated
  anotherPerson.address.country = "Australia"; // Nested items are mutated

  console.log("🚀 ~ assignCopyTest ~ person:", person);
  console.log("🚀 ~ assignCopyTest ~ anotherPerson:", anotherPerson);
};

// Deep Copy
export const jsonCopyTest = () => {
  const person = {
    name: "Shourov",
    age: 10,
    address: {
      country: "USA",
      city: "NY",
    },
  };

  const anotherPerson = JSON.parse(JSON.stringify(person));

  anotherPerson.name = "Foisal"; // Direct items are not mutated
  anotherPerson.address.country = "Australia"; // Nested item is mutated

  console.log("🚀 ~ assignCopyTest ~ person:", person);
  console.log("🚀 ~ assignCopyTest ~ anotherPerson:", anotherPerson);
};
