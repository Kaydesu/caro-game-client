import { GetRoomsAction, Room, RoomActionTypes } from "../types";

const initialstate: Room[] = [];

export const roomReducer = (state: Room[] = initialstate, action: GetRoomsAction) => {
  switch (action.type) {
    case RoomActionTypes.GET_ROOMS:
      return action.payload;
    default:
      return state;
  }
}