function negativeAndPositive(array) {
    let newArr = []

    for (let el of array) {
        if(el < 0){
            newArr.unshift(el)
        }else{
            newArr.push(el)
        }
    }
    for (let index = 0; index < newArr.length; index++) {
        const element = newArr[index];
        console.log(element);
    }
}
negativeAndPositive(['7', '-2', '8', '9'])
console.log('----');
negativeAndPositive(['3', '-2', '0', '-1'])