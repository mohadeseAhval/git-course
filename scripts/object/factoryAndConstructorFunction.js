// const userData = {
//     name: "Mohadese",
//     age: 25,
//     street: "Falahi Street"
// };

const userDataFactory = (name, age, street) => {
    return {
        name,
        age,
        street
    }
};

function UserDataConstructor(name, age, street) {
    this.name = name;
    this.age = age;
    this.street = street;
};

function UserDataConstructor2(name, age, street) {
    this.name = name;
    this.age = age;
    this.street = street;
    return this;
};

const setUserDataFactory = userDataFactory("Mohadese", 24, "Falahi Street");
console.log(setUserDataFactory);

const setUserDataConstructor = new UserDataConstructor("Mahdie", 22, "Falahi Street");
console.log(setUserDataConstructor);

const applyUserDataConstructor = UserDataConstructor2.apply({}, ["ali", 50, "Falahi Street"]);
console.log(applyUserDataConstructor);

const callUserDataConstructor = UserDataConstructor2.call({}, "roqaye", 48, "Falahi Street");
console.log(callUserDataConstructor);