import React from "react";
import ThreadInput from "./ThreadInput";
import styled from "styled-components";
import ThreadBody from "./ThreadBody";

const ThreadMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ThreadMain = () => {
  return (
    <ThreadMainContainer>
      <ThreadBody />
      <ThreadInput />
    </ThreadMainContainer>
  );
};

export default ThreadMain;
