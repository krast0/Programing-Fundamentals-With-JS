function picollo(input) {
  let parking = {}
  //parse input
  for (const car of input) {
    let [direction, numberOfCar] = car.split(", ");
    if (direction == "IN") {
        if(!parking.hasOwnProperty(numberOfCar)){
      parking[numberOfCar] = 0
        }
    } else {
      delete parking[numberOfCar]
    }

  }
//   console.log(parking);
let asArray = Object.keys(parking).sort()

  if (asArray.length == 0) {
    console.log("Parking Lot is Empty");
  } else {

    for (const car of asArray) {
      console.log(car);
    }
  }
}
picollo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
