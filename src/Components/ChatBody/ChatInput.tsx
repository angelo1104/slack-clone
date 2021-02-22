import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 97%;
  margin: auto;
  border: 1px solid lightgray;
`;

const Input = styled.input``;

function ChatInput(): JSX.Element {
  return (
    <InputContainer>
      <Input />
    </InputContainer>
  );
}

export default ChatInput;
