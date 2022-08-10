let average = function(salary) {
    let temp  = salary.sort((a,b) => a - b);
    temp.pop();
    temp.shift();
    let sum = temp.reduce((prev, current) => {
        return prev+current;
    });
    console.log('sum',temp);
    return sum/temp.length;

};

console.log(average([25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]))