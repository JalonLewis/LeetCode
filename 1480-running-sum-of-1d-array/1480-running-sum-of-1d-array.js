/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let output = [nums[0]]
    for ( let i=1; i<nums.length; i++){
        output.push(nums[i]+output[i-1])
    }
    return output
};