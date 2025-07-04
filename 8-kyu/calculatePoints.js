function calculatePoints(matches){
    let totalPoints = 0;
    for (let matche of matches){
        let [x,y] = matche.split(':').map(Number);
        if (x > y) {
            totalPoints += 3; // Win
        }
        else if (x === y) {
            totalPoints += 1; // Draw
        }
        // No points for a loss, so we do nothing here
    }
    return totalPoints;
}

// Example usage:
console.log(calculatePoints(['1:0', '2:2', '3:1', '0:1'])); // Output: 7

