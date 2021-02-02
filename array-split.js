const numbs = [2, 4, 6, 8, 9, 12];
//const part1 = numbs.slice(2, 5);

//const remove = numbs.splice(3, 5);

const remove = numbs.splice(3, 2, 88, 99);

// console.log(remove);
// console.log(numbs);

//const together = numbs.join("");
//const together = numbs.join(" ");
const together = numbs.join(",");
console.log(together);