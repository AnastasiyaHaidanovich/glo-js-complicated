let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let weekdays = document.querySelector(".weekdays");
let today = new Date();

for (let i = 0; i < week.length; i++){
    let point = week[i];
    if (today.getDay() == i+1){
        point = "<b>" + point + "</b>";
    }
    if (i == 5 || i == 6){
        point = "<i>" + point + "</i>";
    }
    document.body.innerHTML += point + "</br>";
}



