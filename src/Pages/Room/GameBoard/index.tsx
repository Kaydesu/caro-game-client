import React from "react";
import { PrimaryButton as Button } from "../../../components/Button";
import { GameBoardWrapperStyle } from "./style";

const GameBoard = () => {
  const handleStartGame = () => { };

  return (
    <GameBoardWrapperStyle>
      {/* <Button>
        Start
      </Button>
      <div className="board"></div> */}
      <h1>Game is not Available</h1>
    </GameBoardWrapperStyle>
  );
};

export default GameBoard;
