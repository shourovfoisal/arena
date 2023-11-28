export const inVsHasOwn = () => {
  const human = {
    type: "Homo Sapiens",

    // Setting prototype to check for difference
    // between the 'in' operator and the 'hasOwn()' function
    __proto__: {
      isFourLegged: false,
    },
  };

  human.isMammal = true;

  console.log("Human");
  console.log(human);
  console.log("Prototype Check: ");
  console.log("human.isFourLegged: ", human.isFourLegged);

  console.log("--------");

  console.log("hasOwn() Function");
  console.log(Object.hasOwn(human, "type"));
  console.log(Object.hasOwn(human, "isMammal"));
  console.log(Object.hasOwn(human, "isFourLegged")); // Object.hasOwn() doesn't find any prototype/inherited properties

  console.log("--------");

  console.log("In Operator");
  console.log("type" in human);
  console.log("isMammal" in human);
  console.log("isFourLegged" in human); // 'in' operator finds prototype/inherited properties
};
