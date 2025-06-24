// Write a function that takes an object where the keys are strings and the values are numbers. The function should return an array of strings in the format "key: value", sorted by the values in descending order.

// //Input
// { apples: 10, oranges: 5, bananas: 15 }
// //Output
// ["bananas: 15", "apples: 10", "oranges: 5"]

function sortObjectByValues(obj) {
    // Convert object entries into an array of [key, value] pairs
    const entries = Object.entries(obj);
    // Sort the array based on values in descending order
    entries.sort((a, b) => b[1] - a[1]);
    // Map the sorted entries to the desired string format
    return entries.map(([key, value]) => `${key}: ${value}`);
}

const fruits = { apples: 10, oranges: 5, bananas: 15 };
console.log(sortObjectByValues(fruits));
// Output: ["bananas: 15", "apples: 10", "oranges: 5"]


