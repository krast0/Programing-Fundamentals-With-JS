function secretChat(input) {
  let text = input.shift();
  let funcs = {
    InsertSpace,
    ChangeAll,
    Reverse,
  };
  while (input[0] != "Reveal") {
    let [command, p1, p2] = input.shift().split(":|:");
    let funcia = funcs[command];
    text = funcia(text, p1, p2);
  }
  console.log(`You have a new text message: ${text}`);

  function InsertSpace(text, index) {
    let firstHalf = text.slice(0, index);
    let secoundHalf = text.slice(index);
    let result = firstHalf + " " + secoundHalf;
    console.log(result);
    return result;
  }
  function ChangeAll(text, substring, replacement) {
    let regex = new RegExp(substring, "g");
    let replaced = text.replace(regex, replacement);
    console.log(replaced);
    return replaced;
  }
  function Reverse(text, substring) {
    if (text.includes(substring)) {
      let reversed = substring.split("").reverse().join("");
      let finished = text.split(substring).join('')
      text = finished + reversed
      console.log(text);
      return text;
    } else {
      console.log("error");
      return text;
    }
  }
}

secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
