<<<<<<< HEAD
function charactersInRange(char1, char2) {
  let symbolArray = [];
  if(char1.charCodeAt() < char2.charCodeAt()){
  for (let i = char1.charCodeAt() + 1; i < char2.charCodeAt(); i++) {
    symbolArray.push(String.fromCharCode(i));
  }
}else{
    for (let i = char2.charCodeAt() + 1; i < char1.charCodeAt(); i++) {
        symbolArray.push(String.fromCharCode(i));
}
  
}
console.log(symbolArray.join(" "));
}
charactersInRange("a", "d");
console.log("----");
charactersInRange("#", ":");
console.log("----");
charactersInRange("C", "#");
console.log('---');
charactersInRange('1','9')
=======
function charactersInRange(char1, char2) {
  let symbolArray = [];
  if(char1.charCodeAt() < char2.charCodeAt()){
  for (let i = char1.charCodeAt() + 1; i < char2.charCodeAt(); i++) {
    symbolArray.push(String.fromCharCode(i));
  }
}else{
    for (let i = char2.charCodeAt() + 1; i < char1.charCodeAt(); i++) {
        symbolArray.push(String.fromCharCode(i));
}
  
}
console.log(symbolArray.join(" "));
}
charactersInRange("a", "d");
console.log("----");
charactersInRange("#", ":");
console.log("----");
charactersInRange("C", "#");
console.log('---');
charactersInRange('1','9')
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
