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
    padding: 20px 15px;
    overflow-y: auto;
  }
  textarea {
    padding: 12px;
    font-size: 16px;
    border-radius: 10px;
    width: auto;
  }
`;

export const ChatBubble = styled.li`
  text-align: left;
  margin-bottom: 12px;

  &.align-right {
    text-align: right;
  }

  .message-container {
    background: #417771;
    color: #fff;
    display:inline-block; 
    border-radius: 12px 12px 12px 0;
    font-size: 12px;
    padding: 10px 12px;
  }

`;