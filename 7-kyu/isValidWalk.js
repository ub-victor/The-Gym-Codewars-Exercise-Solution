/*
Take a Ten Minutes Walk

Imagine you are standing at point (0,0) on a map

Each letter moves you one block:
    - "n" -> move up
    - "s" -> move down
    - "e" -> move right
    - "w" -> move left

For the function to return true, two conditions must be satisfied.

Con1: The walk must last exactly 10 minutes
Since each step takes 1 minute, the array must contain exactly 10 directions.

['n','s','n','s','n','s','n','s','n','s'] There are 10 letters -> which is 10 minutes

['n','s','e'] Only 3 letters -> false and the walk is exactky 10.

Con2: You must end where you started

Every movement must be cancelled by its opposite.

north <-> south and east <-> west
['n','n','s','s']
work
Start

↑
↑
↓
↓

Back to start

['n','n','n','s']

Start

↑
↑
↑
↓

End here

You're still one block north of where you started


Algorithm

1. Is the  array length 10?
    No - > false
2. count
    north , south , east, west
3. compare 
    north === south
    and east === west
if both are true , return true otherwise return false
*/

const isValidWalk = (walk) => {
    if(walk.lenght !==10){
        return false
    }

    let north  = 0;
    let south = 0;
    let east = 0;
    let west = 0;

    for (let directions of walk){
        if(directions === "n") north ++;
        if(directions === "s") south ++;
        if(directions === "e") east ++;
        if(directions === "w") west ++;

    }
    return north === south && east === west;
}