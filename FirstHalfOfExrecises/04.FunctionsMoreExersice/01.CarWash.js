function carWash(array) {
    let value = 0
    for (let i = 0; i < array.length ; i++) {
        let element = array[i];
        if (element === 'soap') {
            value += 10
        }else if(element === 'vacuum cleaner'){
            value *= 1.25
        }else if(element === 'water'){
            value *= 1.20
        }else if(element === 'mud'){
            value *= 0.90
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])