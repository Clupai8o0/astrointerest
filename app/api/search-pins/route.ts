import { handleError, handleSuccess } from "@/lib/api";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const query = searchParams.get("q");

		const resp = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
		const data = await resp.json();
		const furnishedData = await Promise.all(
			data.collection.items.map(async (res: any) => {
				const resData = res.data[0];
				const final = {
					title: resData.title,
					desc: resData.description,
					img: {
						url_mini: "",
						url_large: "",
					},
				};

				//* getting images
				const imgResp = await fetch(res.href);
				(await imgResp.json()).forEach((url: string) => {
					// 1. make sure its an img
					if (url.endsWith(".jpg") || url.endsWith(".png")) {
						// 2. separate it into mini and large
						const excludedUrl = url.slice(0, url.length - 4); // url without the ending .jpg and .png

						//* mini image
						if (excludedUrl.endsWith("small_1")) final.img.url_mini = url;
						if (excludedUrl.endsWith("small")) final.img.url_mini = url;

						//* large image
						if (excludedUrl.endsWith("large_1")) final.img.url_large = url;
						if (excludedUrl.endsWith("large")) final.img.url_large = url;
						if (excludedUrl.endsWith("orig")) final.img.url_large = url;
					}
				});

				return final;
			})
		);

		return handleSuccess(
			"Successfully received response for search query",
			furnishedData
		);
	} catch (e: any) {
		return handleError("Could not search specified query", e);
	}
}

// "data": {
//     "collection": {
//       "version": "1.0",
//       "href": "http://images-api.nasa.gov/search?q=moon",
//       "items": [
//         {
//           "href": "https://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon/collection.json",
//           "data": [
//             {
//               "center": "HQ",
//               "title": "Go Forward to the Moon",
//               "keywords": [
//                 "Moon",
//                 "Mars",
//                 "Forward to the Moon"
//               ],
//               "nasa_id": "NHQ_2019_0311_Go Forward to the Moon",
//               "date_created": "2019-03-11T00:00:00Z",
//               "media_type": "video",
//               "description": "NASA is going to the Moon and on to Mars, in a measured, sustainable way. Working with U.S. companies and international partners, NASA will push the boundaries of human exploration forward to the Moon. NASA is working to establish a permanent human presence on the Moon within the next decade to uncover new scientific discoveries and lay the foundation for private companies to build a lunar economy.  Right now, NASA is taking steps to begin this next era of exploration. #Moon2Mars  Learn more at: https://www.nasa.gov/moontomars"
//             }
//           ],
//           "links": [
//             {
//               "href": "https://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon/NHQ_2019_0311_Go Forward to the Moon~thumb.jpg",
//               "rel": "preview",
//               "render": "image"
//             },
//             {
//               "href": "https://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon/NHQ_2019_0311_Go Forward to the Moon.srt",
//               "rel": "captions"
//             }
//           ]
//         },
