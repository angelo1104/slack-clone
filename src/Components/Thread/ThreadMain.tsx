import React, { useEffect, useState } from "react";
import ThreadInput from "./ThreadInput";
import styled from "styled-components";
import ThreadBubble from "./ThreadBubble";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/firebase";

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

const ReplyNumber = styled.p`
  font-family: "Inter", sans-serif;
  color: gray;
  font-size: 16px;
  padding-left: 10px;
  margin: 5px 0;
`;

const ThreadMain = () => {
  const { roomId, messageId } = useSelector((state: State) => state.chat);
  const [message, setMessage] = useState<Message | null>(null);

  interface Message {
    message: string;
    user: string;
    userId: string;
    userPhoto: string;
    id: string;
  }

  interface Thread {
    message: string;
    user: string;
    userId: string;
    userPhoto: string;
    id: string;
  }

  const [thread, setThread] = useState<Array<Thread>>([]);

  useEffect(() => {
    console.log("thread", thread);
  }, [thread]);

  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .doc(messageId)
      .collection("threads")
      .orderBy("timestamp")
      .onSnapshot((thread) => {
        setThread(
          thread.docs.map((thread) => {
            return {
              message: thread.data()?.message,
              user: thread.data()?.user,
              userId: thread.data()?.userId,
              userPhoto: thread.data()?.userPhoto,
              id: thread.id,
            };
          }),
        );
      });
  }, [roomId, messageId]);

  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .doc(messageId)
      .onSnapshot((message) => {
        setMessage({
          message: message?.data()?.message,
          user: message?.data()?.user,
          userId: message?.data()?.userId,
          userPhoto: message?.data()?.userPhoto,
          id: message.id,
        });
      });
  }, [messageId]);

  return (
    <ThreadMainContainer>
      <ThreadBubble
        id={message?.id}
        image={message?.userPhoto}
        user={message?.user}
        message={message?.message}
        userId={message?.userId}
        key={message?.id}
      />

      <ReplyNumber>
        {thread.length} {thread.length > 1 ? "replies" : "reply"}
      </ReplyNumber>
      {thread?.map((doc: Thread) => {
        return (
          <ThreadBubble
            id={doc.id}
            image={doc.userPhoto}
            user={doc.user}
            message={doc.message}
            userId={doc.userId}
            key={doc.id}
          />
        );
      })}
      <ThreadInput />
    </ThreadMainContainer>
  );
};

export default ThreadMain;
