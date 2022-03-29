<<<<<<< HEAD
function manipulating(array) {
  let arrayOfStrings = array
    .shift()
    .split(" ")
    .map((x) => Number(x));

  function add(el) {
    arrayOfStrings.push(el);
  }
  function remove(num) {
    arrayOfStrings = arrayOfStrings.filter((el) => el !== num);
  }
  function removeAt(index) {
    arrayOfStrings.splice(index, 1);
  }
  function insert(num, index) {
    arrayOfStrings.splice(index, 0, num);
  }

  for (let i = 0; i < array.length; i++) {
    let [command, firstNum, secondNum] = array[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    

    switch (command) {
      case "Add":
        add(firstNum);
        break;
      case "Remove":
        remove(firstNum);
        break;
      case "RemoveAt":
        removeAt(firstNum);
        break;
      case "Insert":
        insert(firstNum, secondNum);
        break;
    }
  }
  console.log(arrayOfStrings.join(" "));
}
manipulating([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
console.log("-----");
manipulating([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
=======
function manipulating(array) {
  let arrayOfStrings = array
    .shift()
    .split(" ")
    .map((x) => Number(x));

  function add(el) {
    arrayOfStrings.push(el);
  }
  function remove(num) {
    arrayOfStrings = arrayOfStrings.filter((el) => el !== num);
  }
  function removeAt(index) {
    arrayOfStrings.splice(index, 1);
  }
  function insert(num, index) {
    arrayOfStrings.splice(index, 0, num);
  }

  for (let i = 0; i < array.length; i++) {
    let [command, firstNum, secondNum] = array[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    

    switch (command) {
      case "Add":
        add(firstNum);
        break;
      case "Remove":
        remove(firstNum);
        break;
      case "RemoveAt":
        removeAt(firstNum);
        break;
      case "Insert":
        insert(firstNum, secondNum);
        break;
    }
  }
  console.log(arrayOfStrings.join(" "));
}
manipulating([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
console.log("-----");
manipulating([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
