import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, size, qty } = action.payload;
      const lineId = `${product.id}-${size || 'default'}`;
      const existing = state.items.find((item) => item.lineId === lineId);

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.lineId === lineId ? { ...item, qty: item.qty + qty } : item
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            lineId,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size || null,
            qty,
          },
        ],
      };
    }

    case 'UPDATE_QTY': {
      const { lineId, qty } = action.payload;
      if (qty <= 0) {
        return { ...state, items: state.items.filter((item) => item.lineId !== lineId) };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.lineId === lineId ? { ...item, qty } : item
        ),
      };
    }

    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((item) => item.lineId !== action.payload.lineId) };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (product, size, qty = 1) =>
    dispatch({ type: 'ADD_ITEM', payload: { product, size, qty } });

  const updateQty = (lineId, qty) =>
    dispatch({ type: 'UPDATE_QTY', payload: { lineId, qty } });

  const removeItem = (lineId) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { lineId } });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const totalCount = state.items.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = state.items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <CartContext.Provider
      value={{ items: state.items, addItem, updateQty, removeItem, clearCart, totalCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de un CartProvider');
  return ctx;
}