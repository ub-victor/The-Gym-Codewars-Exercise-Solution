const positiveSum = (arr) => {
    let result = 0;
    for(let i=0; i< arr.length; arr ++){
        if(arr[i]>0){
            result += arr[i];
        }
    }
    return result;
}

console.log(positiveSum([1,16,-1,-16]))