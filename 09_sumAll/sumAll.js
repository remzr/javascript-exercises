const sumAll = function(a, b) {
    
    let totalSum = 0;
    let numFirst = 0;
    let numSecond = 0;

    if (a < 0 || b < 0 || !Number.isInteger(a + b)) {
        return "ERROR";
    } else if (a < b) {
        numFirst = a, numSecond = b;
    } else {
        numFirst = b, numSecond = a;
    }
    
    for (let i = numFirst; i <= numSecond; i++) {
         totalSum = totalSum + numFirst;
         numFirst++;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
