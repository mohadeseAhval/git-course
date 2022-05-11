// const incrementBtn = document.querySelector(".increment");
// const decrementBtn = document.querySelector(".decrement");
// const resetBtn = document.querySelector(".reset");
// const counter = document.querySelector(".counter span");

// incrementBtn.addEventListener("click", () => {
//     counter.textContent++;
// });

// decrementBtn.addEventListener("click", () => {
//     counter.textContent--;
// });

// resetBtn.addEventListener("click", () => {
//     counter.textContent = 0;
// });

// ------------------------------------------------
const buttons = document.querySelectorAll(".btn");
const counter = document.querySelector(".counter span");
let count = 0;

// buttons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const styles = btn.classList;
//         if (styles[1] === "increment") count++;
//         else if (styles[1] === "decrement") count--;
//         else if (styles[1] === "reset") count = 0;

//         counter.textContent = count;
//     });
// });

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const classList = btn.classList;
        if (classList.contains("increment")) count++;
        else if (classList.contains("decrement")) count--;
        else if (classList.contains("reset")) count = 0;

        counter.textContent = count;
    });
});