import React from "react";
import ThreadInput from "./ThreadInput";
import styled from "styled-components";
import ThreadBubble from "./ThreadBubble";

const ThreadMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  overflow-y: overlay;

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

const ThreadMain = () => {
  return (
    <ThreadMainContainer>
      <ThreadBubble />
      <ThreadBubble />
      <ThreadBubble />
      <ThreadBubble />
      <ThreadBubble />
      <ThreadBubble />
      <ThreadBubble />
      <ThreadBubble />
      <ThreadBubble />
      <ThreadBubble />
      <ThreadBubble />
      <ThreadInput />
    </ThreadMainContainer>
  );
};

export default ThreadMain;
