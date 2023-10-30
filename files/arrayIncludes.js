/**
 * Sample input: none
 * Sample output: indexNumber | -1
 */

export const arrayIncludes = () => {
	const myArr = [
		{
			label: "Shourov",
			value: 29,
		},
		{
			label: "Foisal",
			value: 30,
		},
		{
			label: "Farhan",
			value: 31,
		},
	];

	const objectToFind = {
		label: "Farhan",
		value: 35,
	};

	console.log(myArr.findIndex(obj => obj.value === objectToFind.value));
};
