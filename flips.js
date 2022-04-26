import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

var argum = (process.argv.slice(2));
argum['number'];
let number = argum.number || 1;
if (number> 0) {
    let list = coinFlips(number)
    console.log(list, countFlips(list))
}
else {
    
}