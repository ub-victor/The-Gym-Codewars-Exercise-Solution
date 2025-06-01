function isVow(a){
  return a.map(x =>{
  if(/[aeiou]/.test(String.fromCharCode(x))){
    return String.fromCharCode(x);
  } return x;
});
               
}
