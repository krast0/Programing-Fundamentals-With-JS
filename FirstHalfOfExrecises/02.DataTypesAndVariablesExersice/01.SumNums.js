function sumDigits(number) {
  let strNumber = String(number);
    let sum = 0
  for (let i = 0; i < strNumber.length; i++) { 

    sum += Number(strNumber[i])

  }
  console.log(sum);
}
sumDigits(542);
