function sumStrings(a, b) {
  // Convert strings to numbers, sum them, and convert back to string
  return (BigInt(a) + BigInt(b)).toString();
}

function sumStrings(str1, str2) {
  const num1 = parseInt(str1);
  const num2 = parseInt(str2);
  const sum = num1 + num2;
  return sum.toString();
}



console.log(sumStrings("2","2"));