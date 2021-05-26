// import classes from './Cart.module.css';

import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import CartList from '../../components/CartList/CartList';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const items = cartContext.items;
  return <CartList products={items} />;
};

export default Cart;
