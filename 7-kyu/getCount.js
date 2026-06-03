/*
Imagine you are playing a game called Pixelville
Inside the game, there is:

    - A magical well with water
    - Several flasks (containers) of different sizes
    - One big overhead tank that must be filled

The important Rules

You are given flask sizes like this:
[3,4,5,2]
This means you have:
    - A 3-liter flask
    - A 4-liter flask
    - A 5-liter flask
    - A 2-liter flask
Here our mission : to fill a tank that needs 14 liters, and we will choose only one flask size which means We use only the 5-liter flask again and again and the last one be partial.


*/

// Create a function named getCount
// The function receives:
// flaskSizes -> array of flask capacities
// waterAvailable -> total water available
// tankVolume -> size of the tank to fill

const getCount = (flaskSizes, waterAvailable, tankVolume)=>{
    // =========================
    // IMPOSSIBLE CASE
    // =========================

    // If available water is smaller than tank volume,
    // filling the tank is impossible
    if(waterAvailable < tankVolume ){
        return [-1, -1]
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

}