// Ask user to input a number
const input = prompt("Enter a number:");

// Convert the input to a number
const number = parseInt(input);

// Check if input is a valid number
if (isNaN(number)) {
    alert("That's not a valid number!");
} else {
    // Check if it's even or odd
    if (number % 2 === 0) {
        alert(number + " is even");
    } else {
        alert(number + " is odd");
    }
}
