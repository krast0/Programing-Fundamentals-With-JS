function maxNumber(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let checkNum = array[i];
   let isBigger = false
    for (let j = i + 1; j < array.length; j++) {
      let checkNum2 = array[j]
      if (checkNum <= checkNum2) {
        isBigger = true
        }
      }   
    if(isBigger == false){
      newArr.push(checkNum)
    }
  }
console.log(newArr.join(' '))
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);
console.log('---');
maxNumber([41, 41, 34, 20])
console.log('---');
maxNumber([14, 24, 3, 19, 15, 17])
console.log('---');
maxNumber([1, 4, 3, 2])