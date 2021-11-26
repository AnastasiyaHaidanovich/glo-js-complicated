let num = 266219;
num = num.toString();
let result = 1;
for (let i=0; i<num.length; i++){
result*=num[i];
}
result**=3;
console.log(result.toString().substring(0,2));