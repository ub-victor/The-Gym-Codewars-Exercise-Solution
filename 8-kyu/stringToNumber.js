const stringToNumber = function(str) {
  return Number(str);  // Convert the string to a number
  // return parseInt(str); // the parseInt method can also be used to convert a string to an integer
  // return +str;         // the unary plus operator can also be used to convert a string to a number
};

console.log(stringToNumber("1234"))