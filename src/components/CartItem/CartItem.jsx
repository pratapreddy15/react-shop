import classes from './CartItem.module.css';

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import QuantityInput from '../UI/QuantityInput/QuantityInput';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
  const cartContext = useContext(CartContext);

  const product = cartContext.items.find((item) => item.id === props.id);

  const addProductHandler = () => {
    cartContext.addItem({
      ...product,
      quantity: 1
    });
  };

  const removeProductHandler = () => {
    cartContext.removeItem(product.id);
  };

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
  id: PropTypes.number
};

export default CartItem;
