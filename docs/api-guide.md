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
	desc: string;
	img: {
		url_mini: string;
		url_large: string;
	};
	author?: string;
}
```

An example response

```json
{
  "success": true,
  "msg": "Successfully GET pins from NASA api",
  "data": [
    {
      "title": "A Year of Sunrises",
      "desc": "Does the Sun always rise in the same direction?  No.  As the months change, the direction toward the rising Sun changes, too.  The featured image shows the direction of sunrise every month during 2021 as seen from the city of Edmonton, Alberta, Canada. The camera in the image is always facing due east, with north toward the left and south toward the right.  As shown in an accompanying video, the top image was taken in 2020 December, while the bottom image was captured in 2021 December, making 13 images in total. Although the Sun always rises in the east in general, it rises furthest to the south of east near the December solstice, and furthest north of east near the June solstice. In many countries, the December Solstice is considered an official change in season: for example the first day of winter in the North.  Solar heating and stored energy in the Earth's surface and atmosphere are near their lowest during winter, making the winter season the coldest of the year.    Status Updates: Deploying the James Webb Space Telescope",
      "img": {
        "url_mini": "https://apod.nasa.gov/apod/image/2201/SunriseYear_Vanzella_960.jpg",
        "url_large": "https://apod.nasa.gov/apod/image/2201/SunriseYear_Vanzella_2400.jpg"
      },
      "author": "\nLuca Vanzella\n"
    },
		// ...
	]
}
```
