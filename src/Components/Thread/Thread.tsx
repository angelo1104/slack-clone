import React from "react";
import ThreadHeader from "./ThreadHeader";
import styled from "styled-components";
import ThreadMain from "./ThreadMain";
import ThreadInput from "./ThreadInput";

const ThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35%;
  border-left: 1px solid lightgray;
  padding-right: 4px;
`;

function Thread() {
  return (
    <ThreadContainer>
      <ThreadHeader />
      <ThreadMain />
      <ThreadInput />
    </ThreadContainer>
  );
}

export default Thread;
