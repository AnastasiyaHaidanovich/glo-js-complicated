let book1 = document.querySelectorAll(".book")[1];
let book2 = document.querySelectorAll(".book")[0];
let book3 = document.querySelectorAll(".book")[4];
let book4 = document.querySelectorAll(".book")[3];
let book5 = document.querySelectorAll(".book")[5];
let book6 = document.querySelectorAll(".book")[2];

book1.insertAdjacentElement('afterend', book2);
book3.insertAdjacentElement('afterend', book4);
book5.insertAdjacentElement('afterend', book6);

document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

let book3title = book3.querySelector("h2 > a");
book3title.innerText = "Книга 3. this и Прототипы Объектов";

let advertising = document.querySelector(".adv");
advertising.remove();

let book5additionA = book5.querySelectorAll("ul>li")[5];
let book5additionB = book5.querySelectorAll("ul>li")[8];
let book5chapter1 = book5.querySelectorAll("ul>li")[9];
let book5chapter2 = book5.querySelectorAll("ul>li")[3];
let book5chapter4 = book5.querySelectorAll("ul>li")[2];
let book5chapter5 = book5.querySelectorAll("ul>li")[6];

book5chapter2.insertAdjacentElement('beforebegin',book5chapter1);
book5chapter5.insertAdjacentElement('beforebegin', book5chapter4);
book5additionB.insertAdjacentElement('beforebegin',book5additionA);

let book2additionB = book2.querySelectorAll("ul>li")[9];
let book2additionC = book2.querySelectorAll("ul>li")[2];
let book2chapter1 = book2.querySelectorAll("ul>li")[3];
let book2chapter2 = book2.querySelectorAll("ul>li")[6];
let book2chapter3 = book2.querySelectorAll("ul>li")[8];

let book6chapter7 = book6.querySelectorAll("ul>li")[8];
let book6chapter8 = document.createElement("li");
book6chapter8.innerText = "Глава 8: За пределами ES6";
book6.querySelector("ul").append(book6chapter8);
book6chapter7.insertAdjacentElement('afterend',book6chapter8);