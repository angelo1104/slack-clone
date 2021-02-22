import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";

const ChatMainContainer = styled.div`
  height: 88%;
`;

function ChatMain(): JSX.Element {
  return (
    <ChatMainContainer>
      <p>hello</p>

      <ChatInput />
    </ChatMainContainer>
  );
}

export default ChatMain;
