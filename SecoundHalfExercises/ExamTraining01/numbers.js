function numbers(listOfNumbers) {
  let sum = 0;
  let avarage = 0;
  let biggerThanAvarageArr = [];
  //make array of numbers
  let newArr = listOfNumbers.split(" ");
  //find the avarage in all numbers
  for (let i = 0; i < newArr.length; i++) {
    sum += Number(newArr[i]);
  }
  avarage = sum / newArr.length;

  //make array with numbers bigger than avarage
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > avarage) {
      biggerThanAvarageArr.push(newArr[i]);
    }
  }
  //print top 5 biggest numbers from array
  let topValues = biggerThanAvarageArr.sort((a, b) => b - a).slice(0, 5);
  if (topValues.length < 1 || avarage >= topValues[0]) {
    console.log("No");
  } else {
    console.log(topValues.join(" "));
  }
}
numbers("10 20 30 40 50");
console.log("---");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
console.log("----");
numbers("-1 -2 -3 -4 -5 -6");
console.log("---");
numbers("20 ");
