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

		//* Cleaning and furnishing the data
		const cleanedData = data.filter((img: any) => img.media_type === "image");
		const furnishedData = cleanedData.map((img: any) => ({
			title: img.title,
			desc: img.explanation,
			img_mini: img.url,
			img_large: img.hdurl,
		}));

		return handleSuccess("Successfully GET pins from NASA api", furnishedData);
	} catch (e: any) {
		return handleError("Could not get pins from NASA api", e);
	}
}

//* Example response from nasa api
// [
// 		{
// 			"copyright": "Anglo-Australian Observatory",
// 			"date": "2002-04-24",
// 			"explanation": "Unspeakable beauty and unimaginable bedlam can be found together in the Trifid Nebula. Also known as M20, this photogenic nebula is visible with good binoculars towards the constellation of Sagittarius. The energetic processes of star formation create not only the colors but the chaos.  The red-glowing gas results from high-energy starlight striking interstellar hydrogen gas.  The dark dust filaments that lace M20 were created in the atmospheres of cool giant stars and in the debris from supernovae explosions.  Which bright young stars light up the blue reflection nebula is still being investigated.  The light from M20 we see today left perhaps 3000 years ago, although the exact distance remains unknown.  Light takes about 50 years to cross M20.",
// 			"hdurl": "https://apod.nasa.gov/apod/image/0204/trifid_aao_big.jpg",
// 			"media_type": "image",
// 			"service_version": "v1",
// 			"title": "The Trifid Nebula from AAO",
// 			"url": "https://apod.nasa.gov/apod/image/0204/trifid_aao.jpg"
// 		}
// 	 ...
// ]
