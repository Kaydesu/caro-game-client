import styled from "styled-components";
import { FlexBox } from "../../styles/global";

export const LoginPageWrapper = styled(FlexBox)`
  width: 100vw;
  height: 100vh;
`;

export const LoginFormStyle = styled.div`
  max-width: 400px;
  padding: 40px 35px;
  background: #e4fdfa;
  box-shadow: 0px 4px 4px rgb(64 176 176 / 22%);
  border-radius: 16px;

  .name-input {
    width: 330px;
    input, button {
      width: 100%;
      display: block;
    }
    input {
      margin-bottom: 16px;
      height: 47px;
      text-align: center;
    }
    button {
      height: 80px;
      font-size: 18px;
    }
  }
`;