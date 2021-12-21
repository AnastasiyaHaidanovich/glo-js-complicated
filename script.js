const addText = document.querySelector(".add-text");
const showText = document.querySelector(".show-text");

function debounce() {
    addText.addEventListener('change', () => {
        showText.textContent = "";
        const showTextFunc = () => {
            showText.textContent = addText.value;
            addText.value = "";
        };
        setTimeout(showTextFunc, 300);
});
}
debounce();