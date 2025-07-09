// You need to implement the AddExtra method which:

// Accepts a list (passed by reference)
// Adds a new item (for example, an integer like 13) to a new list, not directly modifying the input list
// Returns the new list with the added item
// The key point is that the input list should not be modified directly, but instead, we create a new list, copy the contents, add the new item, and return it.


/*Spread operator (...) creates a shallow copy of the original array.
The new array (newList) contains all the elements of listOfNumbers, but they are separate references.
Changes made to newList (like adding or removing items) won't affect the original listOfNumbers.
Similarly, if the array contains objects, the objects themselves are not copied but shared (since it's a shallow copy).*/


function addExtra(inputList){
    // Create a new list (copy of input list)
    let newList = [...inputList]; // Spread operator to copy the input list

    // Add the new item to the new list
    newList.push(13);
    return newList;
}