const minMax = (arr) =>{
    // The spread operator ... "Unpacks" the array into individual elements.
    // Math.max(...arr) becomes Math.max(3,4,5,6,7,4,3,2,9,5)
    let result = [];
    let left = Math.min(...arr);
    let right = Math.max(...arr);

    result.push(left, right);

}

console.log(minMax([1,2,3,4,5,6]));