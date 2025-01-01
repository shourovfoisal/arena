import util from "util";
import { adaptMenuList, currentMenuList } from "./src/recursion.js";

console.log("---------------------------------------------------------");
console.log("|                   Testing Ground                      |");
console.log("---------------------------------------------------------");
console.log("");
/**
 *
 *
 */
console.log(
  util.inspect(adaptMenuList(currentMenuList), {
    showHidden: false,
    depth: null,
    colors: true,
  })
);
/**
 *
 *
 */
console.log("");
console.log("---------------------------------------------------------");
console.log("|                                                       |");
console.log("---------------------------------------------------------");
