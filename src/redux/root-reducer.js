// base reducer represent all of the states of the application

import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import shoppingCartReducer from "./shopping-cart/shopping-cart-reducer";

export default combineReducers({
  user: userReducer,
  shoppingCart: shoppingCartReducer,
});
