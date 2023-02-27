async function fetchItem(ItemID) {
  const requisicao = await fetch(`https://api.mercadolibre.com/items/${ItemID}`)
  .then((resposta) => resposta.json())
  .then((dados) => {
    const item = dados;
    return item;
  })
  .catch((error) => {
    console.log(error);
  });

  return requisicao;
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
