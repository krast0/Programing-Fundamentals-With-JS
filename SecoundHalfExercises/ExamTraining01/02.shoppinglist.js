function shoppingList(array) {
  let list = array.shift().split("!");
  //console.log(list);
  for (let i = 0; i < array.length; i++) {
    let [command, product, newName] = array[i].split(" ");
    if (command === "Urgent") {
      if (!list.includes(product)) {
        list.unshift(product);
      }
    } else if (command === "Unnecessary") {
      if (list.includes(product)) {
        list.splice(list.indexOf(product), 1);
      }
    } else if (command === "Correct") {
      if (list.includes(product)) {
        list.splice(list.indexOf(product), 1, newName);
      }
    } else if (command === "Rearrange") {
      if (list.includes(product)) {
        let slicedelement = list.splice(list.indexOf(product),1)
        list.push(slicedelement);
      }
    } else if (command === "Go") {
      console.log(list.join(", "));
      break;
    }
  }
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
console.log("---");
shoppingList([
  "Milk!Pepper!Salt!Grapes!Banana",
  "Urgent Salt",
  "Unnecessary maca",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
