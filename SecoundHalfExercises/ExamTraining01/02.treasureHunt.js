function treasureHunt(array) {
  let sliced = [];
  let treasureItems = array.shift().split("|");
  let index = 0;
  let stealed = []
  let sum = 0
  while (array[index] !== "Yohoho!") {
    stealed = []
    let [command, value] = array[index].split(" ");
    switch (command) {
      case "Loot":
        sliced = array[index].split(" ").slice(1, array[index].length);
        for (let i = 0; i < sliced.length; i++) {
          let currentitem = sliced[i];
          if (!treasureItems.includes(currentitem)) {
            treasureItems.unshift(currentitem);
          }
        }
        break;
      case "Drop":
          if(value < 0 || value >= treasureItems.length){
              break;
          }
          let currentItem = treasureItems[value]
          treasureItems.splice(value,1)
          treasureItems.push(currentItem)
        break;
        case 'Steal':
            stealed = treasureItems.slice(-value,treasureItems.length)
            treasureItems.splice(-value,value)
            console.log(stealed.join(', '));
            break;
    }
    index++;
  }
  let countOfItems = 0
  for (const el of treasureItems) {
      let lengthOfTreasure = el.length
      sum += lengthOfTreasure
    countOfItems++
  }
  let avgTreasureGain = sum / countOfItems
  if(treasureItems.length >= 1){
  console.log(`Average treasure gain: ${avgTreasureGain.toFixed(2)} pirate credits.`);
  }else{
    console.log("Failed treasure hunt.")
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
console.log('---');
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

