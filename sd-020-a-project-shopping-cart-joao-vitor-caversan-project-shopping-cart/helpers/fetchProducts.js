async function fetchProducts() {
const requi = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
.then((resposta) => resposta.json())
.then((dados) => {
const products = [];
dados.results.forEach((element) => {
products.push(
{
sku: element.id,
image: element.thumbnail,
name: element.title,
salePrice: element.price,
},
);
});
  return products;
})
.catch((error) => { console.log(error); });
return requi;
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
