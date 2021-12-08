import { Dispatch } from "redux"
import APIService from "../../utils/APIService"
import MQTTService from "../../utils/MQTTService"
import { ChatActionTypes, SetTopicAction } from "../types"

export const joinRoom = (roomId: string, userId: string) => (dispatch: Dispatch<SetTopicAction>) => {
  APIService.joinRoom(roomId, userId).then(res => {
    if (res.status === 'success') {
      const { topics } = res.data;
      Promise.all(MQTTService.sub([
        topics.roomTopic,
        topics.roomTopic,
      ])).then(() => {
        console.log('Room create success, subsribe to topics');
        dispatch({
          type: ChatActionTypes.SET_TOPIC,
          payload: {
            roomTopic: topics.roomTopic,
            chatTopic: topics.chatTopic,
          }
        })
      }).catch(error => {
        console.log('Something went wrong', error);
      });
    }
  });
}

export const leaveRoom = (roomId: string, userId: string, topics: { roomTopic: string; chatTopic: string }) => (dispatch: Dispatch<SetTopicAction>) => {
  APIService.leaveRoom(roomId, userId).then(() => {
    MQTTService.unSub([topics.roomTopic, topics.chatTopic]);
    dispatch({
      type: ChatActionTypes.SET_TOPIC,
      payload: {
        roomTopic: '',
        chatTopic: '',
      }
    })
  })
}