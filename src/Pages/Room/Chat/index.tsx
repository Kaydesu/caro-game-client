import React, { useState, useEffect, useRef, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SecondaryButton as Button, TextArea } from "../../../components";
import { openPopup } from "../../../redux/actions";
import { leaveRoom, addMessage } from "../../../redux/actions/chatActions";
import { Chat, StoreState, User } from "../../../redux/types";
import MQTTService, { MQTTMessageTypes } from "../../../utils/MQTTService";
import { ChatBubble, ChatWrapperStyle } from "./style";

const ChatRoom: FC<{ roomId: string }> = ({ roomId }) => {
  const [message, setMessage] = useState<string>("");
  const { roomTopic, chatTopic, conversations } = useSelector<StoreState, Chat>(state => state.chat);
  const user = useSelector<StoreState, User>(state => state.user);
  const dispatch = useDispatch();
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (roomTopic !== "" && chatTopic !== "") {
      MQTTService.handleTopic([roomTopic, chatTopic], (data: any, topic: string) => {
        console.log("Check topic", topic);
        switch (topic) {
          case roomTopic:
            dispatch(openPopup(data.payload.message));
            break;
          case chatTopic:
            dispatch(addMessage({
              owner: data.payload.userName,
              text: data.payload.text,
              timeStamp: new Date().getTime(),
            }));
            break;
          default:
            return;
        }
      });
    }
  }, [roomTopic, chatTopic]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [conversations]);

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
    }).then(() => {
      setMessage('');
    });
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
      <div className="chat_container" ref={containerRef}>
        <ul>
          {
            conversations.map((chat, id) => (
              <ChatBubble key={id} className={chat.owner === user.name ? 'align-right' : ''}>
                <h3>{chat.owner}</h3>
                <div className="message-container">
                  <p>{chat.text}</p>
                </div>
              </ChatBubble>
            ))
          }
        </ul>
      </div>
      <TextArea value={message} onChange={handleChangeMessage} />
      <Button onClick={sendMessage}>
        Send
      </Button>
    </ChatWrapperStyle>
  );
};

export default ChatRoom;
