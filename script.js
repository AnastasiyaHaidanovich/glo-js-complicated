let userStr = prompt("Введите строку");
const changeString = function(str){
    if (typeof str !== "string"){
        alert("Это не строка!");
    } else {
        let newStr = str.trimLeft().trimRight();
        if (newStr.length > 30){
            alert(newStr.slice(0, 29) + "...");
        } else {
            alert(newStr);
        }
    }
};
changeString(userStr);