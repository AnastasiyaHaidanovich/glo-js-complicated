const carsSelect = document.getElementById("cars");
let options = carsSelect.querySelectorAll("option");
const result = document.querySelector(".result");

const chooseCar = (val) => {
    return fetch("cars.json").then(res => res.json())
    .then(data => {
        if (val === "car"){
            result.textContent = "Выберите тачку";
        } else {
            result.innerText = `Тачка ${data.cars[val].brand} ${data.cars[val].model} \n Цена: ${data.cars[val].price}$`;
        }
    })
    .catch(error => {
        console.log(error);
    })
    ;
};

carsSelect.addEventListener('input', () => {
    let val;
    options.forEach((option) => {
        if (option.value == "bmw" && option.selected){
            val = 0;
        } else if (option.value == "volvo" && option.selected){
            val = 1;
        } else if (option.value == "car" && option.selected){
            val = "car";
        } 
    });
    chooseCar(val);
});

