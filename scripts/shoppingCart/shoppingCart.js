// import
import { productsData } from "./products.js";

const btnShowModal = document.querySelector("#showModal");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector("#ModalShop");
const closeBtn = document.querySelector(".closeModal");
const confirmBtn = document.querySelector(".confirmModal");

const productsDom = document.querySelector("#section_one");
const cartTotal = document.querySelector(".cart-total span");
const clearCart = document.querySelector(".clear");
const cartItems = document.querySelector(".badg-count");
const modalBody = document.querySelector(".modal-body");

let cart = [];
let buttonsDOM = [];

// functions
const closeModal = () => {
    modal.style = "opacity:0";
    backdrop.style = "display:none";
};

const openModal = () => {
    modal.style = "opacity:1";
    backdrop.style = "display:block";
};

const confirmModal = () => {
    modal.style = "opacity:0";
    backdrop.style = "display:none";
};

// classes
class Products {
    getProducts() {
        return productsData;
    }
};

class Ui {
    displayProducts(products) {
        let result = ``;
        products.forEach(item => {
            result += `<div class="col-12 col-sm-6 col-lg-4 mt-4">
            <div class="card" id=${item.id}>
                <div class="card-img">
                    <img src=${item.imageUrl} alt=${item.title}/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text"><span>${item.price}</span>$</p>
                    <button class="btn btn-primary add-to-cart" data-id=${item.id}>add to cart</button>
                </div>
            </div>
        </div>`;
            productsDom.innerHTML = result
        });
    };

    getAddToCartBtns() {
        const addToCartBtn = [...document.querySelectorAll(".add-to-cart")];
        buttonsDOM = addToCartBtn;

        addToCartBtn.forEach(item => {
            const id = item.dataset.id;
            // check if this product id is in cart or not
            const isInCart = cart.find(product => product.id === id);
            if (isInCart) {
                item.innerText = "in cart";
                item.disabled = true;
            }
            item.addEventListener("click", (event) => {
                event.target.innerText = "In Cart";
                event.target.disabled = true;
                // get product from products
                const addProduct = {...Storage.getProduct(id), quantity: 1 };
                // add to cart
                cart = [...cart, {...addProduct }];
                // save cart to local storage
                Storage.saveCart(cart);
                //update cart value
                //this refrence peida mikone be on object va mige on object ro begir va set cart value ro begir va render kon
                this.setCartValue(cart);
                //add to cart item
                this.addCartItem(addProduct);
                //get cart from storage!                
            });
        });
    };

    //set count item in cart and update and total item
    setCartValue(cart) {
        //cart item
        //cart total price
        let tempCartItems = 0;
        const totalPrice = cart.reduce((acc, curr) => {
            tempCartItems += curr.quantity;
            return acc + curr.quantity * curr.price
        }, 0);
        cartTotal.innerText = totalPrice.toFixed(2);
        cartItems.innerText = tempCartItems;
    };

    addCartItem(cartItem) {
        const div = document.createElement("div");
        div.classList.add("cart-row");
        div.innerHTML = `
        <div class="cart-row-img ">
            <img src=${cartItem.imageUrl} />
        </div>
        <div class="cart-row-body ">
            <p class="card-title ">${cartItem.title}</p>
            <p class="card-text "><span>${cartItem.price}</span>$</p>
        </div>
        <div class="cart-row-count ">
            <i class="btn color-purple fa fa-chevron-up " aria-hidden="true " data-id=${cartItem.id}></i>
            <p>1</p>
            <i class="btn color-red fa fa-chevron-down " aria-hidden="true " data-id=${cartItem.id}></i>
        </div>
        <i class="btn btn-clear fa fa-trash " aria-hidden="true " data-id=${cartItem.id}></i>
        </div>`;
        modalBody.appendChild(div);
    };

    setUpApp() {
        //get cart from storage
        cart = Storage.getCart() || [];
        //add cart item 
        cart.forEach(cartItem => this.addCartItem(cartItem));
        //set values: total price + items
        this.setCartValue(cart);
    };

    cartLogic() {
        //clear cart:
        clearCart.addEventListener("click", () => this.clearCart());

        //cart functionality
        modalBody.addEventListener("click", (event) => {
            if (event.target.classList.contains("fa-chevron-up")) {
                const addQuantity = event.target;
                //get item from cart                
                const addedItem = cart.find(cItem => parseInt(cItem.id) === parseInt(addQuantity.dataset.id));
                addedItem.quantity++;

                //update cart value
                this.setCartValue(cart);

                //save cart
                Storage.saveCart(cart);

                //update cart item in UI                
                addQuantity.nextElementSibling.innerText = addedItem.quantity;
            } else if (event.target.classList.contains("fa-chevron-down")) {
                const subQuantity = event.target;
                // get item from cart                
                const subItem = cart.find(cItem => parseInt(cItem.id) === parseInt(subQuantity.dataset.id));
                if (subItem.quantity === 1) {
                    this.removeItem(subItem.id)
                    modalBody.removeChild(subQuantity.parentElement.parentElement)
                }
                subItem.quantity--;

                // update cart value
                this.setCartValue(cart);

                // save cart
                Storage.saveCart(cart);

                // update cart item in UI                
                subQuantity.previousElementSibling.innerText = subItem.quantity;
            } else if (event.target.classList.contains("fa-trash")) {
                const removeItem = event.target;

                // get item from cart
                const _removedItem = cart.find(cItem => parseInt(cItem.id) == parseInt(removeItem.dataset.id));

                //remove from cart item
                this.removeItem(_removedItem.id);

                //remove from modal
                modalBody.removeChild(removeItem.parentElement);

                //update storage
                Storage.saveCart(cart);
            }
        });
    };

    clearCart() {
        //remove: (DRY)=>
        cart.forEach((cItem) => this.removeItem(cItem.id));

        // remove cart content children:
        while (modalBody.children.length) {
            modalBody.removeChild(modalBody.children[0])
        };

        cartItems.innerText = 0;
        closeModal();
    };

    removeItem(id) {
        // update cart
        cart = cart.filter((cItem) => parseInt(cItem.id) !== parseInt(id));

        // total price and cart items
        this.setCartValue(cart);

        // update storage:
        Storage.saveCart(cart);

        //get add to cart btns =>update text and disable
        this.getSingleButton(id);
    };

    getSingleButton(id) {
        const button = buttonsDOM.find(btn => parseInt(btn.dataset.id) === parseInt(id));
        button.innerText = "add to cart";
        button.disabled = false;
    };
};

class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    };

    static getProduct(id) {
        const _products = JSON.parse(localStorage.getItem("products"));
        return _products.find(p => p.id === parseInt(id));
    };

    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart))
    };

    static getCart() {
        return JSON.parse(localStorage.getItem("cart")) ?
            JSON.parse(localStorage.getItem("cart")) : [];
    };
};

// event
document.addEventListener("DOMContentLoaded", () => {
    const products = new Products();
    const productsData = products.getProducts();
    const ui = new Ui();
    //set up: get cart and set up app:
    ui.setUpApp();
    ui.cartLogic()
    ui.displayProducts(productsData);
    ui.getAddToCartBtns();
    Storage.saveProducts(productsData)
});

// --> modal:
closeBtn.addEventListener("click", closeModal);
btnShowModal.addEventListener("click", openModal);
backdrop.addEventListener("click", closeModal);
confirmBtn.addEventListener("click", confirmModal);