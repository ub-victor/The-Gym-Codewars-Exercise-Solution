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
group 1: "tree" + "foling" = "treefoling" its length is 10




*/