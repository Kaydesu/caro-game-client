import { Dispatch } from "redux"
import APIService from "../../utils/APIService";
import { GetRoomsAction, RoomActionTypes } from "../types";

export const getRooms = () => (dispatch: Dispatch<GetRoomsAction>) => {
  APIService.getRooms().then((res) => {
    if (res.status === 'success') {
      dispatch({
        type: RoomActionTypes.GET_ROOMS,
        payload: res.data.rooms
      })
    }
  }).catch(err => {

  })
}

export const createRoom = (userId: string, name: string) => {
  APIService.createRoom(name, userId).then((res) => {
    //Store access code
  })
}