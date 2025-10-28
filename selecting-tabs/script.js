const buttons = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");

// hide all
function hideAll() {
    contents.forEach((content) => {
        content.classList.remove('active');
    });
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });
}

//Listener for each button
buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        hideAll();
        contents[index].classList.add('active');
        btn.classList.add('active');
    });
});
