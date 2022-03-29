<<<<<<< HEAD
function shootForTheWin(array) {
  let shottedTargets = 0
  let targets = array.shift().split(" ").map(Number);
  let index = 0;
  while (array[index] !== "End") {
    let shot = Number(array[index]);
    if (targets.length > shot) {
      let currentTarget = targets[shot]
      for (let i = 0; i < targets.length; i++) {

        if(targets[i] != -1){
          if (targets[i] > currentTarget) {
            targets[i] -= currentTarget;
          }else{ 
                     targets[i] += currentTarget;
          }
        }
      }
      targets[shot] = -1
shottedTargets++
    }
    index++;
  }
console.log(`Shot targets: ${shottedTargets} -> ${targets.join(' ')}`);
}
//shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
console.log('---');
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

=======
function shootForTheWin(array) {
  let shottedTargets = 0
  let targets = array.shift().split(" ").map(Number);
  let index = 0;
  while (array[index] !== "End") {
    let shot = Number(array[index]);
    if (targets.length > shot) {
      let currentTarget = targets[shot]
      for (let i = 0; i < targets.length; i++) {

        if(targets[i] != -1){
          if (targets[i] > currentTarget) {
            targets[i] -= currentTarget;
          }else{ 
                     targets[i] += currentTarget;
          }
        }
      }
      targets[shot] = -1
shottedTargets++
    }
    index++;
  }
console.log(`Shot targets: ${shottedTargets} -> ${targets.join(' ')}`);
}
//shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
console.log('---');
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
