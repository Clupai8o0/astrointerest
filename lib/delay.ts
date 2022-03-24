/**
 * A function to delay the loading of a page for a given amount of time. To allow smooth transitions between pages
 * @param {number} sec - Number of seconds to delay
 * @returns {Promise} - Returns a promise that resolves after the specified number of seconds
 */
export default function delay(sec: number): Promise<NodeJS.Timeout> {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
