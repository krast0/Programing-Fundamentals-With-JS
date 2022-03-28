function BuildAWall(array) {
  let building = array.map(Number).sort((a, b) => a - b);
  let count = 30 - building[0];
  let sum = [];
  for (let i = 0; i < count; i++) {
    let foriteration = building.filter((a) => a < 30);
    //foriteration.map(a =>a+1);
    building = building.map((a) => a + 1);
    sum.push(foriteration.length * 195);
    //console.log(foriteration);
    //for (const iterator of foriteration) {

    //}
  }
  console.log(
    `${sum.join(", ")}\n${sum.reduce((a, b) => a + b, 0) * 1900} pesos`
  );
}
BuildAWall([17, 22, 17, 19, 17]);
