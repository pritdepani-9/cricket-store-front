import { Product } from './fakeProducts';

export const addToCart = (product: Product) => {
  const cart: {product: Product, quantity: number}[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const existingItem = cart.find(item => item.product.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({product, quantity: 1});
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const getCartItems = (): {product: Product, quantity: number}[] => {
  return JSON.parse(localStorage.getItem('cart') || '[]');
};

export const clearCart = () => {
  localStorage.removeItem('cart');
};

export const updateCartItemQuantity = (productId: string, newQuantity: number) => {
  const cart = getCartItems();
  const itemIndex = cart.findIndex(item => item.product.id === productId);
  
  if (itemIndex !== -1) {
    if (newQuantity <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = newQuantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  return cart;
};