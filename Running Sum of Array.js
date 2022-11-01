// i=0
// arr = []
// nums = [1,2,3,4]

// arr[0] = nums[0],  arr = [1]

// arr[i+1] = arr[i] + nums[i+1]

// arr[1] = arr[0] + nums[1] , arr[1] = 1 + 2 = 3
// arr = [1,3] and so on

var runningSum = function(nums) {
    let arr = []

    let i
    for (i = 0; i < nums.length - 1; i++) {
        arr[0] = nums[0]
        arr[i + 1] = arr[i] + nums[i + 1]
    }

    return arr
}