import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 10px;
  transition: background-color 80ms ease-in;
  cursor: auto;

  :hover {
    background-color: rgba(82, 82, 82, 0.1);
  }
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 4px;
  cursor: pointer;
  object-fit: cover;
`;

const BubbleRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3px 0 3px 10px;

  h5 {
    font-family: "Inter", sans-serif;
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: 800;
  }

  pre {
    font-family: "Inter", sans-serif;
    margin: 0;
  }
`;

interface Props {
  image?: string;
  user?: string;
  id?: string;
  message?: string;
  userId?: string;
}

function ThreadBubble({ image, user, id, message }: Props) {
  return (
    <Container>
      <Avatar src={image} />
      <BubbleRight>
        <h5>{user}</h5>
        <pre>{message}</pre>
      </BubbleRight>
    </Container>
  );
}

export default ThreadBubble;
