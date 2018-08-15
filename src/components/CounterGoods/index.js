import React, { Component, Fragment } from "react";
import Button from "../Button";
import Context from "../Context";

class Basket extends Component {
  render() {
    return (
      <Context.Consumer>
        {card => {
          const title = `Количество заказов: ${card.basket.length}`;

          return <Button>{title}</Button>;
        }}
      </Context.Consumer>
    );
  }
}

export default Basket;
