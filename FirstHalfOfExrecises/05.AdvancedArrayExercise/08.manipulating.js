function manipulation(arrayNumbers, arrayCommands) {
  let newArr = [];
  for (let i = 0; i < arrayCommands.length; i++) {
    let [command, index, number] = arrayCommands[i].split(" ");
    switch (command) {
      case "add":
        //  •	add <index> <element>
        arrayNumbers.splice(index, 0, Number(number));
        break;
      case "addMany":
        let splittedAddMany = arrayCommands[i].split(" ");

        for (let i = 2; i < splittedAddMany.length; i++) {
          let element = splittedAddMany[i];
          arrayNumbers.splice(index, 0, Number(element));
          index++;
        }
        break;
      case "contains":
        let containsOrNot = arrayNumbers.indexOf(Number(index));
        if (containsOrNot >= 0) {
          console.log(arrayNumbers.indexOf(Number(index)));
        } else {
          console.log("-1");
        }

        break;
      case "remove":
        arrayNumbers.splice(index, 1);

        break;
      case "shift":
        for (let i = 0; i < index; i++) {
          let shifted = arrayNumbers.shift();
          arrayNumbers.push(shifted);
        }
        break;
      case "sumPairs":
        for (let i = 0; i < arrayNumbers.length; i += 2) {
          let element = arrayNumbers[i];
          let element2 = arrayNumbers[i + 1];

          if (arrayNumbers.length % 2 == 0) {
            newArr.splice(i, 1, element + element2);
          } else if (arrayNumbers.length % 2 != 0) {
            if (i < arrayNumbers.length - 1) {
              newArr.splice(i, 1, element + element2);
            } else {
              newArr.splice(i, 1, element);
            }
          }
        }
        arrayNumbers = newArr;
        newArr = [];
        break;
      case "print":
        console.log(`[ ${arrayNumbers.join(", ")} ]`);
        break;
    }
  }
}

manipulation(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
