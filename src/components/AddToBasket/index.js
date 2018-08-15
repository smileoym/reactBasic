import React, { Component } from "react";

import Context from "../Context";

import Button from "../Button";

class AddToBasket extends Component {
  render() {
    const { product } = this.props;

    return (
      <Context.Consumer>
        {card => {
          return <Button onClick={() => card.addToBasket(product)}>{"в корзину"}</Button>;
        }}
      </Context.Consumer>
    );
  }
}

export default AddToBasket;
