function worldTour(array) {
  let index = 0;
  let destinations = array.shift();
  while (array[index] != "Travel") {
    let command = array[index].split(":")[0];
    switch (command) {
      case "Add Stop":
        let [, indexOfStop, string] = array[index].split(":");
        if (
          destinations.length > Number(indexOfStop) &&
          Number(indexOfStop) >= 0
        ) {
          let str = destinations.slice(indexOfStop, destinations.length);
          let str2 = destinations.slice(0, indexOfStop);
          destinations = `${str2}${string}${str}`;
        }
        console.log(destinations);
        break;
      case "Remove Stop":
        let [, startIndex, endIndex] = array[index]
          .split(":")
          .map((x) => Number(x));

        if (
          destinations.length > startIndex &&
          destinations.length > endIndex &&
          startIndex >= 0 &&
          endIndex >= 0
        ) {
          let str1 = destinations.substring(0, startIndex);
          let str2 = destinations.substring(
            Number(endIndex) + 1,
            destinations.length
          );
          destinations = `${str1}${str2}`;
        }
        console.log(destinations);
        break;
      case "Switch":
        let [, oldString, newString] = array[index].split(":");
        if (destinations.includes(oldString)) {
          let re = new RegExp(oldString, "g");
          destinations = destinations.replace(re, newString);
        }
        console.log(destinations);
        break;
    }
    index++;
  }
  console.log(`Ready for world tour! Planned stops: ${destinations}`);
}
worldTour([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:-1:Nigeria",
  "Remove Stop:4:8",
  "Switch:Albania: Azərbaycan",
  "Travel",
]);
