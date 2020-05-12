export const getCategories = async () => {
  let url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url);
};

export const getProductsFromCategoryAndQuery = async (categoryId, query) => {
  let url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(url);
};
