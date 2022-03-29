<<<<<<< HEAD
function memoryGame(array) {
  let elements = array.shift().split(" ");

  let moves = 0;
  for (let i = 0; i < array.length; i++) {
    if (elements.length === 0) {
      console.log(`You have won in ${moves} turns!`);
      break;
    }
    if (array[i] == "end") {
      if (elements.length === 0) {
        console.log(`You have won in ${moves} turns!`);
        break;
      } else {
        console.log(`Sorry you lose :(
${elements.join(" ")}`);
        break;
      }
    }
    let [index1, index2] = array[i].split(" ");

    if (
      index1 != index2 &&
      index1 < elements.length &&
      index2 < elements.length &&
      index1 >= 0 &&
      index2 >= 0
    ) {
      moves++;
      let element1 = elements[index1];
      let element2 = elements[index2];
      if (element1 == element2) {
        console.log(
          `Congrats! You have found matching elements - ${element1}!`
        );
       elements.splice(elements.indexOf(element1),1)
       elements.splice(elements.indexOf(element2),1)
      } else {
        console.log("Try again!");
      }
    } else {
      moves++;
      elements.splice(elements.length / 2, 0, `-${moves}a`);
      elements.splice(elements.length / 2, 0, `-${moves}a`);
      console.log("Invalid input! Adding additional elements to the board");
    }
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0",'1 0',"end"]);
//memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
=======
function memoryGame(array) {
  let elements = array.shift().split(" ");

  let moves = 0;
  for (let i = 0; i < array.length; i++) {
    if (elements.length === 0) {
      console.log(`You have won in ${moves} turns!`);
      break;
    }
    if (array[i] == "end") {
      if (elements.length === 0) {
        console.log(`You have won in ${moves} turns!`);
        break;
      } else {
        console.log(`Sorry you lose :(
${elements.join(" ")}`);
        break;
      }
    }
    let [index1, index2] = array[i].split(" ");

    if (
      index1 != index2 &&
      index1 < elements.length &&
      index2 < elements.length &&
      index1 >= 0 &&
      index2 >= 0
    ) {
      moves++;
      let element1 = elements[index1];
      let element2 = elements[index2];
      if (element1 == element2) {
        console.log(
          `Congrats! You have found matching elements - ${element1}!`
        );
       elements.splice(elements.indexOf(element1),1)
       elements.splice(elements.indexOf(element2),1)
      } else {
        console.log("Try again!");
      }
    } else {
      moves++;
      elements.splice(elements.length / 2, 0, `-${moves}a`);
      elements.splice(elements.length / 2, 0, `-${moves}a`);
      console.log("Invalid input! Adding additional elements to the board");
    }
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0",'1 0',"end"]);
//memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
