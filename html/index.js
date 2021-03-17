function sumArray(...params) {
    return params.reduce((previous, current) => {
        return previous + current;
    });
};

function sumFor(...params) {
    let sumElement = 0;
    for (let index = 0; index < params.length; index++) {
        sumElement += params[index];
    } return sumElement;
};


console.time('sumArray');
console.log(sumArray(1, 5, 5, 6, 10, 132, 324, 222, 22, 23, 4, 5, 6, 34, 54, 643, 6435, 564, 45, 654, 6345, 35, 34, 534, 543, 5, 43256, 43, 2543, 6, 426, 24256, 542, 6524, 6, 32, 5437657, 887765765, 66, 4, 32, 345, 6));
console.timeEnd('sumArray');

console.time('sumFor');
console.log(sumFor(1, 5, 5, 6, 10, 132, 324, 222, 22, 23, 4, 5, 6, 34, 54, 643, 6435, 564, 45, 654, 6345, 35, 34, 534, 543, 5, 43256, 43, 2543, 6, 426, 24256, 542, 6524, 6, 32, 5437657, 887765765, 66, 4, 32, 345, 6));
console.timeEnd('sumFor');