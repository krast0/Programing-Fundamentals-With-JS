function movingTargets(array) {
  let targets = array.shift().split(" ").map(Number);
  while (array[0] !== "End") {
    let [command, index, value] = array.shift().split(" ");

    switch (command) {
      case "Shoot":
        if (targets.length > Number(index)) {
          targets[index] -= Number(value);
          if (targets[index] <= 0) {
            targets.splice(Number(index), 1);
          }
        }
        break;

      case "Strike":
        if (Number(index) - Number(value) >= 0 && Number(index) + Number(value) <= targets.length - 1) {

             targets.splice(
            Number(index) - Number(value ) ,
            Number(value) * 2 + 1
            );
        } else {
          console.log("Strike missed!");

        }

        break;
      case "Add":
        if (targets.length >= Number(index) && Number(index) >= 0) {
          targets.splice(Number(index), 0, Number(value));
        } else {
          console.log("Invalid placement!");
        }
        break;
    }
    
  }
  
  console.log(targets.join("|"));
}

movingTargets(["1 2 22 4 5 6 7 8 9 10 11 12", "Strike 3 1","End"]);
console.log('---');
// movingTargets(["52 74 23 44 96 110",
// "Shoot 5 10",
// "Shoot 1 80",
// "Strike 2 1",
// "Add 22 3",
// "End"])
// console.log('----');
// movingTargets(["1 2 3 4 5",
// "Strike 0 1",
// "End"])
