function Pirates(input) {
  let obj = {};
  while (input[0] != "Sail") {
    let tokens = input.shift().split("||");
    let cityForPlunder = tokens[0];
    let population = Number(tokens[1]);
    let gold = Number(tokens[2]);
    if (!obj.hasOwnProperty(cityForPlunder)) {
      obj[cityForPlunder] = { population, gold };
    } else {
      obj[cityForPlunder].population += population;
      obj[cityForPlunder].gold += gold;
    }
  }
  let trash = input.shift(); // i do this to remove 'Sail'!

  while (input[0] != "End") {
    let tokens = input.shift().split("=>");
    let command = tokens[0];
    let town = tokens[1];
    let populationOfTown = Number(tokens[2]);
    let goldInTown = Number(tokens[3]);

    if (command == "Plunder") {
      obj[town].population -= populationOfTown;
      obj[town].gold -= goldInTown;
      console.log(
        `${town} plundered! ${goldInTown} gold stolen, ${populationOfTown} citizens killed.`
      );
      if (obj[town].population <= 0 || obj[town].gold <= 0) {
        delete obj[town];
        console.log(`${town} has been wiped off the map!`);
      }
    } else if (command == "Prosper") {
      if (populationOfTown < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        obj[town].gold += populationOfTown;
        console.log(
          `${populationOfTown} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`
        );
      }
    }
  }
  let arrayOfObj = Object.entries(obj);
  if (arrayOfObj[0].length == 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${arrayOfObj.length} wealthy settlements to go to:`
    );
    for (const line of arrayOfObj) {
      console.log(
        `${line[0]} -> Population: ${obj[line[0]].population} citizens, Gold: ${
          obj[line[0]].gold
        } kg`
      );
    }
  }
}

// Pirates((["Tortuga||345000||1250",
// "Santo Domingo||240000||630",
// "Havana||410000||1100",
// "Sail",
// "Plunder=>Tortuga=>75000=>380",
// "Prosper=>Santo Domingo=>180",
// "End"])
// )
Pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

