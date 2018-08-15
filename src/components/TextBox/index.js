import React, { Component } from "react";

class TextBox extends Component {
  render() {
    return (
      <div>
        <span>{this.props.children}</span>
      </div>
    );
  }
}

export default TextBox;
