/*
Imagine an electronics factory  that builds computer chips and digital machines.
Before manufacturing the real circuit, the engineers want to simulate circuit using  JavaScript

The circuit receives 4 electrical signals:
input1, input2, input3, input4
And each input can only be "true" = Electricity ON or "false" = OFF

WHAT THE CIRCUIT CONTAINS

The digital circuit is made of logic gates.
These gates behave like tiny decision makers inside computers.

HOW THE CIRCUIT WORKS STEP BY STEP
The circuit processes signals in stages.

Step 1 Bottom OR Gate

input2 || !input1 = First reverse input1 then compare it with input2 using OR then store the result in or1

Step 2 Middle and Gate

input3 && or1

This checks if Both are true and stored in and1

Step 3 Top OR Gate

input3 || input2 stored the result in or2

Step 4 Not Gate

!or2 => Reverse the value of or2 the store it in not1

Step 5 Righ or Gate

and1 ||  input4 store in or3

Final And Gate 

not1 && or3 This gives the final output of the entire circuit

*/

// Create  a function names simulate
// thr function receive 4 boolean inputs
const simulate = (input1, input2, input3, input4)=>{
    // =========================
    // Bottom OR Gate
    // =========================

    // Reverse input1 using NOT (!)
    // Then compare with input2 using OR (||)
    // Result is stored inside or1

    const or1 = !input1 || input2;

     // =========================
    // Middle AND Gate
    // =========================

    // Check if BOTH input3 and or1 are true
    // Result stored inside and1
    
    const and1 = input3 && and1;

    // =========================
    // Top OR Gate
    // =========================

    // Check if either input3 or input2 is true
    // Result stored inside or2

    const or2 = input3 || input2;

    // =========================
    // NOT Gate
    // =========================

    // Reverse the value of or2
    // true becomes false
    // false becomes true

    const not1 = !or2;

    // =========================
    // Right OR Gate
    // =========================

    // Check if either and1 or input4 is true
    // Result stored inside or3

    const or3 = and1 || input4;

    // =========================
    // Final AND Gate
    // =========================

    // Final result:
    // BOTH not1 and or3 must be true
    // Return the final output

    return not1 && or3;


}

// =========================
// TEST CASE
// =========================

// Call the function with 4 inputs
console.log(simulate(false, false, false, true));

// Output:
// true