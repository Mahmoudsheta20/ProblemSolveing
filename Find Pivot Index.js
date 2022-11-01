let nums = [1, 7, 3, 6, 5, 6]

var pivotIndex = function(nums) {
    let sum = 0
    let letfsum = 0
    let i, j

    for (i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    for (j = 0; j < nums.length; j++) {
        if (sum - letfsum - nums[j] === letfsum) {
            return j
        }
        letfsum += nums[j]
    }
    return -1
}
console.log(pivotIndex(nums))