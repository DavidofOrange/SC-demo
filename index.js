const nav = document.querySelector(".main-nav");
const buttonToggle = document.querySelector(".toggle-button");

buttonToggle.addEventListener("click", () => {
    const visible = nav.getAttribute("data-expanded");
    if (visible === "false") {
        nav.setAttribute("data-expanded", true);
    } else {
        nav.setAttribute("data-expanded", false);
    }
})