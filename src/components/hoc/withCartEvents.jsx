import React from 'react';
import PropTypes from 'prop-types';

import CartContext from '../../store/cart-context';

const withCartEvents = (WrappedComponent) => {
  class ItemDisplay extends React.Component {
    constructor(props) {
      super(props);
    }

    addProductHandler(contextObject) {
      contextObject.addItem({ ...this.props.product, quantity: 1 });
    }

    removeProductHandler(contextObject) {
      contextObject.removeItem(this.props.product.id);
    }

    render() {
      return (
        <CartContext.Consumer>
          {(cartContext) => {
            const productIndex = cartContext.items.findIndex(
              (item) => item.id === this.props.product.id
            );
            let quantity = 0;
            if (productIndex > -1) {
              quantity = cartContext.items[productIndex].quantity;
            }
            return (
              <WrappedComponent
                product={{ ...this.props.product, quantity }}
                onAdd={() => this.addProductHandler(cartContext)}
                onRemove={() => this.removeProductHandler(cartContext)}
              />
            );
          }}
        </CartContext.Consumer>
      );
    }
  }

  ItemDisplay.propTypes = {
    product: PropTypes.object
  };

  return ItemDisplay;
};

export default withCartEvents;
