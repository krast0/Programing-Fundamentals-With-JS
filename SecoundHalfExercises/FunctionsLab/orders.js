function orders(string, n) {
  let price = 0;
  switch (string) {
    case "coffee":
      price = 1.5 * n;
      break;
    case "water":
      price = 1.0 * n;
      break;
    case "coke":
      price = 1.4 * n;
      break;
    case "snacks":
      price = 2.0 * n;
      break;
  }
  console.log(price.toFixed(2))
}
orders("water", 5);
orders("coffee", 2);
