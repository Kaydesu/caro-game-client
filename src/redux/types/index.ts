export interface StoreState {
  user: User;
  notification: Notification;
  rooms: Room[];
  chat: Chat;
}


// User state related:
export interface User {
  id: string;
  name: string;
  login: boolean;
}

export enum UserActionTypes {
  REGISTER = "USER/REGISTER"
}

export interface RegisterAction {
  type: UserActionTypes.REGISTER;
  payload: {
    id: string;
    name: string;
  };
}

// Notify state related
export interface Notification {
  errorCode: number,
  errorMessage: string,
  isOpen: boolean,
  type: NotifyTypes,
}

export enum NotifyActionTypes {
  POPUP = 'NOTIFY/POPUP',
  TOAST = 'NOTIFY/TOAST',
  CLEAR = 'NOTIFY/CLEAR',
}

export interface OpenPopupAction {
  type: NotifyActionTypes.POPUP;
  payload: string;
}

export interface OpenToastAction {
  type: NotifyActionTypes.TOAST;
  payload: string;
}

export interface ClearNotifyAction {
  type: NotifyActionTypes.CLEAR;
}

export type NotifyUnionAction = OpenPopupAction | OpenToastAction | ClearNotifyAction;

export enum NotifyTypes {
  POPUP,
  TOAST
}

// Room state related
export interface Room {
  id: string;
  name: string;
  owner: {
    id: string;
    name: string;
  }
}

export enum RoomActionTypes {
  GET_ROOMS = 'GET_ROOMS',
  JOIN = 'JOIN',
  LEFT = 'LEFT',
}

export interface GetRoomsAction {
  type: RoomActionTypes.GET_ROOMS,
  payload: Room[],
}

// Chat state related
export interface Conversation {
  owner: string;
  text: string;
  timeStamp: number;
}

export interface Chat {
  roomTopic: string;
  chatTopic: string;
  conversations: Conversation[];
}

export enum ChatActionTypes {
  SET_TOPIC = 'CHAT/SET_TOPIC',
  ADD_MESSAGE = 'CHAT/ADD_MESSAGE',
}

export interface SetTopicAction {
  type: ChatActionTypes.SET_TOPIC;
  payload: {
    roomTopic: string;
    chatTopic: string;
  };
}

export interface ReceiveMessageAction {
  type: ChatActionTypes.ADD_MESSAGE;
  payload: Conversation;
}

export type ChatActionUnion = SetTopicAction | ReceiveMessageAction;

