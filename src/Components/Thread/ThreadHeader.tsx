import React from "react";
import styled from "styled-components";
import { Close } from "@material-ui/icons";

const ThreadContainer = styled.div`
  border-bottom: 1px solid lightgray;
  height: 10%;
  display: flex;
  justify-content: space-between;
`;

const ThreadLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 5px 10px 10px;

  h4,
  p {
    margin: 0;
  }

  h4 {
    font-size: 15px;
    font-weight: 800;
  }

  p {
    font-size: 13px;
    color: gray;
  }
`;

const Icon = styled.div`
  align-self: center;
  margin-right: 10px;
  cursor: pointer;
  color: gray;
  padding: 3px;
  transition: 80ms color ease-in, 80ms background-color ease-in;
  border-radius: 4px;

  :hover {
    color: black;
    background-color: rgba(128, 128, 128, 0.2);
  }
`;

function ThreadHeader() {
  return (
    <ThreadContainer>
      <ThreadLeft>
        <h4>Thread</h4>
        <p># -article-ui-dart</p>
      </ThreadLeft>

      <Icon>
        <Close />
      </Icon>
    </ThreadContainer>
  );
}

export default ThreadHeader;
