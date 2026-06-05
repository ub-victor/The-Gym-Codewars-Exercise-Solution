// Complete the solution so that the function will break up camel casing, using a space between words.

const breakCamelCase = (str)=>{
    /*
    means:

    [A-Z] → match any uppercase letter
    () → capture the letter
    g → find all matches
    
    
    */
    return str.replace(/([A-Z])/g , " $1");
}

console.log(breakCamelCase("HelloWorldGys"))