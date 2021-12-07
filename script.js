let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let month = ["января", "февраля", "марта", "апреля", "мая", "июня",
 "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let today = document.querySelector(".today");
let short = document.querySelector(".short");

let hour, minute, second;


function wrightRightHour(elem){
    if (elem == 1 || elem == 21){
        hour = " час ";
        return elem;
    } else if (elem >= 2 && elem <= 4 || elem >= 22){
        hour = " часа ";
        return elem;
    } else if (elem >= 5 && elem <= 20){
        hour = " часов ";
        return elem;
    }
}

function wrightRightMinute(elem){
    if (elem % 10 == 1 && elem !== 11){
        minute = " минута ";
        return elem;
    } else if (elem % 10 >= 2 && elem % 10 <= 4){
        minute = " минуты ";
        return elem;
    } else if (elem >= 11 && elem % 10 <= 20){
        minute = " минут ";
        return elem;
    } else {
        minute = " минут ";
        return elem;
    }
}

function wrightRightSecond(elem){
    if (elem % 10 == 1 && elem !== 11){
        second = " секунда ";
        return elem;
    } else if (elem % 10 >= 2 && elem % 10 <= 4 ){
        second = " секунды ";
        return elem;
    } else if (elem >= 11 && elem % 10 <= 20){
        second = " секунд ";
        return elem;
    }  else {
        second = " секунд ";
        return elem;
    }
}

function zeroPlus(elem){
    if (elem < 10){
        elem= "0" + elem;
        return elem;
    } else {
        return elem;
    }
}

function wrightDate() {
    let todayDate = new Date();
    today.innerHTML = "Сегодня " + week[todayDate.getDay()-1] +", " + 
    todayDate.getDate() + " " + month[todayDate.getMonth()] + " " + todayDate.getFullYear() + 
    " года, " + wrightRightHour(todayDate.getHours()) + hour + wrightRightMinute(todayDate.getMinutes()) + 
    minute + wrightRightSecond(todayDate.getSeconds()) + second;

    short.innerHTML = zeroPlus(todayDate.getDate()) + "." + (todayDate.getMonth()+1) + "." + 
    todayDate.getFullYear() + " - " + zeroPlus(todayDate.getHours()) + ":" + 
    zeroPlus(todayDate.getMinutes()) + ":" + zeroPlus(todayDate.getSeconds());
}

window.setInterval(() => wrightDate(), 1000);