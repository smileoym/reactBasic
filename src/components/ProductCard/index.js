import React, { Component } from "react";
import Image from "../Image";
import TextBox from "../TextBox";
import Price from "../Price";
import "./css/style.css";
import AddToBasket from "../AddToBasket";

class ProductCard extends Component {
  render() {
    const { imageUrl, title, price } = this.props.product;

    return (
      <div className="card">
        <Image src={imageUrl} width={"200px"} height={"303px"} alt={"no image"} />
        <TextBox>{title}</TextBox>
        <Price>{price}</Price>
        <AddToBasket product={this.props} />
      </div>
    );
  }
}

export default ProductCard;
