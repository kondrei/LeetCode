let subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    for (let i = 0; i < n.toString().length; i++) {
        product = product * Number(n.toString()[i]);
        sum = sum + Number(n.toString()[i]);
    }
    return product -  sum;
};

console.log(subtractProductAndSum(4421));