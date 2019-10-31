import React, { Component } from "react";
import ShopData from "./shop-data";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends Component {
  state = {
    collections: ShopData
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionsProps }) => (
          <CollectionPreview key={id} {...collectionsProps}/>
          
        ))}
      </div>
    );
  }
}

export default ShopPage;
