function trippleLetters(num) {
    let n = Number(num);
    for (let i = 0; i < n; i++) {
      let L1 = String.fromCharCode(97 + i);
      for (let j = 0; j < n; j++) {
        let L2 = String.fromCharCode(97 + j);
        for (let k = 0; k < n; k++) {
          let L3 = String.fromCharCode(97 + k);
          console.log(`${L1}${L2}${L3}`);
        }
      }
    }
  }
  trippleLetters("3");