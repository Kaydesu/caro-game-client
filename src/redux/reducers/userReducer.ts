import { UserActionTypes, RegisterAction, User } from "../types"

const initialState: User = {
  id: '',
  name: '',
  login: false,
}

export const userReducer = (state: User = initialState, action: RegisterAction) => {
  switch (action.type) {
    case UserActionTypes.REGISTER:
      return {
        name: action.payload.name,
        id: action.payload.id,
        login: true,
      };
    default:
      return state;
  }
}