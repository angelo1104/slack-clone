import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { emojiActions } from "../../redux/emojiSlice";

const ChatMainContainer = styled.div`
  height: 88%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 4px;
`;

function ChatMain(): JSX.Element {
  const dispatch = useDispatch();
  return (
    <ChatMainContainer
      onClick={() => {
        dispatch(emojiActions.SET_SHOW(false));
        dispatch(emojiActions.SET_THREAD_SHOW(false));
      }}
    >
      <Chat />
      <ChatInput />
    </ChatMainContainer>
  );
}

export default ChatMain;
