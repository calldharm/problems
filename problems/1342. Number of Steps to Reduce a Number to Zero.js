/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num, step=1) {
    let newNum = 0;
    newNum = (num%2 == 0) ? (newNum = num/2) : (newNum = (num - 1));

    // console.log('newNum:' + newNum);
    // console.log('step:' + step);

    if (newNum > 0) {
        step++;
        let retVal = numberOfSteps(newNum, step);
        // console.log('retVal:' + retVal);
        return retVal;
    } 
    // console.log('stepMain:' + step);
    return step; 
};