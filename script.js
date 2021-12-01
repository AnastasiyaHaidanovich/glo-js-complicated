let numSaved;
let userNum;
const saveNumber = function () {
    userNum = prompt("Введите число");
    if (!isNaN(parseFloat(userNum)) && isFinite(userNum)) {
        numSaved = userNum.trim();
    } else {
        saveNumber();
    }
    return +numSaved;
};
console.log(saveNumber());