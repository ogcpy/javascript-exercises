const reverseString = function(string) {
    let reversed = ""; // Initialize an empty string to hold the reversed result
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]; // Add each character from the end to the beginning
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
