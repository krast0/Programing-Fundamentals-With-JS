<<<<<<< HEAD
function guineaPig(array) {
  let food = array[0];
  let hay = array[1];
  let cover = array[2];
  let weightOfPuppy = array[3];

  let weightOfPuppyInGrams = (weightOfPuppy * 1000) / 3;

  let hayInGrams = hay * 1000;
  let foodInGrams = food * 1000;
  let coverInGrams = cover * 1000;

  let hayInKilos = 0;
  let isEnoughFood = false;
  let isEnoughHay = false;
  let isEnoughCover = false;
  for (let i = 1; i <= 30; i++) {
    foodInGrams -= 300;
    if (i % 2 === 0) {
      let hayNeededForDay = foodInGrams * 0.05;
      hayInGrams -= hayNeededForDay;
      if (hayInGrams > 0) {
        hayInKilos = hayInGrams * 0.001;
        isEnoughHay = true
      } else {
        break;
      }
    }
    if (i % 3 === 0) {
      if (coverInGrams > 0) {
        coverInGrams -= weightOfPuppyInGrams;
        isEnoughCover = true;
      } else {
        break;
      }
    }
  }
  if(foodInGrams > 0){
      isEnoughFood = true
  }

  let foodInKilos = foodInGrams * 0.001;
  if (isEnoughCover && isEnoughFood && isEnoughHay) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${foodInKilos.toFixed(
        2
      )}, Hay: ${hayInKilos.toFixed(2)}, Cover: ${(
        coverInGrams * 0.001
      ).toFixed(2)}.`
    )
  }else{
      console.log(`Merry must go to the pet store!`);
  }
}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig
(["1", 
"1.5", 
"3", 
"1.5"
])
guineaPig(["9",
"5",
"5.2",
"1"])
=======
function guineaPig(array) {
  let food = array[0];
  let hay = array[1];
  let cover = array[2];
  let weightOfPuppy = array[3];

  let weightOfPuppyInGrams = (weightOfPuppy * 1000) / 3;

  let hayInGrams = hay * 1000;
  let foodInGrams = food * 1000;
  let coverInGrams = cover * 1000;

  let hayInKilos = 0;
  let isEnoughFood = false;
  let isEnoughHay = false;
  let isEnoughCover = false;
  for (let i = 1; i <= 30; i++) {
    foodInGrams -= 300;
    if (i % 2 === 0) {
      let hayNeededForDay = foodInGrams * 0.05;
      hayInGrams -= hayNeededForDay;
      if (hayInGrams > 0) {
        hayInKilos = hayInGrams * 0.001;
        isEnoughHay = true
      } else {
        break;
      }
    }
    if (i % 3 === 0) {
      if (coverInGrams > 0) {
        coverInGrams -= weightOfPuppyInGrams;
        isEnoughCover = true;
      } else {
        break;
      }
    }
  }
  if(foodInGrams > 0){
      isEnoughFood = true
  }

  let foodInKilos = foodInGrams * 0.001;
  if (isEnoughCover && isEnoughFood && isEnoughHay) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${foodInKilos.toFixed(
        2
      )}, Hay: ${hayInKilos.toFixed(2)}, Cover: ${(
        coverInGrams * 0.001
      ).toFixed(2)}.`
    )
  }else{
      console.log(`Merry must go to the pet store!`);
  }
}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig
(["1", 
"1.5", 
"3", 
"1.5"
])
guineaPig(["9",
"5",
"5.2",
"1"])
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
