"use server";
import path from "path";
import { promises as fs } from "fs";

async function getData() {
	const jsonDirectory = path.join(process.cwd(), "/data/Products.json");

	// Read the json data file data.json
	const fileContents = await fs.readFile(jsonDirectory, "utf8");

	// Parse the JSON string to an object
	const jsonData = JSON.parse(fileContents);

	return JSON.stringify(jsonData);
}

export default getData;
