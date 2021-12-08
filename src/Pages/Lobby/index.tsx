import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openPopup } from "../../redux/actions";
import { getRooms } from "../../redux/actions/roomActions";
import { Room, StoreState } from "../../redux/types";
import MQTTService, { LOBBY_TOPIC } from "../../utils/MQTTService";
import RoomList from "./RoomList";
import CreateRoom from "./CreateRoom";
import { LobbyStyle } from "./style";

const Lobby = () => {
  const dispatch = useDispatch();
  const rooms = useSelector<StoreState, Room[]>(state => state.rooms);

  useEffect(() => {
    dispatch(getRooms());
    Promise.all(MQTTService.sub([LOBBY_TOPIC])).then(() => {
      MQTTService.handleTopic(LOBBY_TOPIC, (data: any, topic: string) => {
        dispatch(openPopup(data.payload.message));
        dispatch(getRooms());
      });
    });
    return () => {
      MQTTService.unSub(LOBBY_TOPIC);
    }
  }, []);

  useEffect(() => {
    console.log(rooms);
  }, [rooms]);

  return (
    <LobbyStyle>
      <CreateRoom />
      <RoomList data={rooms} />
    </LobbyStyle>
  );
};

export default Lobby;
