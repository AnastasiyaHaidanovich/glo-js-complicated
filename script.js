// первое задание
let arr = ["2385","5623","653592","23","56663","6955","413"];
for (let i=0; i < arr.length; i++) {
    let elem = arr[i];
    if (elem.startsWith("2") || elem.startsWith("4")) {
        console.log(elem);
    }
}

// второе задание
nextIteration:
    for (let i = 2; i <= 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue nextIteration;
            }
        }
        console.log(i);
    }

