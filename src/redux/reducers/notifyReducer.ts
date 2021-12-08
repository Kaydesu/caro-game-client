import { Notification, NotifyActionTypes, NotifyTypes, NotifyUnionAction } from "../types";

const initialState: Notification = {
  errorCode: 0,
  errorMessage: '',
  isOpen: false,
  type: NotifyTypes.POPUP,
}

export const notifyReducer = (state: Notification = initialState, action: NotifyUnionAction) => {
  switch (action.type) {
    case NotifyActionTypes.POPUP:
      return {
        ...state,
        isOpen: true,
        errorMessage: action.payload,
        type: NotifyTypes.POPUP,
      }
    case NotifyActionTypes.TOAST:
      return {
        ...state,
        isOpen: true,
        errorMessage: action.payload,
        type: NotifyTypes.TOAST,
      }
    case NotifyActionTypes.CLEAR:
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state;
  }
}



