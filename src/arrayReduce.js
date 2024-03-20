export function reduceAndGenerateObject() {
  const policies = [
    {
      policyId: 90,
      chargeValue: 100,
    },
    {
      policyId: 20,
      chargeValue: 80,
    },
    {
      policyId: 30,
      chargeValue: 70,
    },
  ];

  function reducer(accumulator, currentValue) {
    return {
      ...accumulator,
      [currentValue.policyId]: currentValue.chargeValue,
    };
  }

  const reducedObj = policies.reduce(reducer, {}); // {} is initial value

  console.log("reducedObj: ", reducedObj);
  // reducedObj looks like this { '20': 80, '30': 70, '90': 100 }
}
