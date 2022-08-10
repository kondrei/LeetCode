let runningSum = function (nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = 0; j <= i; j++) {
            sum = sum + nums[j];
        }
        newArr.push(sum);
    }

    return newArr
};


console.log(runningSum([1, 1, 1, 1, 1, 1, 1, 1]));
// [1, 1+2, 1+2+3, 1+2+3+4].
// [1, 3,   6,     10]