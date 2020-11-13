import { UserAction } from "../user/user-action-type";
import { CartAction } from "./cart-action-type";

const INITIAL_STATE = {
  itemList: [],
  isShowDropdown: true,
};

/**
 * The state is meant to be immutable, meaning it shouldn’t be changed directly
 * initial state + action = new state
 * @param state
 * @param action
 * @returns {{itemList: []} & {itemList: *[]}}
 */
const shoppingCartReducer = (state = INITIAL_STATE, action) => {
  let newState = state;

  switch (action.type) {
    case UserAction.ADD_ITEM_TO_CART:
      newState = Object.assign({}, state, {
        itemList: [...state.itemList, action.payload],
      });

      break;

    case CartAction.TOGGLE_CART_DROPDOWN:
      newState = {
        ...state,
        isShowDropdown: !state.isShowDropdown,
      };

      break;
  }

  return newState;
};

export default shoppingCartReducer;
