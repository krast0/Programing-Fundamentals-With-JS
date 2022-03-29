function inventory(array) {
  let itemsInInventory = array.shift().split(", ");
  let index = 0;
  while (array[index] !== "Craft!") {
    let [command, item] = array[index].split(" - ");
    switch (command) {
      case "Collect":
        if (!itemsInInventory.includes(item)) {
          itemsInInventory.push(item);
        }
        break;
      case "Drop":
        if (itemsInInventory.includes(item)) {
            itemsInInventory.splice(itemsInInventory.indexOf(item), 1);
        }
        break;
      case "Combine Items":
        let [oldItem,newItem] = item.split(':')
        if(itemsInInventory.includes(oldItem)){
            itemsInInventory.splice(itemsInInventory.indexOf(oldItem) + 1,0,newItem)
        }
        break;
        case "Renew":
        if(itemsInInventory.includes(item)){
            itemsInInventory.splice(itemsInInventory.indexOf(item),1)
            itemsInInventory.splice(itemsInInventory.length,0,item)
        }
        break;
    }
    index++;
  }
  console.log(itemsInInventory.join(', '));
}
inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
console.log('---');
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )
