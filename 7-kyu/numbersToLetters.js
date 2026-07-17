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
split by spaces: ["20 5 19 20"] convert to number 
20 → T
5  → E
19 → S
20 → T
Then the second
Then the important part
First how do we convert a number into a letter?
js provides us build method 'fromCharCode'  => String.fromCharCode()
It gives A = 65,B = 66 so 1 = A we can do String.fromCharCode(64+ number) 
Which will be string.fromCharCode(64 + 1) = String.fromCharCode(65) which is A
In short the index of alphabet form 1 + 64  gives the UTF-16 code units for Alphabet
String.fromCharCode(83) = S , 19+64 = 83

Here is the Algorithm Before Coding

Split sentence by +

For each word

    Split word by spaces

    For each number

        Convert number to letter

    Join letters to make a word

Join all words using spaces

Return result

*/

const numbersToLetters = (stringOfNumbers) =>{
    
}