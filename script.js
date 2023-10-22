import { objectCopy } from "./files/objectCopy.js";
import {
	decodeShortCode,
	makeShortCode,
	parseLongLink,
} from "./files/openStreetMapShortLinkDecoder.js";
import { setTest } from "./files/setTest.js";
import { sorting } from "./files/sorting.js";

console.log("---------------------------------------------------------");
console.log("|                   Testing Ground                      |");
console.log("---------------------------------------------------------");
console.log("");
/**
 *
 *
 */

// console.log(decodeShortCode("5AFxaSLU-"));
// console.log(makeShortCode(23.799283504486084, 90.38640975952148, 14));
console.log(parseLongLink());

/**
 *
 *
 */
console.log("");
console.log("---------------------------------------------------------");
console.log("|                                                       |");
console.log("---------------------------------------------------------");
