import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/cart-icon.svg";

import "./cart-icon.styles.scss";
import { connect } from "react-redux";

const CartIcon = ({ itemList }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {getItemCount(itemList)} </span>
  </div>
);

const getItemCount = (itemList) => {
  return itemList ? itemList.length : 0;
};

const mapStateToProps = (rootReducer) => ({
  itemList: rootReducer.shoppingCart.itemList,
});

export default connect(mapStateToProps)(CartIcon);
