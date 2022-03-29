<<<<<<< HEAD
function sumOfOddNumbers(n) {
  let sum = 0;
  let counter = 0;

  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
    counter++;
    sum += i;
    if (counter >= n) {
      console.log("Sum: "+sum);
      break;
    }
  }
}

sumOfOddNumbers(3);
=======
function sumOfOddNumbers(n) {
  let sum = 0;
  let counter = 0;

  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
    counter++;
    sum += i;
    if (counter >= n) {
      console.log("Sum: "+sum);
      break;
    }
  }
}

sumOfOddNumbers(3);
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
