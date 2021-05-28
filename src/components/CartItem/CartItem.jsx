import classes from './CartItem.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import QuantityInput from '../UI/QuantityInput/QuantityInput';

const CartItem = (props) => {
  const { product, onAdd: addProductHandler, onRemove: removeProductHandler } = props;

  return (
    <div className={classes.cartItem}>
      <div className={classes.image}>
        <img src={product.image} />
      </div>
      <div className={classes.title}>
        <p>{product.title}</p>
      </div>
      <div className={classes.actions}>
        <div className={classes.price}>
          <span>Price: </span>
          <strong>A$ {product.price.toFixed(2)}</strong>
        </div>
        <div className={classes.total}>
          <span>Total: </span>
          <strong>A$ {(product.price * product.quantity).toFixed(2)}</strong>
        </div>
        <QuantityInput
          onAdd={addProductHandler}
          onRemove={removeProductHandler}
          initialValue={product.quantity}
        />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func
};

export default CartItem;
