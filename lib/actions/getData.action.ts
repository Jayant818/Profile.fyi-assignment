"use server";

async function getData() {
	const data = await fetch("http://localhost:3000/api/getData");
	const res = await data.json();

	console.log(res);
	return res;
}

export default getData;
