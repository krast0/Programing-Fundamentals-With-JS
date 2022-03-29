function condenseArray(array) {
  let condensed = [];
  for (const n of array) {
      condensed.push(n)
  }
    while(condensed.length > 1){
        let temp = []
    for (let i = 0; i < condensed.length - 1; i++) {
      temp.push(condensed[i] + condensed[i + 1]);
    }
condensed = temp
}
  let num = Number(condensed)
  console.log(num)
}
condenseArray([2, 10, 3]);
console.log("---");
condenseArray([5, 0, 4, 1, 2]);
