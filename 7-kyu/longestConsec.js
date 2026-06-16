/*
We are given  this

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
k = 2

The challenge asks:
    Take K consecutive strings from the array, join them together, and find the longest resulting string 
Then what does Consecutive mean?
    Consecutive means next to each in the array
eg: ["tree", "foling"] Is consecutive because they are neighbors
but ["tree", "trashy"] is Not consecutive because "foling" is between them

We will build alll possible groups 
    k = 2, we take 2 neighboring strings at a time
Group 1: "tree" + "foling" = "treefoling" its length is 10
Group 2: "foling" + "trashy" = "folingtrashy" it length is 12
Group 3: ""trashy" + "blue" = "trashyblue" its length is 10 
Group 4: "abcdef" + "uvwxyz" = "abcdefuvwxyz" its length is 10
Group 5: "abcdef" + "uvwxyz" = "abcdefuvwxyz" its length 12

Here he have two longest length strings but there're two 
and the instruction says If there're  several longrst strings , return the FIRST one.

Also instruction




*/