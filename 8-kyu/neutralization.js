function neutralise(s1, s2) {
    let result = '';
    for (let i = 0; i < s1.length; i++) {
        const c1 = s1[i];
        const c2 = s2[i];
        if (c1 === c2) {
            result += c1;
        }else {
            result = '0'
        }
    }
}

console.log(neutralise('abc', 'abc')); // 'abc'
console.log(neutralise('abc', 'abd')); // '0'