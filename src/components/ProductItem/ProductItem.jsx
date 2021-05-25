import classes from './ProductItem.module.css';

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Card from '../UI/Card/Card';
import QuantityInput from '../UI/QuantityInput/QuantityInput';
import CartContext from '../../store/cart-context';

const ProductItem = (props) => {
  const cartContext = useContext(CartContext);

  const { product } = props;

  const addProductHandler = () => {
    cartContext.addItem({ ...product, quantity: 1 });
  };
  const removeProductHandler = () => {
    cartContext.removeItem(product.id);
  };

  return (
    <Card>
      <div className={classes.productImage}>
        <img src={product.image} />
      </div>
      <div className={classes.productTitle}>{product.title}</div>
      <div className={classes.productAmount}>A$ {product.price.toFixed(2)}</div>
      <QuantityInput onAdd={addProductHandler} onRemove={removeProductHandler} />
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object
};

export default ProductItem;
