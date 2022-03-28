function houseParty(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let splittedElement = element.split(" ");
    if (!splittedElement.includes("not")) {
      if (newArr.includes(splittedElement[0])) {
        console.log(`${splittedElement[0]} is already in the list!`);
      } else {
        newArr.push(splittedElement[0]);
      }
    } else {
        if(newArr.includes(splittedElement[0])){
            newArr.splice(newArr.indexOf(splittedElement[0]),1)
        }else{
            console.log(`${splittedElement[0]} is not in the list!`);;
        }
    }
  }
  console.log(newArr.join('\n'));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
