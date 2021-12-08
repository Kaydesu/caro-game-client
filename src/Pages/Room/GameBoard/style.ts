import styled from "styled-components";

export const GameBoardWrapperStyle = styled.div`
  width: calc(100vw - 400px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
    box-sizing: border-box;

  button {
    width: 337.93px;
    height: 90px;
    margin-bottom: 10px;
    background: #a5e2e2;
    border-radius: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 53px;
    color: #ffffff;
  }

  .board {
    height: calc(100vh - 100px);
    background: #FFFFFF;
    border: 5px solid #42C7C7;
    box-sizing: border-box;
    border-radius: 20px;
  }
`;