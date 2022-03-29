function storeProvision(availableStock, orderedProducts) {
  let shop = {};

  for (let index = 0; index < availableStock.length; index += 2) {
    let product = availableStock[index];
    shop[product] = Number(availableStock[index + 1]);
  }

  for (let index = 0; index < orderedProducts.length; index += 2) {
    let product = orderedProducts[index];

    if (!shop.hasOwnProperty(product)) {
      shop[product] = 0;
    }
    shop[product] += Number(orderedProducts[index + 1]);
  }
  for (const key in shop) console.log(`${key} -> ${shop[key]}`);
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
