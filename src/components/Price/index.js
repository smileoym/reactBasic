import React, { Component } from "react";

class Price extends Component {
  render() {
    return (
      <div>
        <span>{this.props.children} usd</span>
      </div>
    );
  }
}

export default Price;
