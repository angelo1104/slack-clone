import React from "react";
import styled from "styled-components";
import { ChatBubbleOutline, DeleteOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../redux/chatSlice";
import { auth, db } from "../../firebase/firebase";
import { State } from "../../redux/store";
import { useAuthState } from "react-firebase-hooks/auth";

const Icons = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-30%);
  padding: 3px 10px;
  display: none;
  justify-content: space-between;
  right: 30px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid lightgray;
`;

const ChatBubbleContainer = styled.div`
  display: flex;
  transition: background-color 100ms ease-in;
  padding: 10px 20px;
  position: relative;

  :hover {
    background-color: rgba(82, 82, 82, 0.1);
    ${Icons} {
      display: flex;
    }
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
`;

const ChatContent = styled.div`
  padding: 3px 10px 0 15px;

  h2 {
    font-size: 16px;
    margin: 0;
    font-weight: 800;
  }

  pre {
    font-size: 17px;
    margin: 12px 1px;
    font-family: "Inter", sans-serif;
  }
`;

const Icon = styled.div`
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 80ms ease-in;
  margin: auto 3px;

  :hover {
    background-color: rgba(82, 82, 82, 0.1);

    .MuiSvgIcon-root {
      color: black;
    }
  }

  .MuiSvgIcon-root {
    color: gray;
    font-size: 20px;
  }
`;

interface Props {
  image: string;
  id: string;
  user: string;
  message: string;
  userId: string;
}

function ChatBubble({
  image,
  id,
  message,
  user: older,
  userId,
}: Props): JSX.Element {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const { roomId, messageId } = useSelector((state: State) => state.chat);

  return (
    <ChatBubbleContainer>
      <Img src={image} />

      <Icons>
        <Icon
          onClick={() => {
            dispatch(chatActions.SET_MESSAGE_ID(id));
            dispatch(chatActions.SET_THREAD(true));
          }}
        >
          <ChatBubbleOutline />
        </Icon>
        {userId === user?.uid && (
          <Icon
            onClick={() => {
              if (userId === user?.uid) {
                if (messageId === id) dispatch(chatActions.SET_MESSAGE_ID(""));

                db.collection("rooms")
                  .doc(roomId)
                  .collection("messages")
                  .doc(id)
                  .delete()
                  .then(() => {
                    console.log("Document successfully deleted!");
                  })
                  .catch((error) => {
                    console.error("Error removing document: ", error);
                  });
              }
            }}
          >
            <DeleteOutlined />
          </Icon>
        )}
      </Icons>
      <ChatContent>
        <h2>{older}</h2>
        <pre>{message}</pre>
      </ChatContent>
    </ChatBubbleContainer>
  );
}

export default ChatBubble;
