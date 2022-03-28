function counterStrike(array) {
  let energy = Number(array.shift());
  let count = 0;
  let wonBattles = 0;
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === "End of battle") {
      return `Won battles: ${wonBattles}. Energy left: ${energy}`;
    }
    let distance = array[i];

    if (energy >= distance) {
      wonBattles++;
      energy -= distance;
      if (count % 3 === 0) {
        energy += count;
      }
    }else{
        return `Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`;
    }

    
  }
}
console.log(counterStrike(["200", "54", "14", "28", "13", "End of battle"]));
