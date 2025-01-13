const themeSelector = document.getElementById("menu");
const logoimage = document.getElementById("logo");
function changeTheme() {
    
if (themeSelector.value == "dark") {
    logoimage.setAttribute("src", "byui-logo_white.png");
    document.body.classList.add("dark");
} else {
    logoimage.setAttribute("src", "byui-logo_blue.webp");
    document.body.classList.remove("dark");
}
}

themeSelector.addEventListener('change', changeTheme);