// ('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', `Input: "The quick brown fox jumps over the lazy dog."`);
// ('apple'), 'elppa', `Input: "apple"`);

const reverseWords = (str)=>{
    return str
        .split(" ")
        .map(word=> word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseWords("he quick brown fox jumps over the lazy dog"))