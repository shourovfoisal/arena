/**
 * Print Week Day or Month Names
 * @param {Date} date Date Input
 * @returns {Void} Print names like "Staurday" or "Sat", "December" or "Dec" etc.
 */
export const printDateNames = (date = new Date("March 13, 2024 23:15:00")) => {
  const monthName = date.toLocaleString("en-US", { month: "short" });
  const dayName = date.toLocaleString("en-US", { weekday: "short" });
  console.log("📢[dates.js:7]: monthName: ", monthName);
  console.log("📢[dates.js:9]: dayName: ", dayName);
};

/**
 * Prints Date in Flat Format
 * @param {Date} date Date Input
 * @returns {String} 2024-03-13T17:15:00.000Z
 */
export const printFlatDate = (date = new Date("March 13, 2024 23:15:00")) => {
  return date.toISOString();
};

/**
 * JSDoc
 * Have to turn the following setting on in vs code
 * "js/ts.implicitProjectConfig.checkJs": true
 * Tutorial Source: https://www.youtube.com/watch?v=YK-GurROGIg
 * Documenting Your JavaScript | JSDoc Crash Course
 */
