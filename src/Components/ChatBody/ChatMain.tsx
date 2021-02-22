import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Chat from "./Chat";

const ChatMainContainer = styled.div`
  height: 88%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

function ChatMain(): JSX.Element {
  return (
    <ChatMainContainer>
      <Chat />
      <ChatInput />
    </ChatMainContainer>
  );
}

export default ChatMain;
