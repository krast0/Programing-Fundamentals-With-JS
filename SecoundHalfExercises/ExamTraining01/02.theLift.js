function theLift(array) {
  let newArr = [];
  let people = Number(array.shift());
  let elevators = array.shift().split(" ").map(Number);
  let hasEmpty;
  for (let i = 0; i < elevators.length; i++) {
    let elevator = elevators[i];

    if ((elevator < 4) & (people > 0)) {
      let emptySpace = 4 - elevator;
      if (people < 4) {
        elevators[i] += people;
      } else {
        elevators[i] += emptySpace;
      }

      people -= emptySpace;
    }
  }
  let filtered = elevators.filter((x) => x == 4);
  if (people === 0) {
    console.log(elevators.join(" "));
  } else if (elevators[elevators.length - 1] !== 4) {
    console.log(`The lift has empty spots!
${elevators.join(" ")}`);
  } else {
    console.log(`There isn't enough space! ${people} people in a queue!
${elevators.join(" ")}`);
  }
}


   
theLift([
    "20",
    "0 2 0"
   ]
   )
