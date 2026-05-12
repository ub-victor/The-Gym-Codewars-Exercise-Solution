/*
Imagine there is a machine inside a chemical factory

The machine mixes chemicals together and applies heat to create new chemicals.

The machine follow Strinct recipes.

That mean
    - The chemical must be in the correct order
    - The machine only understand the recipes provided
    - If the order is wrong or the chemicals are different, the reaction fails

    Recipe 1
        GREEN + YELLOW -- HEAT --> BROWN + YELLOW
        Meaning  we put ["GREEN", "YELLOW"] will give ["BROWN", "YELLOW"]
    Recipe 2 
        BROWN + YELLO --HEAT --> MAGENTA
        But YELLO + BROWN = UNKNOWN

*/
// The function receives an array called ingredients
const applyHeat = (ingredients) =>{

    // =========================
    // RECIPE 1
    // GREEN + YELLOW --> BROWN + YELLOW
    // =========================

    // Check if:
    // 1. The array contains exactly 2 items
    // 2. First chemical is "GREEN"
    // 3. Second chemical is "YELLOW"

    if (
        ingredients.lenght === 2 &&
        ingredients[0] === "GREEN" &&
        ingredients[1] === "YELLOW"
    ){
        // if the input array meet the condition then return the result of the reaction
        return ["BROWN", "YELLOW"];
    }

    // =========================
    // RECIPE 2
    // BROWN + YELLOW --> MAGENTA
    // =========================
    if(
        ingredients.lenght === 2 &&
        ingredients[0] === "BROWN" &&
        ingredients[1] === "YELLOW"
    ){
        return ["MAGENTA"] 
    }
}