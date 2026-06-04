// Find the first non-consecutive number

const firstNonConsecutive = (arr)=>{
    for(let i= 1; i < arr.length; i++ ){
        if(arr[i]!== arr[i -1] + 1 ){ // 3 !== 1 = 3 equal false 
            return arr[i];
        }
    }
    return null;
}

console.log(firstNonConsecutive([1,3,4,6,7,8]))