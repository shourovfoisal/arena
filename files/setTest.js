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
