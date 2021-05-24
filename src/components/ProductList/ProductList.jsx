import classes from './ProductList.module.css';

import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = (props) => {
  return (
    <div className={classes.productList}>
      {props.products.map((p) => {
        return <ProductItem key={p.id} product={p} />;
      })}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

export default ProductList;
