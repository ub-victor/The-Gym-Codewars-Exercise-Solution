// Create a function named getCount
// The function receives:
// flaskSizes -> array of flask capacities
// waterAvailable -> total water available
// tankVolume -> size of the tank to fill
function getCount(flaskSizes, waterAvailable, tankVolume) {

    // =========================
    // IMPOSSIBLE CASE
    // =========================

    // If available water is smaller than tank volume,
    // filling the tank is impossible
    if (waterAvailable < tankVolume) {

        // Return [-1, -1]
        return [-1, -1];
    }

    // =========================
    // VARIABLES
    // =========================

    // Store the best flask size found
    // Start with -1 because no flask chosen yet
    let bestFlask = -1;

    // Store the minimum number of draws
    // Start with Infinity so any smaller number replaces it
    let minDraws = Infinity;

    // =========================
    // LOOP THROUGH ALL FLASKS
    // =========================

    // Check every flask inside flaskSizes
    for (let flask of flaskSizes) {

        // Calculate required draws
        // Math.ceil rounds UP
        let draws = Math.ceil(tankVolume / flask);

        // =========================
        // CHOOSE BETTER FLASK
        // =========================

        // If current flask needs fewer draws
        // OR same draws but larger flask
        if (
            draws < minDraws ||
            (draws === minDraws && flask > bestFlask)
        ) {

            // Update minimum draws
            minDraws = draws;

            // Save better flask
            bestFlask = flask;
        }
    }

    // =========================
    // FINAL RESULT
    // =========================

    // Return:
    // [best flask size, minimum draws]
    return [bestFlask, minDraws];
}

// =========================
// TEST CASE
// =========================

// Array of flask sizes
const input = [3, 4, 5, 2];

// Call the function
console.log(getCount(input, 100, 14));

// Output:
// [5, 3]