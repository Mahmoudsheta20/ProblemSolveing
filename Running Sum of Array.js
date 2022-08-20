var runningSum = function(nums) {
    let arr = []

    let i
    for (i = 0; i < nums.length - 1; i++) {
        arr[0] = nums[0]
        arr[i + 1] = arr[i] + nums[i + 1]
    }

    return arr
}