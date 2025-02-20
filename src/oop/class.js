class Person {
  #bloodGroup;
  name;
  age;

  constructor(name, age, bloodGroup) {
    this.name = name;
    this.age = age;
    this.#bloodGroup = bloodGroup;
  }

  getPersonDetails() {
    return { name: this.name, age: this.age, bloodGroup: this.#bloodGroup };
  }
}

export function classTest() {
  const person = new Person("Shourov", 25, "AB+");
  console.log(person.name);
  console.log(person.age);
  // console.log(person.#bloodGroup); // this can't be done since #bloodGroup private field must be used within a class
  return person.getPersonDetails();
}
