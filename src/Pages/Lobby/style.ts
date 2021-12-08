import styled from "styled-components";
import { FlexBox } from "../../styles/global";

export const LobbyStyle = styled(FlexBox)`
  height: 100vh;
  width: 100vw;
`;

export const LeftBar = styled.div`
  width: 273px;
  height: 100vh;
  background: #e4fdfa;
  box-shadow: 4px 4px 18px 7px rgba(64, 176, 176, 0.22);
  .create-room {
    padding: 40px 10px;
    button {
      width: 100%;
      padding: 5px 12px;
      border-radius: 4px;
    }
    input {
      width: 100%;
      margin-bottom: 12px;
      border-radius: 4px;
    }
  }
`;
