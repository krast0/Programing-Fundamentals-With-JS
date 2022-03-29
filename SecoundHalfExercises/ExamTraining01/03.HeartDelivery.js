function HeartDelivery(array) {
  let neighborhood = array.shift().split("@").map(Number);
  let index = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let [command, lengthOfJump] = array[i].split(" ");

    if (command === "Jump") {
      index += Number(lengthOfJump);
      if (index >= neighborhood.length) {
        index = 0;
      }
      if (neighborhood[index] > -2) {
        neighborhood[index] -= 2;
      } else {
        neighborhood[index] = -2;
      }

      if (neighborhood[index] === 0) {
        console.log(`Place ${neighborhood.indexOf(0)} has Valentine's day.`);
        neighborhood[index] = -2;
        count++;
      } else if (neighborhood[index] < 0) {
        neighborhood[index] = -2;
        console.log(
          `Place ${neighborhood.indexOf(-2)} already had Valentine's day.`
        );
      }
    }

    if (command === "Love!") {
      console.log(`Cupid's last position was ${index}.`);
      if (count === neighborhood.length || neighborhood.reduce((a,b) => a + b == 0)) {
        console.log("Mission was successful.");
      } else {
        console.log(`Cupid has failed ${neighborhood.length - count} places.`);
      }
      break;
    }
  }
}

console.log("---");
HeartDelivery([
  "0@0@0",
  "Love!",
]);
