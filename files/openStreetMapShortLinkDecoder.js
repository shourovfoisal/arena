/**
 * My Comments
 * Source: http://www.salesianer.de/util/shortcode.js
 * Source From: http://www.salesianer.de/util/osmshortlinks.php (Also provides shortcode calculator)
 */

/**
 * My Comments
 *
 * Sample latitudes and longitudes
 *
 * 23.775, 90.385 - Dhaka
 * Sample Long Link
 * https://www.openstreetmap.org/?mlat=23.775&mlon=90.385#map=14/23.775/90.385
 *
 * 21.4345, 91.9693 - Coxs Bazaar
 * Sample Long Link
 * https://www.openstreetmap.org/?mlat=21.4345&mlon=91.9693#map=14/21.4345/91.9693
 */

/**
 * My Comments
 *
 * Sample short map link
 * https://osm.org/go/5AFxcwZQ-
 * Noakhali, Hatia
 * https://osm.org/go/4VXO6B0-
 *
 * Sample short map link with marker
 * https://osm.org/go/5AFxcwZQ-?m=
 * Noakhali, Hatia
 * https://osm.org/go/4VXO6B0-?m=
 */

// OSM Short links functions

// License: GNU General Public License 2.0, http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

// makeShortCode taken from:
// https://github.com/openstreetmap/openstreetmap-website/blob/e84b2bd22f7c92fb7a128a91c999f86e350bf04d/app/assets/javascripts/application.js
// Important when using makeShortCode: provide args as numbers, not as strings!

export function makeShortCode(lat, lon, zoom) {
	const char_array =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_~";
	var x = Math.round((lon + 180.0) * ((1 << 30) / 90.0));
	var y = Math.round((lat + 90.0) * ((1 << 30) / 45.0));
	// JavaScript only has to keep 32 bits of bitwise operators, so this has to be
	// done in two parts. each of the parts c1/c2 has 30 bits of the total in it
	// and drops the last 4 bits of the full 64 bit Morton code.
	var str = "";
	var c1 = interleave(x >>> 17, y >>> 17),
		c2 = interleave((x >>> 2) & 0x7fff, (y >>> 2) & 0x7fff);
	for (var i = 0; i < Math.ceil((zoom + 8) / 3.0) && i < 5; ++i) {
		const digit = (c1 >> (24 - 6 * i)) & 0x3f;
		str += char_array.charAt(digit);
	}
	for (var i = 5; i < Math.ceil((zoom + 8) / 3.0); ++i) {
		const digit = (c2 >> (24 - 6 * (i - 5))) & 0x3f;
		str += char_array.charAt(digit);
	}
	for (var i = 0; i < (zoom + 8) % 3; ++i) {
		str += "-";
	}
	return str;
}

function interleave(x, y) {
	x = (x | (x << 8)) & 0x00ff00ff;
	x = (x | (x << 4)) & 0x0f0f0f0f;
	x = (x | (x << 2)) & 0x33333333;
	x = (x | (x << 1)) & 0x55555555;
	y = (y | (y << 8)) & 0x00ff00ff;
	y = (y | (y << 4)) & 0x0f0f0f0f;
	y = (y | (y << 2)) & 0x33333333;
	y = (y | (y << 1)) & 0x55555555;
	return (x << 1) | y;
}

/**
 * This function only decodes the code, and not the URL
 * Use The following code chunk to convert the shortcode url to actual shortcode
 * Sample shortcode url -> https://osm.org/go/4VXO6B0- or https://osm.org/go/4VXO6B0-?m=
 * Sample shortcode -> 4VXO6B0-
 * const url = mapLink.split("?")[0];
 * const shortCode = url.split("/").slice().pop();
 */
// decode function - not optimized for speed!
export function decodeShortCode(sc) {
	const char_array =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_~";
	var i = 0;
	var x = 0;
	var y = 0;
	var z = -8;
	for (i = 0; i < sc.length; i++) {
		const ch = sc.charAt(i);
		const digit = char_array.indexOf(ch);
		if (digit == -1) break;
		// distribute 6 bits into x and y
		x <<= 3;
		y <<= 3;
		for (let j = 2; j >= 0; j--) {
			x |= (digit & (1 << (j + j + 1))) == 0 ? 0 : 1 << j;
			y |= (digit & (1 << (j + j))) == 0 ? 0 : 1 << j;
		}
		z += 3;
	}
	x = x * Math.pow(2, 2 - 3 * i) * 90 - 180;
	y = y * Math.pow(2, 2 - 3 * i) * 45 - 90;
	// adjust z
	if (i < sc.length && sc.charAt(i) == "-") {
		z -= 2;
		if (i + 1 < sc.length && sc.charAt(i + 1) == "-") {
			z++;
		}
	}
	return new Array(y, x, z);
}

// Parsing and getting dat from long link
// My Implementation
// https://www.openstreetmap.org/?mlat=23.7993&mlon=90.3864#map=14/23.7993/90.3864
export const parseLongLink = () => {
	const longUrl =
		"https://www.openstreetmap.org/?mlat=23.7993&mlon=90.3864#map=14/23.7993/90.3864";

	const urlObject = new URL(longUrl); // use a try-catch for this line or the app may crash

	// console.log(urlObject);

	const [hashName, hashValue] = urlObject.hash.split("=");
	const [zoom, mapLat, mapLong] =
		hashName === "#map"
			? hashValue?.split("/").map(value => parseFloat(value))
			: [];

	// console.log("--------------");
	// console.log("📢[openStreetMapShortLinkDecoder.js:101]: hashName: ", hashName);
	// console.log(
	// 	"📢[openStreetMapShortLinkDecoder.js:101]: hashValue: ",
	// 	hashValue
	// );
	// console.log("--------------");
	// console.log("📢[openStreetMapShortLinkDecoder.js:102]: zoom: ", zoom);
	// console.log("📢[openStreetMapShortLinkDecoder.js:102]: mapLat: ", mapLat);
	// console.log("📢[openStreetMapShortLinkDecoder.js:102]: mapLong: ", mapLong);

	// console.log("--------------");

	const [markerLat, markerLong] = [
		parseFloat(urlObject.searchParams.get("mlat")),
		parseFloat(urlObject.searchParams.get("mlon")),
	];
	// console.log(
	// 	"📢[openStreetMapShortLinkDecoder.js:117]: markerLat: ",
	// 	markerLat
	// );
	// console.log(
	// 	"📢[openStreetMapShortLinkDecoder.js:117]: markerLong: ",
	// 	markerLong
	// );
	return [
		mapLat,
		mapLong,
		zoom,
		markerLat || undefined,
		markerLong || undefined,
	];
};
