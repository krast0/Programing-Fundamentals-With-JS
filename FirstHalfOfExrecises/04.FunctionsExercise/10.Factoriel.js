function factoriel(number1,number2){
    let sum = 1
    let sum2 = 1
    let result = 0
    for (let i = number1; i > 0; i--) {
        sum *= i
        
    }
    for (let i = number2; i > 0; i--) {
        sum2 *= i
        
    }
    result = sum / sum2
    console.log(result.toFixed(2));
}
factoriel(5,2)
console.log('----');
factoriel(6,2)