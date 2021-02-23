import React from "react";
import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import ChatMain from "./ChatMain";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import Thread from "../Thread/Thread";

const ChatContainer = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

const ChatDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function ChatBody(): JSX.Element {
  const { thread, messageId } = useSelector((state: State) => state.chat);

  return (
    <ChatDiv>
      <ChatContainer>
        <ChatHeader />

        <ChatMain />
      </ChatContainer>

      {thread && messageId && <Thread />}
    </ChatDiv>
  );
}

export default ChatBody;
