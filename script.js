import { objectCopy } from "./files/objectCopy.js";
import {
	decodeShortCode,
	makeShortCode,
	parseLongLink,
} from "./files/openStreetMapShortLinkDecoder.js";
import { setTest } from "./files/setTest.js";
import { sorting } from "./files/sorting.js";
import { getEmbedLink } from "./files/youtubeEmbedLinkGenerator.js";

console.log("---------------------------------------------------------");
console.log("|                   Testing Ground                      |");
console.log("---------------------------------------------------------");
console.log("");
/**
 *
 *
 */

console.log(getEmbedLink("https://www.youtube.com/watch?v=iu0GoETMhm0"));

/**
 *
 *
 */
console.log("");
console.log("---------------------------------------------------------");
console.log("|                                                       |");
console.log("---------------------------------------------------------");
