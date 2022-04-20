// let maximum = (a, b) => {
//     if (a > b) {
//         return console.log(a + " > " + b);

//     } else if (a < b) {
//         return console.log(a + " < " + b);

//     } else {
//         return console.log(a + " === " + b);

//     }
// }

// let maximum = (a, b) => {
//     if (a > b) return a;

//     return b;
// }

let maximum = (a, b) => {
    return a > b ? a : b;
}

console.log("maximum: " + maximum(3, 9));