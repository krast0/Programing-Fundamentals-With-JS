<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
triangleOfNumbers(20)