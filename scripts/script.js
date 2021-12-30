const squareBody = document.querySelector(".square-body");

// console.log();

squareBody.addEventListener('click', (e) => {
    console.log();
    if (e.target.matches(".arrow")){
        console.log("arrow");
    }
});