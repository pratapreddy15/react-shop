import classes from './ProductItem.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import Card from '../UI/Card/Card';
import QuantityInput from '../UI/QuantityInput/QuantityInput';

const ProductItem = (props) => {
  const { product } = props;
  return (
    <Card>
      <div className={classes.productImage}>
        <img src={product.image} />
      </div>
      <div className={classes.productTitle}>{product.title}</div>
      <QuantityInput />
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object
};

export default ProductItem;
