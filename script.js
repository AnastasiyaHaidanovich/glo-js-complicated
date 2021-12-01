let numSaved;
let userNum;
const saveNumber = function () {
    userNum = prompt("Введите число");
    if (userNum === null){
        numSaved = 0;
    } else if (!isNaN(parseFloat(userNum)) && isFinite(userNum)) {
        numSaved = userNum.trim();
    } else {
        saveNumber();
    }
    return +numSaved;
};
console.log(saveNumber());