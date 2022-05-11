const products = [
    { title: "product 1", isExist: true },
    { title: "product 2", isExist: false },
    { title: "product 3", isExist: false },
    { title: "product 4", isExist: true },
    { title: "product 5", isExist: true },
];

//get element parent
const contentCountProduct = document.querySelector('#countProducts');
const contentListProduct = document.querySelector('#ProductsList');

//count item:
// const countProduct = products.filter(item => {
//     return item.isExist === true
// });
const availableProduct = products.filter(item => item.isExist);

//create element for display the number of available products:
const countItem = document.createElement("h3");
countItem.textContent = `count product: ${availableProduct.length}`;
contentCountProduct.appendChild(countItem);

//create element for show available products:
// const productsList = products.forEach(item => {
//     if (item.isExist === true) {
//         const product = document.createElement("h4");
//         product.textContent = item.title;
//         contentListProduct.appendChild(product);
//     }
// });
availableProduct.forEach(item => {
    const product = document.createElement("h4");
    product.textContent = item.title;
    contentListProduct.appendChild(product);
})