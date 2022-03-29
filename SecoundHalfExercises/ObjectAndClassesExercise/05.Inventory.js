function inventory(array) {
    let heroes = [];
  for (const element of array) {

    let splitted = element.split(" / ");
    let name = splitted[0];
    let level = Number(splitted[1]);
    let items = splitted[2];
    let hero = {
      name: name,
      level: level,
      items: items,
    };
    heroes.push(hero)
  }
    heroes.sort((a,b) => a.level - b.level)
    for (const element of heroes) {
console.log(`Hero: ${element.name}\nlevel => ${element.level}\nitems => ${element.items}`)
    }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
