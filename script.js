const snow = document.querySelector(".snow");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

let active = false;
let count = 0;
let idInterval;

const snowAnimate = () => {
    count++;
    idInterval = requestAnimationFrame(snowAnimate);

    if (count < 500) {
        snow.style.top = count + "px";
    } else {
        cancelAnimationFrame(idInterval);
    }
};

pause.addEventListener('click', () => {
    if (active) {
        cancelAnimationFrame(idInterval);
        active = false;
    } else {
        idInterval = requestAnimationFrame(snowAnimate);
        active = true;
    }
});

reset.addEventListener('click', () => {
    count = 0;
    snow.style.top = count + "px";
    cancelAnimationFrame(idInterval);
    active = false;
});