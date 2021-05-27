import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      parseInt(state.totalAmount) + parseInt(action.item.price) * parseInt(action.item.quantity);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount.toFixed(2)
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];

    if (!existingCartItem) {
      return {
        items: [...state.items],
        totalAmount: state.totalAmount.toFixed(2)
      };
    }

    let updatedItems;

    if (existingCartItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    const updatedTotalAmount = parseInt(state.totalAmount) - parseInt(existingCartItem.price);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount.toFixed(2)
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatch({ type: 'ADD', item: item });
  };

  const removeItemHandler = (id) => {
    dispatch({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: parseInt(cartState.totalAmount),
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node
};

export default CartProvider;
