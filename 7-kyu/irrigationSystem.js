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

const irrigationSystem(
    rainSensor,
    soilDry,
    waterTankFull,
    maunal Override
 )