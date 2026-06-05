/**
    The problem asks you to:

Keep the element at index 0
Remove the element at index 1
Keep the element at index 2
Remove the element at index 3
And so on...

In other words, keep elements with even indexes (0, 2, 4, 6, ...).The problem asks you to:

Keep the element at index 0
Remove the element at index 1
Keep the element at index 2
Remove the element at index 3
And so on...

In other words, keep elements with even indexes (0, 2, 4, 6, ...).

0        1         2       3         4
Keep   Remove    Keep   Remove    Keep

Solution using filter()
 */

const removeEveryOther = (arr)=>{
    return arr.filter((element, index)=> index % 2 == 0)
}

console.log(removeEveryOther([Keep, Remove, Keep, Remove, Keep]));