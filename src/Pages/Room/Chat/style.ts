import styled from "styled-components";

export const ChatWrapperStyle = styled.div`
  width: 400px;
  height: 100vh;
  background: #e4fdfa;
  box-shadow: 4px 4px 18px 7px rgba(64, 176, 176, 0.22);
  padding: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .leave-btn {
    margin-bottom: 8px;
  }

  .chat_container {
    height: calc(100vh - 200px);
    background: #FFFFFF;
    border-radius: 16px;
    left: 20px;
  }
  textarea {
    padding: 12px;
    font-size: 16px;
    border-radius: 10px;
    width: auto;
  }
`;