/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // First way
    // let sum = [nums[0]];
    // for (let i=1; i <= nums.length-1; i++) {
    //       sum[i] = sum[i-1] + nums[i];
    // }
    // return sum;

    // for (let i=1; i <= nums.length-1; i++) {
    //       nums[i] += nums[i-1];
    // }
    // return nums;

    let total=0; 
    return nums.map(num =>  total += num);
    
};