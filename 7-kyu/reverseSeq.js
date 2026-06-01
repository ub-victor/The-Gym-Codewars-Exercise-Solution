const reverseSeq = n => {
    const fin = [];
    for (let i = 1; i <= n; n--){
        fin.push(n)
    }
    return fin;
}

console.log(reverseSeq(5));