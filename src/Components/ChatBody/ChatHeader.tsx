import React from "react";
import styled from "styled-components";
import { InfoOutlined, PersonAddOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";

const ChatHeaderContainer = styled.div`
  height: 10%;
  width: 100%;
  padding: 6px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid lightgray;

  .info-icon {
    color: gray;
    cursor: pointer;
    border-radius: 3px;
    padding: 4px;
    font-size: 32px;
    font-weight: 300 !important;

    :hover {
      color: black;
      background-color: #f6f6f6;
    }
  }

  h3 {
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  * {
    margin: auto 3px;
  }
`;

function ChatHeader(): JSX.Element {
  const { roomName } = useSelector((state: State) => state.chat);

  return (
    <ChatHeaderContainer>
      <h3># {roomName}</h3>

      <Icons>
        <PersonAddOutlined className={"info-icon"} />
        <InfoOutlined className={"info-icon"} />
      </Icons>
    </ChatHeaderContainer>
  );
}

export default ChatHeader;
