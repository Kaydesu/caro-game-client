import { Dispatch } from "redux"
import { handleNotify } from ".";
import APIService from "../../utils/APIService";
import { UserActionTypes, RegisterAction } from "../types";

export const register = (name: string) => (dispatch: Dispatch<RegisterAction | any>) => {
  APIService.register(name).then((res) => {
    if (res.status === "success") {
      dispatch({
        type: UserActionTypes.REGISTER,
        payload: {
          id: res.data.userId,
          name: name,
        }
      });
    } else {
      const { errorCode, errorMessage } = res.error;
      dispatch(handleNotify(errorCode, errorMessage));
    }

  }).catch(error => {

  })
}