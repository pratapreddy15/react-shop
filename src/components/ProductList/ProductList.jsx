import classes from './ProductList.module.css';

import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import withCartEvents from '../hoc/withCartEvents';

const ProductList = (props) => {
  const DisplayItem = withCartEvents(ProductItem);

  return (
    <div className={classes.productList}>
      {props.products.map((p) => {
        return <DisplayItem key={p.id} product={p} />;
      })}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
};

export default ProductList;
