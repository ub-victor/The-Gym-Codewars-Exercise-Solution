// You need to implement the AddExtra method which:

// Accepts a list (passed by reference)
// Adds a new item (for example, an integer like 13) to a new list, not directly modifying the input list
// Returns the new list with the added item
// The key point is that the input list should not be modified directly, but instead, we create a new list, copy the contents, add the new item, and return it.



function addExtra(inputList){
    // Create a new list (copy of input list)
    let newList = [...inputList];

    // Add the new item to the new list
    newList.push(13);
    return newList;
}