<<<<<<< HEAD
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
=======
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
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
  trippleLetters("3");