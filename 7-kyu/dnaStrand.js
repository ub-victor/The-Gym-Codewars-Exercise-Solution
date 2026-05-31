/*
We are about to work of a Kata which is based on a simplified idea from biology.
Here is the story
DNA is made up of two strands that pair together, a bit like the two sides of a zipper.
Each "letter" on one strand always matches a specific letter on the other strand:
A-> T
T->A
C->G
G->C
so ATTGC -> TAACG

*/

const dnaStrand = (dna)=>{
    let result="";
    for(char of dna){
    switch (char){
        case "A":
          result += "T";
          break;
        case "T":
          result += "A";
          break;
        case "C":
          result += "G";
          break;
        case "G":
          result += "C";
          break;
    }
  }
  return result;
}

console.log(dnaStrand("ATTGC"));