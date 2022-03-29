<<<<<<< HEAD
//	Every second lost game, his helmet is broken.
//	Every third lost game, his sword is broken.
//	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
////	Every second time, when his shield brakes, his armor also needs to be repaired.
//
//function gladiatorExpenses(
//  lostFights,
//  helmetPrice,
//  swordPrice,
//  shieldPrice,
//  armorPrice
//) {
//  let sum = 0;
//  let shieldCounter = 0;
//
//  for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
//    if (currentFight % 2 === 0) {
//      sum += helmetPrice;
//    }
//    if (currentFight % 3 === 0) {
//      sum += swordPrice;
//    }
//    if (currentFight % 6 === 0) {
//      sum += shieldPrice;
//    }
//    if (currentFight % 12 === 0) {
//      sum += armorPrice;
//    }
//  }
//  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
//}

function gladiatorExpenses(
    lostFights,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice
  ) {
    let sum = 0;
    let shieldCounter = 0;
  
    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
      if (currentFight % 2 === 0) {
        sum += helmetPrice;
      }
      if (currentFight % 3 === 0) {
        sum += swordPrice;
      }
      if (currentFight % 3 === 0 && currentFight % 2 === 0) {
        sum += shieldPrice;
        shieldCounter++
        if (shieldCounter % 2 === 0) {
            sum += armorPrice;
          }
      }

    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
  }
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
=======
//	Every second lost game, his helmet is broken.
//	Every third lost game, his sword is broken.
//	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
////	Every second time, when his shield brakes, his armor also needs to be repaired.
//
//function gladiatorExpenses(
//  lostFights,
//  helmetPrice,
//  swordPrice,
//  shieldPrice,
//  armorPrice
//) {
//  let sum = 0;
//  let shieldCounter = 0;
//
//  for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
//    if (currentFight % 2 === 0) {
//      sum += helmetPrice;
//    }
//    if (currentFight % 3 === 0) {
//      sum += swordPrice;
//    }
//    if (currentFight % 6 === 0) {
//      sum += shieldPrice;
//    }
//    if (currentFight % 12 === 0) {
//      sum += armorPrice;
//    }
//  }
//  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
//}

function gladiatorExpenses(
    lostFights,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice
  ) {
    let sum = 0;
    let shieldCounter = 0;
  
    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
      if (currentFight % 2 === 0) {
        sum += helmetPrice;
      }
      if (currentFight % 3 === 0) {
        sum += swordPrice;
      }
      if (currentFight % 3 === 0 && currentFight % 2 === 0) {
        sum += shieldPrice;
        shieldCounter++
        if (shieldCounter % 2 === 0) {
            sum += armorPrice;
          }
      }

    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
  }
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
