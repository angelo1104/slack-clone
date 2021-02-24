import React, { useEffect } from "react";
import styled from "styled-components";
import { AppDispatch, State } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { emojiActions } from "../../redux/emojiSlice";
import { db } from "../../firebase/firebase";
import { chatActions } from "../../redux/chatSlice";
import ChatBubble from "./ChatBubble";

const ChatContainer = styled.div`
  flex: 1;
  height: 85%;
  overflow-y: overlay;
  padding-right: 4px;
  padding-top: 15px;

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

function Chat(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const { roomId, messages } = useSelector((state: State) => state.chat);

  useEffect(() => {
    try {
      const unsubscribe = db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp")
        .onSnapshot((snapshot) => {
          dispatch(
            chatActions.SET_MESSAGES(
              snapshot.docs.map((doc) => {
                return {
                  message: doc.data().message,
                  user: doc.data().user,
                  userPhoto: doc.data().userPhoto,
                  userId: doc.data().userId,
                  messageId: doc.id,
                  thread: [],
                };
              }),
            ),
          );
        });

      return () => unsubscribe();
    } catch (e) {
      console.log(e);
    }
  }, [roomId]);

  return (
    <ChatContainer onClick={() => dispatch(emojiActions.SET_SHOW(false))}>
      {messages.map((message) => {
        return (
          <ChatBubble
            key={message.messageId}
            image={message.userPhoto}
            id={message.messageId}
            user={message.user}
            message={message.message}
            userId={message.userId}
          />
        );
      })}
    </ChatContainer>
  );
}

export default Chat;
