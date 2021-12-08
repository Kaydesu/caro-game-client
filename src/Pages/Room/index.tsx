import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
import styled from "styled-components";
import { joinRoom } from "../../redux/actions/chatActions";
import { StoreState, User } from "../../redux/types";
import { FlexBox } from "../../styles/global";
import Chat from "./Chat";
import GameBoard from "./GameBoard";

const RoomWrapperStyle = styled(FlexBox)`
  width: 100vw;
  height: 100vh;
`;

const Room = () => {
  const match = useRouteMatch<{
    id: string;
  }>();
  const user = useSelector<StoreState, User>(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const roomId = match.params.id;
    // Join room
    dispatch(joinRoom(roomId, user.id));
  }, []);

  return (
    <RoomWrapperStyle>
      <Chat roomId={match.params.id} />
      <GameBoard />
    </RoomWrapperStyle>
  );
};

export default Room;
