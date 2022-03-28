function gladiatorInventory(array) {
  let splittedArray = array.shift().split(" ");

  for (let i = 0; i < array.length; i++) {
    let element = array[i].split(" ");
    let command = element[0];
    let equipment = element[1];
    switch (command) {
      case "Buy":
        if (!splittedArray.includes(equipment)) {
          splittedArray.push(equipment);
        }
        break;
      case "Trash":
        if (splittedArray.includes(equipment)) {
          splittedArray.splice(i, 1);
        }
        break;
      case "Repair":
        if (splittedArray.includes(equipment)){
            let indexOfeq = splittedArray.indexOf(equipment)
            splittedArray.splice(indexOfeq,1)
            splittedArray.push(equipment)

        }
        break;
        case 'Upgrade':
            let splittedeq = equipment.split('-')
            if(splittedArray.includes(splittedeq[0])){
                let indexOfeq = splittedArray.indexOf(splittedeq[0])
                splittedArray.splice(indexOfeq + 1,0,splittedeq.join(':'))
            }
            break;
    }
  }
  console.log(splittedArray.join(' '));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);

