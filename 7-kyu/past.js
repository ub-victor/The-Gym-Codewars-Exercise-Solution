/*
01:01:01
Your task is to return the time elapsed since midnight in milliseconds.

1 sec = 1000 milliseconds
1 mins = 60 secs = 1000 * 60  = 60 000 milliseconds
1 h = 60mins 
    = 60mins = 3600 seconds
    = 3 600 seconds * 1000 = 3 600 000
    = 3 600 000 + 3600 + 1000 =  3 600 4 600
Human thinking before coding

If someone asked you:
    "How any milliseconds have passed since midnight?"
    You would:
Step 1
    Convert howrs into milliseconds.
Step 2.
    Convert minutes into  milliseconds.
Step 3
    Convert seconds into milliseconds
Step 4
    Add them all together
Simple formula to use

milliseconds = 
(hours * 3600000)
+
(minuteS * 60000)
+
(seconds * 1000)
*/

function past(h, m, s) {
    return (h * 3600000) + (m * 60000) + (s * 1000);
}

console.log(past(1,0,0));