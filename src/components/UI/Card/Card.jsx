import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return <div className="bg-transparent">{props.children}</div>;
};

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
