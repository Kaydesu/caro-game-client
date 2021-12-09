import { Chat, ChatActionTypes, ChatActionUnion } from "../types"

const initialState: Chat = {
  roomTopic: '',
  chatTopic: '',
  conversations: [],
}

export const chatReducer = (state: Chat = initialState, action: ChatActionUnion) => {
  switch (action.type) {
    case ChatActionTypes.SET_TOPIC:
      return {
        ...state,
        roomTopic: action.payload.roomTopic,
        chatTopic: action.payload.chatTopic,
      }
    case ChatActionTypes.ADD_MESSAGE:
      let newList;
      if (Array.isArray(action.payload)) {
        newList = action.payload;
      } else {
        newList = [...state.conversations].concat(action.payload);
      }
      return {
        ...state,
        conversations: newList,
      }
    default:
      return state;
  }
}