import React, { Component, createContext } from "react";
import { getDocuments } from "../Components/Config/Fire.js"


export const ProductsContext = createContext({ documents: null });

class ProductsProvider extends Component {
  state = {
    documents: null
  };

  componentDidMount = () => {
    const documents = getDocuments();
    this.setState({ documents });
  };

  render() {
    const { documents } = this.state;

    return (
      <ProductsContext.Provider value={documents}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}

export default ProductsProvider;
