import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/cart-icon.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toggleDropdown } from "../../../redux/shopping-cart/cart-actions";

const CartIcon = ({ itemList, toggleDropdown }) => (
  <div onClick={() => toggleDropdown()} className="cart-icon">
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

/**
 * dispatch is a function of the Redux store. You call store.dispatch to dispatch an action.
 * This is the only way to trigger a state change.
 * With React Redux, your components never access the store directly - connect does it for you.
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
