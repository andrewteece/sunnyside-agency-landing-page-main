const $menuButton = document.querySelector(".menu-button");
const $mainNav = document.querySelector(".main__nav");

$menuButton.addEventListener("click", () => {
    $mainNav.classList.toggle("-active");
});