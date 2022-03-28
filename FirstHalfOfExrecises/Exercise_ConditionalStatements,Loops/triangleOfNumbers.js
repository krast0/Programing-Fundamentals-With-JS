function triangleOfNumbers(n){
  let str = " ";
  if (n <= 20) {
    for (let i = 1; i <= n; i++) {
      str = " ";
      for (let k = 1; k <= i; k++) {
        str += i + " ";
      }
      console.log(str);
    }
  }
}
triangleOfNumbers(20)