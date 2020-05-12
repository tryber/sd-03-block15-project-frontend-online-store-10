export const getCategories = async () => {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories');
};

export const getProductsFromCategoryAndQuery = async (categoryId, query) => {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
};
