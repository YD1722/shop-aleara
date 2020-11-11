import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <button onClick={addToCart}> Add To Cart</button>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

const addToCart = () => {};

export default CollectionItem;
