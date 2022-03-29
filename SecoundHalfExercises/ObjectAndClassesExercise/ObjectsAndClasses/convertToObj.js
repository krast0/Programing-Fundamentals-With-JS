function convertToObj(objAsString){
let obj = JSON.parse(objAsString)
let props = Object.keys(obj)
for (const prop of props) {
    console.log(`${prop}: ${obj[prop]}`);
}
}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')