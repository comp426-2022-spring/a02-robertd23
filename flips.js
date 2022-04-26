import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const argum = (process.argv.slice(2));
argum["number"];
const number = argum.number || 1;
let list = coinFlips(number);
let counter = countFlips(list);
if (list.length == 1) {
    if (counter.heads == 0) {
        delete counter.heads;
    }
    if (counter.tails == 0) {
        delete counter.tails;
    }
}
console.log(list, countFlips(list));