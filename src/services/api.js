export const getCategories = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
};
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url;
  if (categoryId && !query) url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  else if (!categoryId && query) url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  else url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  const product = await response.json();
  return product;
}
