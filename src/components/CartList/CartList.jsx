import classes from './CartList.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/CartItem';
import withCartEvents from '../hoc/withCartEvents';

const CartList = (props) => {
  const DisplayItem = withCartEvents(CartItem);

  return (
    <div className={classes.cartList}>
      {props.products.length === 0 && (
        <div className="centered-horizontally">
          <p>No products added! Please add products to cart from Products page.</p>
        </div>
      )}
      {props.products.map((p) => {
        return <DisplayItem key={p.id} product={p} />;
      })}
    </div>
  );
};

CartList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

export default CartList;
