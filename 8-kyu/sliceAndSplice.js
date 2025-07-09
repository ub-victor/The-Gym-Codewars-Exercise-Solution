// Array.prototype.slice([start, end(not include)])
// Return a shallow copy of removed/sliced

// Array.prototype.splice(start, deleteCount[, item1, item2, ...])
// Modify the original array and return the removed elements


const log = console.log;

let names = ['John', 'Jane', 'Jack', 'Jill', 'Joe'];

log(names.slice()); // Here the will return a shallow copy of the original array

log(names.slice(1, 3)) // Here the will return a shallow copy of the original array from index 1 to index 3 (not including index 3)

names.splice(1,1, ['James', 'Jasmine', 'Jasper']);