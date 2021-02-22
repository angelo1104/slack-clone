import React from "react";
import styled from "styled-components";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { emojiActions } from "../../redux/emojiSlice";

const ChatContainer = styled.div`
  flex: 1;
`;

function Chat(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  return (
    <ChatContainer onClick={() => dispatch(emojiActions.SET_SHOW(false))}>
      <p>Hi reman</p>
    </ChatContainer>
  );
}

export default Chat;
