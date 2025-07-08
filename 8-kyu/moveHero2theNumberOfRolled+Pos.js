function move(position, roll){
    return position + roll * 2
}

console.log(move(0, 4)); // Expected output: 8
console.log(move(3, 6)); // Expected output: 15
console.log(move(2, 7)); // Expected output: 16

