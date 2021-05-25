import classes from './QuantityInput.module.css';

import React, { useState } from 'react';

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(0);
  const btnClasses = ['btn', classes.quantityButton];

  const onAddButtonClick = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity < 10) {
        return prevQuantity + 1;
      } else {
        return prevQuantity;
      }
    });
  };

  const onRemoveButtonClick = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 0) {
        return prevQuantity - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className={classes.quantityInput}>
      <button className={btnClasses.join(' ')} onClick={onAddButtonClick}>
        +
      </button>
      <input type="text" disabled className={classes.quantityText} value={quantity}></input>
      <button className={btnClasses.join(' ')} onClick={onRemoveButtonClick}>
        -
      </button>
    </div>
  );
};

export default QuantityInput;
