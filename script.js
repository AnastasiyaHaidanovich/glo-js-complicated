let btn = document.getElementById("btn");
let inputText = document.querySelector("[type=text]");

let eBtn = document.getElementById("e_btn");

let inputRange = document.querySelector("[type=range]");
let spanRange = document.getElementById("range-span");
let circle = document.getElementById("circle");

btn.addEventListener('click', function() {
    btn.style.backgroundColor = inputText.value;
    inputText.value = "";
});

eBtn.style.display = "none";

inputRange.addEventListener('input', function(){
    spanRange.innerText = inputRange.value;
    circle.style.width = inputRange.value + "%";
    circle.style.height = inputRange.value + "%";
});
