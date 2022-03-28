function thePyramidOfKingJoser(base, increment) {
  let count = 0;
  let gold = 0;
  let stone = 0;
  let stoneCount = 0;
  let marbleCount = 0;
  let lapisCount = 0;
  let height = 0;
  let basedeleno = base / 2

  for (let i = base ; i >= 1; i-=2) {
    let stairarea = (i - 2) * (i - 2);

    count++;
    if (count % 5 !== 0 ) {
      stone = stairarea * increment;
      let marble = (4 * i - 4) * increment;
      marbleCount += marble;
      stoneCount += stone;
    } else {
      let lapislazuli = (4 * i - 4) * increment;
      lapisCount += lapislazuli;
      stone = stairarea * increment;
      stoneCount += stone;
      

    }
    if(Math.ceil(basedeleno) - 1 == count){
      break;
    }
  }
  if (base % 2 === 0) {
    gold = 4 * increment;

  } else {
    gold = 1 * increment;
 
  }

  height = Math.round(basedeleno) * increment;

  console.log(`Stone required: ${Math.ceil(stoneCount)}`);
  console.log(`Marble required: ${Math.ceil(marbleCount)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisCount)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingJoser(11,
  0.75
  
  );
