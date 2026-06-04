// Find the first non-consecutive number

const firstNonConsecutive = (arr)=>{
    for(let i= 1; i < arr.length; i++ ){
        if(arr[i]!== [arr[i] - 1] + 1){
            return arr[i];
        }
    }
    return null;
}