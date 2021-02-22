import React from "react";
import styled from "styled-components";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { emojiActions } from "../../redux/emojiSlice";
import ChatBubble from "./ChatBubble";

const ChatContainer = styled.div`
  flex: 1;
`;

function Chat(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  return (
    <ChatContainer onClick={() => dispatch(emojiActions.SET_SHOW(false))}>
      <ChatBubble />
    </ChatContainer>
  );
}

export default Chat;
