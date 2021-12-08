import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton as Button } from "../../components";
import { Room } from "../../redux/types";

const BoardStyle = styled.div`
  width: calc(100vw - 273px);
  height: 100vh;
`;

const HiddenPanel = styled.div`
  
`;

const RoomCard = styled.div`
  background: #E4FDFA;
  box-shadow: 4px 4px 18px 7px rgba(64, 176, 176, 0.22);
  border-radius: 16px;
  text-align: center;
  padding: 20px 10px;

  button {
    display: inline-block;
    /* margin:0 12px; */
    width: 100%;
    border-radius: 8px;
    padding: 7px 20px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 62px;
  padding: 40px;
`;

const RoomList: FunctionComponent<{ data: Room[] }> = ({ data }) => {

  const renderRoomList = () => {
    return data.map((room) => (
      <RoomCard key={room.id}>
        <h2>{room.name}</h2>
        <HiddenPanel>
          {/* <Button>Play</Button>
          <Button>Watch</Button> */}
          <Link to={`/room/${room.id}`}>
            <Button>Join</Button>
          </Link>
        </HiddenPanel>
      </RoomCard>
    ))
  }

  return (
    <BoardStyle>
      <CardContainer>
        {data && data.length > 0 ? renderRoomList() : <h1>No data found</h1>}
      </CardContainer>
    </BoardStyle>
  );
};

export default RoomList;
