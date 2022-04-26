import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";
import { createRequire} from 'module';
const require = createRequire(import.meta.url);

var argum = require("minimist")(process.argv.slice(2));
var input = argum['call']
if (input == null) {
    console.log("Error: no input")
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else if (input === "heads" || input === "tails") {
    console.log(flipACoin(input))
}
else {
    console.log("Error: no input")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}