const nav = document.querySelector(".main-nav");
const buttonToggle = document.querySelector(".toggle-button");

buttonToggle.addEventListener("click", () => {
    const visible = nav.getAttribute("data-visible");
    if (visible === "false") {
        nav.setAttribute("data-visible", true);
        buttonToggle.setAttribute("aria-expanded", true);
        
    } else {
        nav.setAttribute("data-visible", false);
        buttonToggle.setAttribute("aria-expanded", false);
    }
})