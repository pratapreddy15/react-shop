import classes from './QuantityInput.module.css';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const QuantityInput = (props) => {
  const [quantity, setQuantity] = useState(0);

  const btnClasses = ['btn', classes.quantityButton];

  const addButtonClickHandler = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity < 10) {
        return prevQuantity + 1;
      } else {
        return prevQuantity;
      }
    });
    props.onAdd();
  };

  const removeButtonClickHandler = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity <= 0) {
        return 0;
      } else {
        return prevQuantity - 1;
      }
    });
    if (quantity > 0) {
      props.onRemove();
    }
  };

  return (
    <div className={classes.quantityInput}>
      <button className={btnClasses.join(' ')} onClick={addButtonClickHandler}>
        +
      </button>
      <input type="text" disabled className={classes.quantityText} value={quantity}></input>
      <button className={btnClasses.join(' ')} onClick={removeButtonClickHandler}>
        -
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  onAdd: PropTypes.func,
  onRemove: PropTypes.func
};

export default QuantityInput;
