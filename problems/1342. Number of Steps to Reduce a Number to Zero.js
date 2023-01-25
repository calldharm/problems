/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num, step=1) {
    if(!num) return 0;
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

    // good solution
    // int step=0;
    //     while(num!=0) {
    //         if(num%2==0) num/=2;
    //         else num--;
    //         step++;
    //     }
    //     return step;
};