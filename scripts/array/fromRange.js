const formRange = (min, max) => {
    const arr = [];
    for (let i = min; i <= max; i++) arr.push(i);
    return arr;
};

console.log(formRange(3, 12));