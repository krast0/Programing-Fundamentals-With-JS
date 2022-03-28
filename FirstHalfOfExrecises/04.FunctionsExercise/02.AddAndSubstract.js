function addAndSubstracts(n1, n2, n3) {

let sumFunction = (number1,number2) => number1 + number2

let substractFunction = (sumResult,number3) => sumResult - number3
let sum = sumFunction(n1,n2)
let result = substractFunction(sum, n3)
console.log(result);

}
addAndSubstracts(23, 6, 10);
