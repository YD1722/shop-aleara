import React from "react";
import CustomButton from "../../common/custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

const CartDropdown = ({ isShowDropdown, itemList }) => (
  <div
    style={{ display: isShowDropdown ? "flex" : "none" }}
    className="cart-dropdown"
  >
    <div className="cart-items">
      <ul>
        {itemList.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (rootReducer) => ({
  isShowDropdown: rootReducer.shoppingCart.isShowDropdown,
  itemList: rootReducer.shoppingCart.itemList,
});

export default connect(mapStateToProps)(CartDropdown);
