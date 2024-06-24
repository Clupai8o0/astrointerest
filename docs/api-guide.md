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
	img_mini: string;
	img_large: string;
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
			"img_mini": "https://apod.nasa.gov/apod/image/2201/SunriseYear_Vanzella_960.jpg",
			"img_large": "https://apod.nasa.gov/apod/image/2201/SunriseYear_Vanzella_2400.jpg"
		}
		// ...
	]
}
```

# Search

In order to search for images. In the frontend part of the code, you can request for images using the following code:

```typescript
async function searchPins(query: string) {
	// we're using env for port because this port changes between
	// production and development environment
	const resp = await fetch(
		`${process.env.NEXT_PUBLIC_PORT}api/search-pins?q=${query}`
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
	img_mini: string;
	img_large: string;
}
```

An example response

```json
{
	"success": true,
	"msg": "Successfully received response for search query",
	"data": [
		{
			"title": "Go Forward to the Moon",
			"desc": "NASA is going to the Moon and on to Mars, in a measured, sustainable way. Working with U.S. companies and international partners, NASA will push the boundaries of human exploration forward to the Moon. NASA is working to establish a permanent human presence on the Moon within the next decade to uncover new scientific discoveries and lay the foundation for private companies to build a lunar economy.  Right now, NASA is taking steps to begin this next era of exploration. #Moon2Mars  Learn more at: https://www.nasa.gov/moontomars",
			"img_mini": "http://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon/NHQ_2019_0311_Go Forward to the Moon~small.jpg",
			"img_large": "http://images-assets.nasa.gov/video/NHQ_2019_0311_Go Forward to the Moon/NHQ_2019_0311_Go Forward to the Moon~large.jpg"
		}
		// ...
	]
}
```
