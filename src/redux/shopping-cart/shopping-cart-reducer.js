import { UserAction } from "../user/user-action-type";

const INITIAL_STATE = {
  itemList: [],
};

/**
 * The state is meant to be immutable, meaning it shouldn’t be changed directly
 * initial state + action = new state
 * @param state
 * @param action
 * @returns {{itemList: []} & {itemList: *[]}}
 */
const shoppingCartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === UserAction.ADD_ITEM_TO_CART) {
    const newState = Object.assign({}, state, {
      itemList: [...state.itemList, action.payload],
    });

    return newState;
  } else {
    return state;
  }
};

export default shoppingCartReducer;
