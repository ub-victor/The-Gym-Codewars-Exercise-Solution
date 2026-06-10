/*
Convert a string of numbers to a sentence. Each number represents a letter.
Numbers in the string are separated by a space, and words in the sentence are separated by a plus character
Conversion table : 1 = A, 2 = B
eg: numbersToLetters('20 5 19 20+4 15 13 5') should return "TEST DOME"

Here is how I thing to solve this
Suppose somebody gives you:
20 5 19 20+4 15 13 5

step 1 : Separate the words where we found + we split with
["20 5 19 20", "4 15 13 5"] Now we know we have word 1 word 2
split by spaces: ["20 5 19 20"]



*/