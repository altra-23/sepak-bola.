const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

// klik hamburger → buka menu
hamburger.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
});

// klik overlay → tutup menu
overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});
