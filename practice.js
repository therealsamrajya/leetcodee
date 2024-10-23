var firstL = function(word) {
    if (word.length === 0) return word; // Handle empty string case
    return word[0].toUpperCase() + word.slice(1); // Capitalize the first letter and concatenate the rest
};

console.log(firstL("sam chand")); // Output: "Sam chand"
