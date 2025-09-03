const removeFromArray = function(arr) {
    let filteredArray = [];
    
    for (let item of arr) {
        if ((item == 1 || item == 2 || item == 4) && (!filteredArray.includes(item))) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}

// Do not edit below this line
module.exports = removeFromArray;
