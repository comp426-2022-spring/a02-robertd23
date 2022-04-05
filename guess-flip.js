import { coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

var argum = minimist(process.argv.slice(2));
var input = argum['call'] || 1;
if (coinFlips(input) == ("heads" || "tails")) {
    console.log(flipACoin(input))
}
else {
    console.log("Error: no input")
}