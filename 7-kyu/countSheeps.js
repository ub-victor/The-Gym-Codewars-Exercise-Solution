/*
We are asked to count many sheep are present in an arraay
true = The sheep is present, 
false = the sheep is missing
If the array contain null, undefined we will considered bad values, so we should NOT count them.
*/

function countSheeps(sheep){
    let count = 0;

    for(let i=0; i < sheep.length; i++){
        if(sheep[i] === true){
            count++;
        }
    }
    return count; 
}

console.log(countSheeps([true,  true,  true,  false,
                          true,  true,  true,  true ,
                          true,  false, true,  false,
                          true,  false, false, true ,
                          true,  true,  true,  true ,
                          false, false, true,  true ]));