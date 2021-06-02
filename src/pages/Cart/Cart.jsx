import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../../store/cart-context';

import CartList from '../../components/CartList/CartList';
import AuthContext from '../../store/auth-context';

const Cart = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isUserLoggedIn = !!authCtx.token;

  if (!isUserLoggedIn) {
    history.replace('/login');
  }

  const cartContext = useContext(CartContext);
  const items = cartContext.items;
  return <CartList products={items} />;
};

export default Cart;
