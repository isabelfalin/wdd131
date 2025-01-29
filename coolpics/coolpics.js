function showMenu() {
    var element = document.getElementById("nav");
    element.classList.toggle("show");
}

const button = document.getElementById("button");
button.addEventListener("click", showMenu);
