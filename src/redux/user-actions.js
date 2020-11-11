import { UserAction } from "./user/user-action-type";

export const setCurrentUser = (user) => ({
  type: UserAction.SET_CURRENT_USER,
  payload: user,
});

export const addItemToCart = (item) => ({
  type: UserAction.ADD_ITEM_TO_CART,
  payload: item,
});
