function adAstra(input) {
  let regex =
    /(#|\|)(?<item>[A-Za-z\s]+)\1(?<expiration>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
  let food = regex.exec(input);
  let array = []
  let sumOfCalories = 0;
  while (food != null) {
    array.push(
      `Item: ${food.groups.item}, Best before: ${food.groups.expiration}, Nutrition: ${food.groups.calories}`
    );
    sumOfCalories += Number(food.groups.calories);
    food = regex.exec(input);
  }

  let result = Math.floor(Number(sumOfCalories) / 2000);
  console.log(`You have food to last you for: ${result} days!`);
  if(!array.length <= 0){
  console.log(array.join("\n"));
  }

  
}

adAstra([ '$$#@@%^&#Fish#24/312/20#8500#|#Inco|Maten pipi|26/10/78|10000|rrect#19.03.20#450|$5*(@!#Ice Crea42m#03/10/21#9000#^#@aswe|Milk|05/033/20|2000|' ])
    
