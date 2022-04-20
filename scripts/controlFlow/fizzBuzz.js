// let fizzBuzz = (number) => {
//     if (typeof(number) === "number" && number % 3 === 0) {
//         return "Fizz";

//     } else if (typeof(number) === "number" && number % 5 === 0) {
//         return "Buzz";

//     } else if (typeof(number) === "number" && number % 3 === 0 && number % 5 === 0) {
//         return "FizzBuzz";

//     } else if (typeof(number) === "number" && number % 3 !== 0 && number % 5 !== 0) {
//         return number;

//     } else {
//         return "not a number";
//     }
// }

let fizzBuzz = (number) => {
    if (typeof(number) !== "number") return "not a number";

    // dar in ja chinesh if ha moheme ke age bar 3 && 5 bakhsh pazir bashe baiad aval check beshe 
    if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";

    if (number % 3 === 0) return "Fizz";

    if (number % 5 === 0) return "Buzz";

    return number
}

console.log("fizzBuzz: " + fizzBuzz(3))