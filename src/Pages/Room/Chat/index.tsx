import React, { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SecondaryButton as Button, TextArea } from "../../../components";
import { openPopup } from "../../../redux/actions";
import { leaveRoom } from "../../../redux/actions/chatActions";
import { Chat, StoreState, User } from "../../../redux/types";
import MQTTService, { MQTTMessageTypes } from "../../../utils/MQTTService";
import { ChatWrapperStyle } from "./style";

const ChatRoom: FC<{ roomId: string }> = ({ roomId }) => {
  const [message, setMessage] = useState<string>("");
  const { roomTopic, chatTopic, conversations } = useSelector<StoreState, Chat>(state => state.chat);
  const user = useSelector<StoreState, User>(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    MQTTService.handleTopic([roomTopic, chatTopic], (data: any, topic: string) => {
      switch (topic) {
        case roomTopic:
          dispatch(openPopup(data.payload.message));
          break;
        case chatTopic:
          break;
        default:
          return;
      }
    });
  }, [roomTopic, chatTopic]);

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    MQTTService.pub(chatTopic, {
      type: MQTTMessageTypes.CHAT,
      payload: {
        userName: user.name,
        text: message,
      }
    })
  }

  const onLeaveRoom = () => {
    dispatch(leaveRoom(roomId, user.id, { roomTopic, chatTopic }));
  }

  return (
    <ChatWrapperStyle>
      <Link to='/'>
        <Button className="leave-btn" onClick={onLeaveRoom}>
          Leave
        </Button>
      </Link>
      <div className="chat_container"></div>
      <TextArea onChange={handleChangeMessage} />
      <Button onClick={sendMessage}>
        Send
      </Button>
    </ChatWrapperStyle>
  );
};

export default ChatRoom;
