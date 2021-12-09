let btn = document.getElementById("btn");
let inputText = document.querySelector("[type=text]");

let eBtn = document.getElementById("e_btn");

let inputRange = document.querySelector("[type=range]");
let circle = document.getElementById("circle");

btn.addEventListener('click', function() {
    btn.style.backgroundColor = inputText.value;
    inputText.value = "";
});

eBtn.style.display = "none";

inputRange.addEventListener('input', function(){
    circle.style.width = inputRange.value + "%";
    circle.style.height = inputRange.value + "%";
});
