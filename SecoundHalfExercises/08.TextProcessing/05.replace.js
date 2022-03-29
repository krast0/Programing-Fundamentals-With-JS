function replace(string) {
    let indexOfFirstChar = string[0]
    let newArr = []
for (let i = 0; i < string.length; i++) {
    let element = string[i];
    let nextElement = string[i + 1]
    if(element != nextElement){
        newArr.push(element)
    }
}
console.log(newArr.join(''));
    
}
replace('hhhhheeeeeddteeeecccc')