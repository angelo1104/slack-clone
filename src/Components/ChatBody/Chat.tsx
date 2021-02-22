import React from "react";
import styled from "styled-components";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { emojiActions } from "../../redux/emojiSlice";
import ChatBubble from "./ChatBubble";

const ChatContainer = styled.div`
  flex: 1;
  height: 85%;
  overflow-y: overlay;
  padding-right: 4px;

  :hover {
    ::-webkit-scrollbar {
      display: block;
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
    display: none;
    position: absolute;
  }

  ::-webkit-scrollbar-track {
    border-radius: 50px;
    margin: auto 3px;
    background-color: white;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: rgba(128, 128, 128, 0.5);
  }
`;

function Chat(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  return (
    <ChatContainer onClick={() => dispatch(emojiActions.SET_SHOW(false))}>
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
      <ChatBubble />
    </ChatContainer>
  );
}

export default Chat;
