var body = document.querySelector("body");
var modal = document.querySelector(".modal");
var loginButton = document.querySelector(".login-button");
var closeButton = document.querySelector(".close-button");
var scrollDown = document.querySelector(".scroll-down");
var isOpened = false;

var openModal = () => {
    modal.classList.add("is-open");
    body.style.overflow = "hidden";
};

var closeModal = () => {
    modal.classList.remove("is-open");
    body.style.overflow = "initial";
};

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight / 3 && !isOpened) {
        isOpened = true;
        scrollDown.style.display = "none";
        openModal();
    }
});

loginButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
    evt = evt || window.event;
    evt.keyCode === 27 ? closeModal() : false;
};