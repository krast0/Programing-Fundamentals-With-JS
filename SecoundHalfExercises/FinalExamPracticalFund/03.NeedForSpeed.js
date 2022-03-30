function needForSpeed(input) {
  let numberOfCars = input.shift();

  let obj = {};
  for (let i = 0; i < numberOfCars; i++) {
    let tokens = input.shift().split("|");
    let car = tokens[0];
    let milage = Number(tokens[1]);
    let fuel = Number(tokens[2]);
    obj[car] = { milage, fuel };
  }
  while (input[0] != "Stop") {
    let tokens = input.shift().split(" : ");
    let command = tokens[0];
    let carName = tokens[1];
    let p1 = Number(tokens[2]);
    let p2 = Number(tokens[3]);
    if (command == "Drive") {
      let check = obj[carName].fuel - p2;
      if (check < 0) {
        console.log("Not enough fuel to make that ride");
      } else {
        obj[carName].milage += Number(p1);
        obj[carName].fuel -= Number(p2);
        console.log(
          `${carName} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`
        );
      }

      if (obj[carName].milage > 100000) {
        delete obj[carName];
        console.log(`Time to sell the ${carName}!`);
      }
    } else if (command == "Refuel") {
      let maximumCap = 75;
      obj[carName].fuel += p1;
      let filled = 0;
      if (obj[carName].fuel > maximumCap) {
        filled = obj[carName].fuel - maximumCap;
        let remaining = p1 - filled;
        obj[carName].fuel = maximumCap;
        console.log(`${carName} refueled with ${remaining} liters`);
      } else {
        console.log(`${carName} refueled with ${p1} liters`);
      }
    }else if(command == 'Revert'){
        obj[carName].milage -= p1
        if(obj[carName].milage < 10000){
            obj[carName].milage = 10000
        }else{
            console.log(`${carName} mileage decreased by ${p1} kilometers`);
        }
    }
  }
  for (const key in obj) {
console.log(`${key} -> Mileage: ${obj[key].milage} kms, Fuel in the tank: ${obj[key].fuel} lt.`);
  }

}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  );
