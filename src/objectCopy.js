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
