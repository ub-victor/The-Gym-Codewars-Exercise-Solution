const number = [1, -1, 2,3];

const filtered  = number.filter(n=> n>=o);

const items = filtered.map(n=> "<li>"+ n +"<li>" )
const html = items.join();
// const html = "ul"+ items.join("")+ "ul";

console.log(items);