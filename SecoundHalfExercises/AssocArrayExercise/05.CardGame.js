function cardGame(input) {
  //make two object for the power and type of the cards
  let powers = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let types = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  let cards = {};
  //make an object with key value pairs name - cards
  let deck = [];
  //parse input ,split on ':'
  for (const line of input) {
    let tokens = line.split(": ");
    let name = tokens[0];
    let cardsOfPerson = tokens[1].split(", ");

    if (!cards.hasOwnProperty(name)) {
      //if player has two cards who are the same power and type discard it
      cards[name] = new Set();
    }

    for (let card of cardsOfPerson) {
      cards[name].add(card);
    }
  }

  for (let [name, cardsOfDeck] of Object.entries(cards)) {
    let sum = 0;
    //sum the points of all cards
    let powerandtypeSum = 0;
    for (const card of cardsOfDeck) {
      if (card.length > 2 == false) {
        let [power, type] = card.split("");
        powerandtypeSum = powers[power] * types[type];
      } else {
        let [undefined, power, type] = card.split("");
        powerandtypeSum = powers[power] * types[type];
      }
      sum += powerandtypeSum;
    }

    //sum the points of all cards

    console.log(`${name}: ${sum}`);
    //print result
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
