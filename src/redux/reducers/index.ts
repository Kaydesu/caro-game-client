import { combineReducers } from "redux";
import { StoreState } from "../types";
import { chatReducer } from "./chatReducer";
import { notifyReducer } from "./notifyReducer";
import { roomReducer } from "./roomReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers<StoreState>({
  user: userReducer,
  notification: notifyReducer,
  rooms: roomReducer,
  chat: chatReducer,
});

export default rootReducer;