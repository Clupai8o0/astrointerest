import { handleError, handleSuccess } from "@/lib/api";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const query = searchParams.get("q");

		const resp = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
		const data = await resp.json();
		return handleSuccess(
			"Successfully received response for search query",
			data
		);
	} catch (e: any) {
		return handleError("Could not search specified query", e);
	}
}
