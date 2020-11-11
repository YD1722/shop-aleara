import React from "react";
import { addItemToCart } from "../../redux/user-actions";
import { connect } from "react-redux";

import "./collection-item.styles.scss";

const CollectionItem = (props) => {
  const { id, name, imageUrl, price } = props;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <button onClick={() => addToCart(props)}> Add To Cart</button>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

const addToCart = (props) => {
  const { id, name, imageUrl, price, addItemToCart } = props;

  addItemToCart({ id, name, price });
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
