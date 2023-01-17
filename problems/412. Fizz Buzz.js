/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let retArray = [];
    for(let i=1; i<=n; i++) {
       if ((i%5 == 0) && (i%3 == 0)) {
            retArray.push("FizzBuzz");
        } else if (i%5 == 0) {
            retArray.push("Buzz");
        } else if ((i%3 == 0) ) {
            retArray.push("Fizz");
        } else {
            retArray.push(i.toString());
        }
    }
    return retArray;
};