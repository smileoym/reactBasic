import React, { Component } from "react";
import Label from "../Label";

class Hello extends Component {
  render() {
    return (
      <div>
        Hello, <Label>World</Label>!
      </div>
    );
  }
}

export default Hello;
