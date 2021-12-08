import { ClearNotifyAction, NotifyActionTypes, OpenPopupAction, OpenToastAction } from "../types";

export const handleNotify = (errorCode: number, message: string) => {
  return openPopup(message);
}

export const openPopup = (message: string): OpenPopupAction => ({
  type: NotifyActionTypes.POPUP,
  payload: message,
});

export const openToast = (message: string): OpenToastAction => ({
  type: NotifyActionTypes.TOAST,
  payload: message,
});

export const clearNotify = (): ClearNotifyAction => ({
  type: NotifyActionTypes.CLEAR,
});