import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCartItems } from './cartUtils';

interface CartContextType {
  cartCount: number;
  updateCartCount: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const items = getCartItems();
    setCartCount(items.length);
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
