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

const numbersToLetters = (stringOfNumbers)=>{

    // Split the sentence into words using "+"
    const words = stringOfNumbers.split("+") // we will get two arrays

    // Create an array that will store decoded words
    const decodedWords = [];

    // Loop through every word
    for( let i = 0; i < words.length; i++) {
        // Split the current word into individual numbers
        const numbers = words[i].split(" ");

        // Variable that will store the decoded word
        let decodedWord = "";

        // Loop thought each number
        for(let j = 0; j < numbers.length; j++){

            // Convert the string number into an actual number
            const number = parseInt(numbers[j]);

            // Convert the number into a letter
            /* String.fromCharCode(65) looks up the character at ASCII code 65, which is "A". */
            const letter = String.fromCharCode(64+number);

            // Add the letter to the current word
            decodedWord += letter; 
        }



    }
}