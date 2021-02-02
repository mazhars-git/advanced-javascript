const number = [4, 3, 5, 6, 8, 20];

// let output = [];
// for (let i = 0; i< number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);

//     }
// const result = number.map(function (element){
//     return element * element;
    
// });

//const result = number.map(square = x => x * x);

const bigger = number.filter(x => x >5);
const newBigger = number.find(x => x >5);
console.log(newBigger);