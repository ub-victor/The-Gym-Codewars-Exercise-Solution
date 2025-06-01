function isVow(a){
  return a.map(x =>{
  if(/[aeiou]/.test(String.fromCharCode(x))){
    return String.fromCharCode(x);
  } return x;
});
               
}

console.log(isVow([97, 98, 99, 100, 101, 5])); // ['a', 'b', 'c', 'd', 'e', 5]