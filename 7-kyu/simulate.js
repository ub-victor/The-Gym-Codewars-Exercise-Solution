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
const simulate = (input1, input2, input3, input )=>{
    // =========================
    // Bottom OR Gate
    // =========================

    // Reverse input1 using NOT (!)
    // Then compare with input2 using OR (||)
    // Result is stored inside or1

    const or1 = !input1 || input2;
}