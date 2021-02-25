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
  background-color: ${(props) => props.theme.chat.background};
  color: ${(props) => props.theme.chat.color};
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
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
