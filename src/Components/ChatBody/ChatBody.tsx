import React from "react";
import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import ChatMain from "./ChatMain";

const ChatContainer = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

function ChatBody(): JSX.Element {
  return (
    <ChatContainer>
      <ChatHeader />

      <ChatMain />
    </ChatContainer>
  );
}

export default ChatBody;
