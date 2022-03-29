function dictionary(array) {
  let terms = {};
  for (const element of array) {
    let jsonToObject = JSON.parse(element);
    terms = Object.assign(jsonToObject, terms);
  }

  let arr = [];
  for (const key in terms) {
    arr.push(key);
  }
  let sorted = arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (!sorted.includes(sorted[i], sorted.indexOf(sorted[i]) + 1)) {
      console.log(`Term: ${sorted[i]} => Definition: ${terms[sorted[i]]}`);
    }
  }
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  '{"Coffee":"wowwatafakkk"}',
  '{"Microphone":"Opalqnka"}'
]);
