const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR"; // Return "ERROR" if the number is negative
    }

    let result = ""; // Initialize an empty string to store the result
    for (let i = 0; i < times; i++) {
        result += word; // Append the string to the result in each iteration
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
