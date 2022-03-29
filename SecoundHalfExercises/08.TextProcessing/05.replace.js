<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
replace('hhhhheeeeeddteeeecccc')