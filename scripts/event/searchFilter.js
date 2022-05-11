const searchProduct = document.querySelector('#search_input');
const searchList = document.querySelector('#search_list');
const liTag = document.createElement("li");

const products = [
    { title: "node.js" },
    { title: "react.js" },
    { title: "javaScript.js" },
    { title: "vue.js" },
    { title: "react-dome.js" },
    { title: "react.js project" },
];
// searchProduct.addEventListener("input", (e) => {
//     products.forEach(item => {
//         if (e.target.value == item.title) {
//             liTag.textContent = item.title;
//             searchList.appendChild(liTag);
//         }
//     });
// });

const filters = {
    searchItem: ''
};

const renderProducts = (_products, _filters) => {
    _products.filter((item) => {
        return item.title.includes(_filters.searchItem);
    });
}

searchProduct.addEventListener("input", (e) => {
    filters.searchItem = e.target.value;
    renderProducts(products, filters);
});