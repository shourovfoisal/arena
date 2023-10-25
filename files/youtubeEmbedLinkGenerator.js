/**
 * const videoLink = "https://youtu.be/iu0GoETMhm0?si=Get0-yfNui5I-QJ3";
 * const videoLink = "https://www.youtube.com/watch?v=iu0GoETMhm0";
 */

export const getEmbedLink = videoLink => {
	let videoId = null;
	try {
		const urlObject = new URL(videoLink);

		if (videoLink.includes("https://youtu.be/")) {
			videoId = urlObject.pathname.slice(1);
		} else {
			videoId = urlObject.searchParams.get("v");
		}
	} catch (error) {}
	return `https://www.youtube-nocookie.com/embed/${videoId}`;
};
