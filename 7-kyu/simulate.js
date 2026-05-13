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

This checks if Both are true


*/