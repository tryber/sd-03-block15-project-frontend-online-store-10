export const getCategories = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url).then((data) => data.json());
};

export const getProductsFromCategoryAndQuery = async (categoryId, query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(url).then((data) => data.json());
};
