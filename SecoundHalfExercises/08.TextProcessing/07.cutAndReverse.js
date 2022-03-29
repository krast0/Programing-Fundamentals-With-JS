<<<<<<< HEAD
function cutAndReverse(string) {
  function reverseFun(substring) {
    return (substringReversed = substring
        .split("")
        .reverse()
        .join(""));
  }
  let lengthOfString = string.length;
  let substring1 = string.substring(0, lengthOfString / 2);
  let substring2 = string.substring(lengthOfString / 2, string.length);
  console.log(reverseFun(substring1));
  console.log(reverseFun(substring2));
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
=======
function cutAndReverse(string) {
  function reverseFun(substring) {
    return (substringReversed = substring
        .split("")
        .reverse()
        .join(""));
  }
  let lengthOfString = string.length;
  let substring1 = string.substring(0, lengthOfString / 2);
  let substring2 = string.substring(lengthOfString / 2, string.length);
  console.log(reverseFun(substring1));
  console.log(reverseFun(substring2));
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
