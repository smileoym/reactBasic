import React, { Component } from "react";
import products from "../../constans/products";
import ProductCard from "../ProductCard";

class Catalog extends Component {
  render() {
    return (
      <div>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    );
  }
}

export default Catalog;
