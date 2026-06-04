const between = (a, b) => {
    let arr = [];
    if(a<b){
        for(let i = a; i<=b; i++){
            arr.push(i);
        }
    }else{
        return "Check the value of a and b";
    }
    return arr;
}

console.log(between(1,4));