import classes from './ProductItem.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import Card from '../UI/Card/Card';
import QuantityInput from '../UI/QuantityInput/QuantityInput';

const ProductItem = (props) => {
  const { product, onAdd: addProductHandler, onRemove: removeProductHandler } = props;

  return (
    <Card>
      <div className={classes.productImage}>
        <img src={product.image} />
      </div>
      <div className={classes.productTitle}>{product.title}</div>
      <div className={classes.productAmount}>A$ {product.price.toFixed(2)}</div>
      <QuantityInput
        onAdd={addProductHandler}
        onRemove={removeProductHandler}
        initialValue={product.quantity}
      />
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func
};

export default ProductItem;
