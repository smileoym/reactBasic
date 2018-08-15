import React, { Component, Fragment } from "react";
import products from "../../constans/products";
import ProductCard from "../ProductCard";
import CounterGoods from "../CounterGoods";
import PropTypes from "prop-types";

class Catalog extends Component {
  render() {
    return (
      <Fragment>
        <CounterGoods />
        <div>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Catalog;
