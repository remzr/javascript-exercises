

const repeatString = function(string, num) {
    let stringReturn ="";
    
    if (num >= 0) {
        for (let i = 0; i < num; i++) {     
        stringReturn = stringReturn + string;
    }
    return stringReturn;
    
    }   else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
