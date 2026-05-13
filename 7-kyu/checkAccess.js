/*
Imagine a smart security door inside a laboratory

The door only opens if the correct security code is entered

The machine checks:

    - If the entered code matches the secret code
    - If it matches -> access is granted
    -If it does not match -> access in denied

    Your task is to create a function that checks whether the entered code is correct
    RULES
        The function receive two strings:
            The secret code
            The entered code
        if both are exactly the sane -> return "ACCESS GRANTED"
        Otherwise -> return "ACCESS DENIED"
        Secrete Code: "LAB123", Entered Code: "LAB123"
*/

const checkAccess = (secretCode, enteredCode) = {

    if(secretCode === enteredCode){
        return "ACCESS GRANTED ";
    }

    return "ACCESS DENIED";
}