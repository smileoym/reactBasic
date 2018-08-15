import React, { Component } from "react";
import Catalog from "./components/Catalog";
import CatalogPage from "../src/containers/CatalogPage";

class App extends Component {
  render() {
    return <Catalog />, <CatalogPage />;
  }
}

export default App;
