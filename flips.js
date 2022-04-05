import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

var argum = minimist(process.argv.slice(2));
var input = argum['number'] || 1;
let list = coinFlips(input)
console.log(list)
console.log(countFlips(list))