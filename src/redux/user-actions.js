import { UserAction } from "./user/user-action-type";

export const setCurrentUser = (user) => ({
  type: UserAction.SET_CURRENT_USER,
  payload: user,
});
