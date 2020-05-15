export default function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product: product,
  };
}
