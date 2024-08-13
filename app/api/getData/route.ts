import path from "path";
import { promises as fs } from "fs";

export async function GET(request: Request) {
	const jsonDirectory = path.join(process.cwd(), "/data/Products.json");

	// Read the json data file data.json
	const fileContents = await fs.readFile(jsonDirectory, "utf8");

	// Parse the JSON string to an object
	const jsonData = JSON.parse(fileContents);

	// Return the content of the data file in json format
	return new Response(JSON.stringify(jsonData), {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
