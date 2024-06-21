# User Feed

In order to get images from the user feed. In the frontend part of the code, you can request for images using the following code:

```typescript
async function getPins() {
	// we're using env for port because this port changes between
	// production and development environment
	const resp = await fetch(
		`${process.env.NEXT_PUBLIC_PORT}api/get-pins?count=${12}`
	);
	const data = await resp.json();

	let images;
	if (data.success) {
		images = data.data;
	}
}
```

The response that comes from the API is in this format

```typescript
interface Response {
	success: boolean;
	msg: string;
	data?: any;
}
```

While the response from the NASA is in this format

```typescript
interface NasaApiResponse {
	title: string;
	date: string;
	explanation: string;
	url: string; // user feed tiny image
	hdurl: string; // main image

	media_type: string;
	service_version: string;
	copyright: string;
}
```

An example response

```json
{
	"success": true,
	"msg": "Successfully GET pins from NASA api",
	"data": [
		{
			"copyright": "Anglo-Australian Observatory",
			"date": "2002-04-24",
			"explanation": "Unspeakable beauty and unimaginable bedlam can be found together in the Trifid Nebula. Also known as M20, this photogenic nebula is visible with good binoculars towards the constellation of Sagittarius. The energetic processes of star formation create not only the colors but the chaos.  The red-glowing gas results from high-energy starlight striking interstellar hydrogen gas.  The dark dust filaments that lace M20 were created in the atmospheres of cool giant stars and in the debris from supernovae explosions.  Which bright young stars light up the blue reflection nebula is still being investigated.  The light from M20 we see today left perhaps 3000 years ago, although the exact distance remains unknown.  Light takes about 50 years to cross M20.",
			"hdurl": "https://apod.nasa.gov/apod/image/0204/trifid_aao_big.jpg",
			"media_type": "image",
			"service_version": "v1",
			"title": "The Trifid Nebula from AAO",
			"url": "https://apod.nasa.gov/apod/image/0204/trifid_aao.jpg"
		}
		// ...
	]
}
```
