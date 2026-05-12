/**
Imagine you have two strings
- The main one = "abc"
- The ending you want to check = "bc"

You want to know:
    Doest  "abc" end with "bc"?
        if yes -> return true
        if not -> return false

And JavaScript already gave us the build in method endsWith()
 */

// Create a function named solution
const solution = (str, ending) => {
    // Check if "str" ends with the value stored in 'ending'
    // endsWith() returns  either true or false
    return str.endsWith(ending);
}

console.log(solution("abc", "bc"))