/**
Imagine  a smart alarm system inside a bank.

Before installing the real electronic circuit, engineers want to simulate how the alarm behaves using JavaScript.

The alarm system has 4 sensors:

    - doorSensor
    - WindowSensor
    - MotionSensor
    - powerSensor
    And Each sensor gives a boolean value:
        - true -> sensor is active
        - false -> sensor is inactive
What the circuit should do
    The alarm should ring only in specific situations
    To decide whether the alarm should activate, we need to use(||,&&,!)
Circuit Logic
    The system follows these steps:
        1. Check if the door OR window sensor is active
        2. Check if motion is detected AND power is available
        3. Reverse the result of step 1 using NOT
        4. Combine the resuls using OR
        5. Produce the final alarm output

*/

// The function receive 4 boolean sensor values
function securitySystem(
    doorSensor,
    windowSensor,
    motionSensor
    powerSensor
){
     // =========================
    // STEP 1 - OR Gate
    // =========================

    // Check if either the door sensor
    // OR the window sensor is active
    // Store the result inside sensorCheck

    or1 = doorSensor || windowSensor;

}