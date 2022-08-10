let hammingWeight = function (n) {
    let count = 0;
    for (let i = 0; i < 132; i++) {
        if (n.toString(2)[i] === '1')
            count++;
    }

    return count;
};

console.log(hammingWeight(01000001000000000100000000000001011))