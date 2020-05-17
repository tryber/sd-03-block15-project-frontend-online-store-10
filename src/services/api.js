export const getCategories = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
};

export const getProductsFromCategoryAndQuery = (categoryId, query) => {
  if (categoryId && !query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((data) => data.json());
  }
  if (query && !categoryId) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((data) => data.json());
  }
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((data) => data.json());
};
