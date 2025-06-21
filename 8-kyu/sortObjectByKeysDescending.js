function sortObjectByKeysDescending(obj) {
    // Convert object entries into an array of [key, value] pairs
    const entries = Object.entries(obj);
    // Sort the array based on keys in descending (reverse alphabetical) order
    entries.sort((a, b) => b[0].localeCompare(a[0]));
    // Map the sorted entries to the desired string format
    return entries.map(([key, value]) => `${key}: ${value}`);
}

const fruits = { apples: 10, oranges: 5, bananas: 15 };
console.log(sortObjectByKeysDescending(fruits));
// Output: ["oranges: 5", "bananas: 15", "apples: 10"]