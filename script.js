const addText = document.querySelector(".add-text");
const showText = document.querySelector(".show-text");

function debounce(fn, ms) {
    let timeout;
    return function () {
        const fnCall = () => { 
            fn.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms);
    };
}

const showTextFunc = () => {
    showText.textContent = addText.value;
    addText.value = "";
};

let showTextDebounced = debounce(showTextFunc, 700);

addText.addEventListener('keyup',showTextDebounced);