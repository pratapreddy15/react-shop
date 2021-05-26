import classes from './CartList.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/CartItem';

const CartList = (props) => {
  return (
    <div className={classes.cartList}>
      {props.products.map((p) => {
        return <CartItem key={p.id} id={p.id} />;
      })}
    </div>
  );
};

CartList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

export default CartList;
