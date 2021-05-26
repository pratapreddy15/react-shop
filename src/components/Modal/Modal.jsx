import classes from './Modal.module.css';

import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../layout/Backdrop/Backdrop';

const Modal = (props) => {
  let actionButtons;

  if (props.type === 'Basic') {
    actionButtons = (
      <button className={classes.btnClose} onClick={props.onClose}>
        Close
      </button>
    );
  }

  if (props.type === 'Confirmation') {
    actionButtons = (
      <React.Fragment>
        <button className={classes.btnYes} onClick={props.onConfirmedYes}>
          Yes
        </button>
        <button className={classes.btnNo} onClick={props.onConfirmedNo}>
          No
        </button>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Backdrop />
      <div className={classes.modal}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.text}>{props.text}</p>
        <div className={classes.actions}>{actionButtons}</div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  type: PropTypes.oneOf(['Confirmation', 'Basic']).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onConfirmedYes: PropTypes.func,
  onConfirmedNo: PropTypes.func
};

export default Modal;
