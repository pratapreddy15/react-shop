import classes from './Card.module.css';

import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
