function simpleCalc(a, b, operation) {
  let resultMultiplay = (a, b) => a * b;
  let resultDeleno = (a, b) => a / b;
  let resultSubstract = (a, b) => a - b;
  let resultSum = (a, b) => a + b;

  switch (operation) {
    case "multiply":
      console.log(resultMultiplay(a, b));
      break;
    case "divide":
      console.log(resultDeleno(a, b));
      break;
    case "add":
      console.log(resultSum(a, b));
      break;
    case "subtract":
      console.log(resultSubstract(a, b));
      break;

    default:
      break;
  }
}
simpleCalc(5, 5, "multiply");
simpleCalc(40, 8, "divide");
simpleCalc(12, 19, "add");
simpleCalc(50, 13, "subtract");
