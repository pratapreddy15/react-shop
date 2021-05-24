import classes from './ProductItem.module.css';

import React from 'react';
import PropTypes from 'prop-types';

import Card from '../UI/Card/Card';

const ProductItem = (props) => {
  const { product } = props;
  console.log(product);
  return (
    <Card>
      <div className={classes.productImage}>
        <img src={product.image} />
      </div>
      <div className={classes.productTitle}>{product.title}</div>
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object
};

export default ProductItem;
