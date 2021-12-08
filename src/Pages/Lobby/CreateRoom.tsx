import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, PrimaryButton as Button } from "../../components";
import { createRoom } from "../../redux/actions/roomActions";
import { StoreState, User } from "../../redux/types";
import { LeftBar } from "./style";

const CreateRoom = () => {
  const [name, setName] = useState('');
  const user = useSelector<StoreState, User>(state => state.user);
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleCreateRoom = () => {
    createRoom(user.id, name);
  }

  return (
    <LeftBar>
      <div className="create-room">
        <Input onChange={handleOnChange} />
        <Button onClick={handleCreateRoom}>
          Create
        </Button>
      </div>
    </LeftBar>
  );
};

export default CreateRoom;
