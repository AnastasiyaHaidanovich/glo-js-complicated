
let lang = prompt("Выберите язык", "ru | en");
const daysArr = {"ru" : "Понедельник, Вторник, Среда, Четверг, Пятница, Субботы, Воскресенье",
                 "en" : "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"};
//через if,
if (lang == "ru"){
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Субботы, Воскресенье");
} else if (lang == "en"){
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else {
    console.log("Язык введен неверно");
}
//через switch-case
switch (lang){
    case "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Субботы, Воскресенье");
        break;
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
    default:
        console.log("Язык введен неверно");
}
//через многомерный массив.
console.log(daysArr[lang]);
//тернарный оператор
let namePerson = prompt("Введите имя");
let nameResult = 
    (namePerson === "Артем") ? "директор" :
        (namePerson === "Александр") ? "преподаватель" : "студент";
console.log(nameResult);

