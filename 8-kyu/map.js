// map and filter return a new array they don't modify the new array
const number = [1, -1, 2,3];

const filtered  = number.filter(n=> n>=o);
/*
const items = filtered.map(n=> "<li>"+ n +"<li>" )
const html = items.join();
// const html = "ul"+ items.join("")+ "ul";

*/
const items = filtered.map(n => {
    const obj = {value:n}
    return obj;
})

console.log(items);