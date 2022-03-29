<<<<<<< HEAD
function revealWords(words, sentance) {
  let wordsSplitted = words.split(", ");



for (const word of wordsSplitted) {
    sentance = sentance.replace('*'.repeat(word.length),word)
}

  
console.log(sentance);
}
// revealWords(
//   "great",
//   "softuni is ***** place for learning new programming languages"
// );
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
=======
function revealWords(words, sentance) {
  let wordsSplitted = words.split(", ");



for (const word of wordsSplitted) {
    sentance = sentance.replace('*'.repeat(word.length),word)
}

  
console.log(sentance);
}
// revealWords(
//   "great",
//   "softuni is ***** place for learning new programming languages"
// );
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
