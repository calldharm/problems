/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = [];
    maxWealth[0] = 0;

    wealthArray = accounts.map((acc) => {  
        // console.log(acc);
        let total = 0;
        let totaldollars = acc.map((dollars) => {
             total += dollars;     
            } );

        (maxWealth[0] < total) ? (maxWealth[0] = total) : maxWealth[0];
        // console.log(total); console.log('maxWealth : ' + maxWealth);
        });

    return maxWealth[0];
};