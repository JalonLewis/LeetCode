/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let output = -1
    nums.forEach((num, index) => {
        if (output != -1) return
        let sumLeft = 0
        let sumRight = 0
        let left = nums.slice(0, index)
        let right = nums.slice(index + 1)
        left.forEach((leftNum) => {
            sumLeft += leftNum
        })
        right.forEach((rightNum) => {
            sumRight += rightNum
        })
        if (sumLeft === sumRight) {
            output = index
            return output
        }
    })
    return output
};