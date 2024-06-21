//* APIs to use
// - APOD -> https://api.nasa.gov/planetary/apod?api_key=&count=

import { handleError, handleSuccess } from "@/lib/api";

/**
 * Next.js route handler Get Pins route to get random images from NASA api for user feed
 * @query count -> how many images at once
 * @returns Next.js response with data (success: boolean, msg: string, data: any)
 */
export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const count = searchParams.get("count");
		const resp = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${
				process.env.NASA_API_KEY
			}&count=${count || 12}`
		);
		const data = await resp.json();
		return handleSuccess("Successfully GET pins from NASA api", data);
	} catch (e: any) {
		return handleError("Could not get pins from NASA api", e);
	}
}
