const apiUrl = 'https://dummyjson.com/products';

export const apiProducts = async ({ setProducts }) => {
  const response = await fetch(apiUrl)
  const results = await response.json()
  setProducts(results.products)
};
