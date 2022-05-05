// const checkNumber = (array, number) => {
//     const checkTrue = [];
//     for (let item of array) {
//         if (item === number) {
//             checkTrue.push(true);
//         }
//         checkTrue.push(false);
//     }
//     for (let item of checkTrue) {
//         if (item === true) {
//             return true;
//         }
//     }
//     return false;
// }

const checkNumber = (array, number) => {
    for (let item of array) {
        if (item === number) {
            return true
        }
    }
    return false;
}


const numbers = [1, 2, 3, 4, 5];
console.log(checkNumber(numbers, 4));
console.log(checkNumber(numbers, 9));