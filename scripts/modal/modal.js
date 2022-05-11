const btn = document.querySelector(".btn");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeModal");
const confirmBtn = document.querySelector(".confirmModal");

const close = () => {
    modal.style.opacity = 0;
    backdrop.style.display = "none";
};

const open = () => {
    modal.style.opacity = 1;
    backdrop.style.display = "block";
};

const confirm = () => {
    modal.style.opacity = 0;
    backdrop.style.display = "none";
};

closeBtn.addEventListener("click", close);

btn.addEventListener("click", open);

backdrop.addEventListener("click", close);

confirmBtn.addEventListener("click", confirm);