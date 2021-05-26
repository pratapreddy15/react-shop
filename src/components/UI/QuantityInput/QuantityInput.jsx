import classes from './QuantityInput.module.css';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Modal from '../../Modal/Modal';

const QuantityInput = (props) => {
  const location = useLocation();
  const { onAdd, onRemove, initialValue = 0 } = props;
  const isCartActive = location.pathname === '/cart';

  const [quantity, setQuantity] = useState(initialValue);
  const [operation, setOperation] = useState(null);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalType, setModalType] = useState('');

  const btnClasses = ['btn', classes.quantityButton];

  useEffect(() => {
    if (operation === 'add' && quantity < 10) {
      onAdd();
      return;
    }

    if (operation === 'remove') {
      onRemove();
      return;
    }
  }, [operation, quantity]);

  const addButtonClickHandler = () => {
    if (quantity >= 10) {
      setModalIsVisible(true);
      setModalTitle('Not Allowed!');
      setModalType('Basic');
      setModalText(
        'Ooops! You have reached the maximum number of items in your cart for the selected product.'
      );
      return;
    }

    setQuantity((prevQuantity) => {
      if (prevQuantity < 10) {
        return prevQuantity + 1;
      } else {
        return prevQuantity;
      }
    });
    setOperation('add');
  };

  const removeButtonClickHandler = () => {
    if (isCartActive && quantity === 1) {
      setModalIsVisible(true);
      setModalTitle('Alert!');
      setModalType('Confirmation');
      setModalText(
        'You are about to remove the last item for the selected product. Are you sure you want to continue?'
      );
      return;
    }

    setQuantity((prevQuantity) => {
      if (prevQuantity <= 0) {
        return 0;
      } else {
        return prevQuantity - 1;
      }
    });
    setOperation('remove');
  };

  const modalConfirmedYesHandler = () => {
    setQuantity(0);
    setOperation('remove');
    setModalIsVisible(false);
  };

  const modalConfirmedNoHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <React.Fragment>
      {modalIsVisible && (
        <Modal
          type={modalType}
          title={modalTitle}
          text={modalText}
          onConfirmedYes={modalConfirmedYesHandler}
          onConfirmedNo={modalConfirmedNoHandler}
          onClose={() => setModalIsVisible(false)}
        />
      )}
      <div className={classes.quantityInput}>
        <button className={btnClasses.join(' ')} onClick={addButtonClickHandler}>
          +
        </button>
        <input type="text" disabled className={classes.quantityText} value={quantity}></input>
        <button className={btnClasses.join(' ')} onClick={removeButtonClickHandler}>
          -
        </button>
      </div>
    </React.Fragment>
  );
};

QuantityInput.propTypes = {
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  initialValue: PropTypes.number
};

export default QuantityInput;
