let products = [];

for (let cat of store.categories) {
  for (let item of cat.items) {
    products.push(item);
  }
}

console.log(products);
