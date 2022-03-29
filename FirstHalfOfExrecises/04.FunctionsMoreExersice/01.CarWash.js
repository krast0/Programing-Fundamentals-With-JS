<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])