export const sorting = () => {
	const arr = [
		{
			name: "tom",
			age: 20,
		},
		{
			name: "joe",
			age: 30,
		},
		{
			name: "matt",
			age: 18,
		},
		{
			name: "henry",
			age: 40,
		},
	];

	console.log("Previous Array: ");
	console.log(arr);

	const sortedArr = arr.sort((a, b) => (a?.age > b?.age ? 1 : -1));

	console.log("Sorted Array: ");
	console.log(sortedArr);
};
