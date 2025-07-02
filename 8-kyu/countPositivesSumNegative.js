function countPositivesSumNegatives(input) {
    let result = [0, 0];
    if (input == null || input.length == 0){
        return [];
    }

    for (let i of input){
        if (i> 0){
            result[0]++; // this counts the positive numbers
        }else {
            result[1] += i; // this sums the negative numbers
        }
    }return result;
}

cons