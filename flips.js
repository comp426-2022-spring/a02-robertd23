import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";
import { createRequire} from 'module';
const require = createRequire(import.meta.url);

var argum = require("minimist")(process.argv.slice(2));
var input = argum['number'] || 1;
let list = coinFlips(input)
console.log(list)
console.log(countFlips(list))