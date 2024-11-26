const sumAll = function(start, end) {
    // Check if both start and end are valid positive integers
    if (typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR"; // Return "ERROR" for invalid inputs
    }

    // Swap start and end if start is greater
    if (start > end) {
        [start, end] = [end, start];
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i; // Add each number from start to end
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
