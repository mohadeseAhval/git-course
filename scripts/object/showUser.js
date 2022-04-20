const userData = {
    name: "Mohadese",
    age: 24,
    address: {
        city: "Mashhad",
        country: "Iran"
    }
};

const showUser = (obj) => {
    for (let key in obj) {
        console.log(key, obj[key]);
    }
}

console.log(showUser(userData));