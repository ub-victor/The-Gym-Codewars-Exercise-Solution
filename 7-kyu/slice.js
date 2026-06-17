/* 
The slice() method of array instances return a shollow copy. of a portion of an array into a new array object selected from start to end (end not included)
*/


const animals = ["ant", "bison", "camel", "duck", "elephant"];

const slice0 = animals.slice(2) // from two to the  end
console.log(slice0)

const slice1 = animals.slice(2,4) //4 not included
console.log(slice1);

const slice2 =  animals.slice(2,6);

console.log(slice2);