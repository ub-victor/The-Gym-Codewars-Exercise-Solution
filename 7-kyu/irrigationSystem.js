/*
Imagine a smart irrigation system used on a modern farm.

Before building the real eletronic controller, engineers want to simulate how the watering system behaves using JavaScript.

The irrigation system has 4 sensors
    rainSensor
    soilDry
    waterTankFull
    manualOverride

    Each sensor returns a boolean value:
        true -> condition is active
        false -> condition is inactive

    What the system Should Do
    The watering system should decide whether to water the crops or not.

    The circuit uses: ||, && ans ! to make decision
    System Logic
    The irrigation controller follows these steps:
    1. Check if the soil is dry OR manual override is enable
    2. Check if rain is falling
    3. Reverse the rain result using  Not
    4. Check of there is enough water in the tank
    5. Combine everything to decide whether watering should start
*/

const irrigationSystem = (
    rainSensor,
    soilDry,
    waterTankFull,
    manalOverride
 )=>{
    // =========================
    // STEP 1 - OR Gate
    // =========================

    // Check if:
    // the soil is dry
    // OR manual watering is enabled
    // Store the result inside dryCheck
    const dryCheck = soilDry || manualOverride;

     // =========================
    // STEP 2 - NOT Gate
    // =========================

    // Reverse the rain sensor value
    // If it is raining (true) -> becomes false
    // If it is not raining (false) -> becomes true
    // Store the result inside noRain

    const noRain = !rainSensor;

     // =========================
    // STEP 3 - AND Gate
    // =========================

    // Check if:
    // dryCheck is true
    // AND there is no rain
    // Store the result inside weatherCheck

    const weatherCheck = noRain && dryCheck;

    // =========================
    // STEP 4 - AND Gate
    // =========================

    // Check if:
    // weatherCheck is true
    // AND the water tank is full
    // Store the result inside wateringDecision

    const wateringDecision = weatherCheck && waterTankFull;



 }