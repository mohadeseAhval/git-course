// let speedCheck = (speed) => {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     const pointLimit = 12;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log("Ok");

//     } else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);

//         if (points <= pointLimit) console.log(`point ${points}`);
//         else console.log(`suspend`);
//     }

// }


let speedCheck = (speed) => {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const pointLimit = 12;

    if (speed < speedLimit + kmPerPoint) return "Ok";

    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points <= pointLimit) return `point ${points}`;
    return `suspend`;
}

console.log("speedCheck: " + speedCheck(130))