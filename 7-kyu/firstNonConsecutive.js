// Find the first non-consecutive number

const firstNonConsecutive = (arr)=>{
    for(let i= 1; i < arr.length; i++ ){
        if(arr[i]!== arr[i -1] + 1 ){ // 3 !== 1 = 3 equal false as the previous index + 1 gives the next one  on the index 3 it will be 6 ==! arr[2] = 4 +1 = 5 which is true and it is the one pass the condition 
            return arr[i];
        }
    }
    return null;
}

console.log(firstNonConsecutive([1,3,4,6,7,8]));x
console.log(firstNonConsecutive([1,2,3,4,5,6]));