<<<<<<< HEAD
function manOWar(array) {
  let pirateShip = array.shift().split(">").map(Number);
  let warship = array.shift().split(">").map(Number);

  let maximumHealthCapacity = array.shift();
  let index = 0;
  let isSunken = false;
  let enemySunken = false;
  let result = "";
  while (array[index] !== "Retire") {
    let action = array[index].split(" ");
    let command = action[0];
    switch (command) {
      case "Fire":
        let index = Number(action[1]);
        let damage = Number(action[2]);
        if (warship.length > index && index >= 0) {
          warship[index] -= damage;
          if (warship[index] <= 0) {
            enemySunken = true;
            console.log("You won! The enemy ship has sunken."); /////////////////////
            return;
          }
        }

        break;
      case "Defend":
        let startIndex = Number(action[1]);
        let endIndex = Number(action[2]);
        let damageDefend = Number(action[3]);
        if (
          startIndex >= 0 &&
          startIndex < pirateShip.length &&
          endIndex >= 0 &&
          endIndex < pirateShip.length
        ) {
          for (let i = startIndex; i <= endIndex; i++) {
            pirateShip[i] -= damageDefend;
            if (pirateShip[i] <= 0) {
              isSunken = true;
              console.log("You lost! The pirate ship has sunken."); //////////////////
              return;
            }
          }
        }
        break;
      case "Repair":
        let indexRepair = Number(action[1]);
        let health = Number(action[2]);
        if (indexRepair < pirateShip.length && indexRepair >= 0) {
          pirateShip[indexRepair] += health;
          if (pirateShip[indexRepair] > Number(maximumHealthCapacity)) {
            pirateShip[indexRepair] = Number(maximumHealthCapacity);
          }
        }
        break;
      case "Status":
        let countRepair = 0; /////////////////////////////
        for (const el of pirateShip) {
          let percentige = maximumHealthCapacity * 0.2;
          if (el < percentige) {
            countRepair++;
          }
        }
        console.log(`${countRepair} sections need repair.`);
        break;
    }
    index++;
  }

  let sumOfPirateShip = 0;
  for (const el of pirateShip) {
    sumOfPirateShip += el;
  }
  let sumOfWarShip = 0;
  for (const iterator of warship) {
    sumOfWarShip += iterator;
  }

  if (!enemySunken && !isSunken) {
    console.log(`Pirate ship status: ${sumOfPirateShip}
  Warship status: ${sumOfWarShip}`);
  }
}

// manOWar([
//   "12>13>11>20>66",
//   "12>22>33>44>55>32>18",
//   "70",
//   "Fire 2 11",
//   "Fire 8 100",
//   "Defend 3 6 11",
//   "Defend 0 3 5",
//   "Repair 1 33",
//   "Status",
//   "Retire",
// ]);

manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
=======
function manOWar(array) {
  let pirateShip = array.shift().split(">").map(Number);
  let warship = array.shift().split(">").map(Number);

  let maximumHealthCapacity = array.shift();
  let index = 0;
  let isSunken = false;
  let enemySunken = false;
  let result = "";
  while (array[index] !== "Retire") {
    let action = array[index].split(" ");
    let command = action[0];
    switch (command) {
      case "Fire":
        let index = Number(action[1]);
        let damage = Number(action[2]);
        if (warship.length > index && index >= 0) {
          warship[index] -= damage;
          if (warship[index] <= 0) {
            enemySunken = true;
            console.log("You won! The enemy ship has sunken."); /////////////////////
            return;
          }
        }

        break;
      case "Defend":
        let startIndex = Number(action[1]);
        let endIndex = Number(action[2]);
        let damageDefend = Number(action[3]);
        if (
          startIndex >= 0 &&
          startIndex < pirateShip.length &&
          endIndex >= 0 &&
          endIndex < pirateShip.length
        ) {
          for (let i = startIndex; i <= endIndex; i++) {
            pirateShip[i] -= damageDefend;
            if (pirateShip[i] <= 0) {
              isSunken = true;
              console.log("You lost! The pirate ship has sunken."); //////////////////
              return;
            }
          }
        }
        break;
      case "Repair":
        let indexRepair = Number(action[1]);
        let health = Number(action[2]);
        if (indexRepair < pirateShip.length && indexRepair >= 0) {
          pirateShip[indexRepair] += health;
          if (pirateShip[indexRepair] > Number(maximumHealthCapacity)) {
            pirateShip[indexRepair] = Number(maximumHealthCapacity);
          }
        }
        break;
      case "Status":
        let countRepair = 0; /////////////////////////////
        for (const el of pirateShip) {
          let percentige = maximumHealthCapacity * 0.2;
          if (el < percentige) {
            countRepair++;
          }
        }
        console.log(`${countRepair} sections need repair.`);
        break;
    }
    index++;
  }

  let sumOfPirateShip = 0;
  for (const el of pirateShip) {
    sumOfPirateShip += el;
  }
  let sumOfWarShip = 0;
  for (const iterator of warship) {
    sumOfWarShip += iterator;
  }

  if (!enemySunken && !isSunken) {
    console.log(`Pirate ship status: ${sumOfPirateShip}
  Warship status: ${sumOfWarShip}`);
  }
}

// manOWar([
//   "12>13>11>20>66",
//   "12>22>33>44>55>32>18",
//   "70",
//   "Fire 2 11",
//   "Fire 8 100",
//   "Defend 3 6 11",
//   "Defend 0 3 5",
//   "Repair 1 33",
//   "Status",
//   "Retire",
// ]);

manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
