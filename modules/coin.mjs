/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  let x = Math.floor(Math.random()*2)
  if (x>=1) {
    return 'heads';
  }
  else {
    return 'tails';
  }
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  var out = [];
  for (let i = 0; i < flips; i++) {
    out.push(coinFlip());
  }
  return out
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  var headss = 0;
  var tailss = 0;
  for (var flip in array) {
    if (flip == "heads") {
      heads++
    }
  }
  for (var flip in array) {  // for code simplification and later testing, I spereated the for loops
    if (flip == "tails") {
      tails++
    }
   }
   return {heads: headss, tails: tailss}
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  var coin = coinFlip();
  let outcome = '';
  if (call == coin) {
    outcome='win';
  }
  else {
    outcome = 'lose';
  }
  return {call: call, flip: coin, result: outcome}
}

export{coinFlip, coinFlips, countFlips, flipACoin}
/** Export 
 * 
 * Export all of your named functions
*/
