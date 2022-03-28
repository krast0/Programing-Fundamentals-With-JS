function plantDiscovery(input) {
  let plantBook = {};
  let numberOfPlants = Number(input.shift());
  for (let i = 0; i < numberOfPlants; i++) {
    const element = input.shift();
    let [plant, rarity] = element.split("<->");
    if (plantBook.hasOwnProperty(plant) == false) {
      plantBook[plant] = {};
    }
    plantBook[plant]["Rarity"] = rarity;
  }
  while (input[0] != "Exhibition") {
    let tokens = input.shift().split(": ");
    let command = tokens[0];
    let [plant, p1] = tokens[1].split(" - ");
    if (command == "Rate") {
      if (plantBook.hasOwnProperty(plant) == false) {
        console.log("error");
      } else {
        if (plantBook[plant].hasOwnProperty("Rating") == false) {
          plantBook[plant]["Rating"] = [];
        }
        plantBook[plant]["Rating"].push(p1);
      }
    } else if (command == "Update") {
      if (plantBook.hasOwnProperty(plant) == false) {
        console.log("error");
      } else {
        plantBook[plant]["Rarity"] = p1;
      }
    } else if (command == "Reset") {
      if (plantBook.hasOwnProperty(plant) == false) {
        console.log("error");
      } else {
        plantBook[plant]["Rating"] = [];
      }
    }
  }
  let obj = Object.entries(plantBook);
  let index = 0;
  console.log("Plants for the exhibition:");
  for (const key in plantBook) {
    let arrayOfRatings = obj[index][1]["Rating"];
    let sum = 0;
    let count = 0;
  if(arrayOfRatings == undefined){
      arrayOfRatings = []
  }
    for (const line of arrayOfRatings) {
      sum += Number(line);
      count++;
    }

    if (sum != 0) {
      sum = sum / count;
    }else{
        sum = 0
    }

    index++;
    console.log(
      `- ${key}; Rarity: ${plantBook[key]["Rarity"]}; Rating: ${sum.toFixed(2)}`
    );
  }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

// plantDiscovery([
//   "2",
//   "Candelabra<->10",
//   "Oahu<->10",
//   "Rate: Oahu - 7",
//   "Rate: Candelabra - 6",
//   "Exhibition",
// ]);
