import { Product } from './fakeProducts';

export const addToCart = (product: Product) => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const getCartItems = () => {
  return JSON.parse(localStorage.getItem('cart') || '[]');
};

export const clearCart = () => {
  localStorage.removeItem('cart');
};
