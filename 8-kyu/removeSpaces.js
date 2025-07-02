function removeSpaces(str){
    return str.replace(/\s/g, ''); //this regex matches all whitespace characters and replaces them with an empty string so \s is udefined as a whitespace character
}

console.log(removeSpaces("The quick brown fox jumps over the lazy dog")); 
