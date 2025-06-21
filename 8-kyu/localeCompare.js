const a = "réservé";
const b = "RESERVE";

console.log(a.localeCompare(b)); // Output: -1 (or 1, depending on the locale settings)
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' })); // Output: 0 (case-insensitive comparison)